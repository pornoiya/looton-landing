const EMAIL_IS_EXIST_IN_PROMO_ERROR_CODE = "EMAIL_IS_EXIST_IN_PROMO";
const CANNOT_ADD_EMAIL_IN_PROMO_ERROR_CODE = "CANNOT_ADD_EMAIL_IN_PROMO";

const SUCCESS_POPUP = { 
    icon: '<img src="public/icons/success-icon.svg" aria-hidden="true" />',
    title: 'Email отправлен',
    description: 'Мы пришлём уведомление&NewLine;о запуске'
}
const EMAIL_POPUP = { 
    icon: '<img src="public/icons/email-icon.png" aria-hidden="true" />',
    title: 'Ваш Email уже&NewLine;есть в базе',
}
const ERROR_POPUP = { 
    icon: '<img src="public/icons/error-icon.png" aria-hidden="true" />',
    title: 'Ошибка',
    description: 'Что-то пошло не так,&NewLine;но мы уже разбираемся'
}


function checkEmail(email) {
    return String(email)
    .toLowerCase()
    .match(/^\S+@\S+\.\S+$/);
}

export async function onSumbit() {
    const emailField = document.getElementById("launch-form-email");

    const email = emailField?.value;

    if (!email) {
        return;
    }

    if (checkEmail(email)) {
        const url = "http://dev.looton.ru/promo/v1/email";
        const requestOptions = {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json",
             },
            body: JSON.stringify({ "email": email })
        }
        try {
            const response = await fetch(url, requestOptions);
            const jsonRespoonse = await response.json();

            if (response?.ok) {
                if (jsonRespoonse.success) {
                    openPopup(SUCCESS_POPUP);
                } else {
                    const id = jsonRespoonse?.error?.id;
                    const errorMessage = jsonRespoonse?.error?.message;

                    if (id === EMAIL_IS_EXIST_IN_PROMO_ERROR_CODE) {
                        openPopup(EMAIL_POPUP);
                    } else if (id === CANNOT_ADD_EMAIL_IN_PROMO_ERROR_CODE) {
                        openPopup(ERROR_POPUP, errorMessage);
                    } else {
                        openPopup(ERROR_POPUP, errorMessage);
                    }
                }
            } else {
                console.error(`Error submitting email ${email}: ${jsonRespoonse?.error?.message}`);
                openPopup(ERROR_POPUP, jsonRespoonse?.error?.message);
            }
        }
        catch (error) {
            console.error(`Error submitting email ${email}: ${error}`);
        }
    } else {
        openPopup(ERROR_POPUP, "Невалидный e-mail");
    }
}

/**
 * @function
 * Function that opens popup
 * @param { Object } popup – popup to open with fields "{ icon: string, title: string, description: string }"
 * @param { string } errorMessage
 */

function openPopup(popupType, errorMessage) {
    const iconWrapper = document.getElementById("launch-form_popup__content__icon");
    const title = document.getElementById("launch-form_popup__title");
    const description = document.getElementById("launch-form_popup__description");
    
    const popupElement = document.getElementById("launch-form_popup");
    const body = document.getElementsByTagName("body")?.[0];

    iconWrapper.innerHTML = popupType.icon;
    title.innerHTML = popupType.title;
    description.innerHTML = errorMessage ?? popupType.description ?? "";

    body.classList.add("show-popup"); 
    popupElement.classList.remove("hidden");
}

export function onPopupClose() {
    const body = document.getElementsByTagName("body")?.[0];
    const popups = document.getElementsByClassName("screen-launch-form_popup");
    for (let cross of popups) {
        cross.classList.add("hidden");
    }
    body.classList.remove("show-popup");

}