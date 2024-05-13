import axios from "axios";

function checkEmail(email) {
    return String(email)
    .toLowerCase()
    .match(/^\S+@\S+$/);
}

export function onSumbit() {
    const emailField = document.getElementById("launch-form-email");
    const successPopup = document.getElementById("screen-launch-form_popup-success");
    const emailPopup = document.getElementById("screen-launch-form_popup-email");
    const errorPopup = document.getElementById("screen-launch-form_popup-error");
    const email = emailField?.value;

    const body = document.getElementsByTagName("body")?.[0];

    if (checkEmail(email)) {
        // axios.put()
        body.classList.add("show-popup"); 
        successPopup.classList.remove("hidden");
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