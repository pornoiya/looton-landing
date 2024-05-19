function checkEmail(email) {
    return String(email)
    .toLowerCase()
    .match(/^\S+@\S+$/);
}

const EMAIL_IS_EXIST_IN_PROMO_ERROR_CODE = "EMAIL_IS_EXIST_IN_PROMO";
const EMAIL_IS_NOT_CORRECT_ERROR_CODE = "EMAIL_IS_NOT_CORRECT";
const CANNOT_ADD_EMAIL_IN_PROMO_ERROR_CODE = "CANNOT_ADD_EMAIL_IN_PROMO";

export async function onSumbit() {
    const emailField = document.getElementById("launch-form-email");
    const successPopup = document.getElementById("screen-launch-form_popup-success");
    const emailPopup = document.getElementById("screen-launch-form_popup-email");
    const errorPopup = document.getElementById("screen-launch-form_popup-error");
    const email = emailField?.value;

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

            if (response?.ok) {
                const jsonRespoonse = await response.json();
                if (jsonRespoonse.success) {
                    openPopup(successPopup);
                } else {
                    const id = jsonRespoonse?.error?.id;
                    if (id === EMAIL_IS_EXIST_IN_PROMO_ERROR_CODE) {
                        openPopup(emailPopup);
                    } else if (id === CANNOT_ADD_EMAIL_IN_PROMO_ERROR_CODE) {
                        openPopup(errorPopup);
                    } else {
                        console.log("ERRROR");
                    }
                }
            }
        }
        catch (error) {
            console.error(`Error submitting email ${email}: ${error}`);
        }
        // body.classList.add("show-popup"); 
        // successPopup.classList.remove("hidden");
    }
}

function openPopup(popup) {
    const body = document.getElementsByTagName("body")?.[0];

    body.classList.add("show-popup"); 
    popup.classList.remove("hidden");
}

export function onPopupClose() {
    const body = document.getElementsByTagName("body")?.[0];
    const popups = document.getElementsByClassName("screen-launch-form_popup");
    for (let cross of popups) {
        cross.classList.add("hidden");
    }
    body.classList.remove("show-popup");

}