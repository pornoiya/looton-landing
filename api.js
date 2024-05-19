function checkEmail(email) {
    return String(email)
    .toLowerCase()
    .match(/^\S+@\S+$/);
}

export async function onSumbit() {
    const emailField = document.getElementById("launch-form-email");
    const successPopup = document.getElementById("screen-launch-form_popup-success");
    const emailPopup = document.getElementById("screen-launch-form_popup-email");
    const errorPopup = document.getElementById("screen-launch-form_popup-error");
    const email = emailField?.value;

    const body = document.getElementsByTagName("body")?.[0];

    if (checkEmail(email)) {
        body.classList.add("show-popup"); 
        successPopup.classList.remove("hidden");
        const requestOptions = {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
             },
            body: JSON.stringify({ "email": email })
        }
        fetch("http://dev.looton.ru/promo/v1/email", requestOptions)
    }
}

export function onPopupClose() {
    const body = document.getElementsByTagName("body")?.[0];
    const popups = document.getElementsByClassName("screen-launch-form_popup");
    for (let cross of popups) {
        cross.classList.add("hidden");
    }
    body.classList.remove("show-popup");

}