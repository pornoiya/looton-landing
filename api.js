function checkEmail(email) {
    return String(email)
    .toLowerCase()
    .match(/^\S+@\S+$/);
}

export function onSumbit() {
    const emailField = document.getElementById("launch-form-email");
    const email = emailField?.value;

    if (checkEmail(email)) {
        console.log("OK LERS GOO");
    }
}
