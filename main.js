import { toggleCustomerSeller } from "./content-toggle"
import { onSumbit, onPopupClose } from "./api"

toggleCustomerSeller("chip-instructions__sellers", "chip-instructions__customers",
"instructions__sellers", "instructions__customers",
"chip-customer-seller-toggle__checked", "hidden"
);

toggleCustomerSeller("chip-faq__sellers", "chip-faq__customers",
"faq__sellers", "faq__customers",
"chip-customer-seller-toggle__checked", "hidden"
);

const submitButton = document.getElementById("launch-form-submit-btn");

submitButton.addEventListener('click', onSumbit)

const popupCrossButton = document.getElementsByClassName("screen-launch-form_popup__header-cross-wrapper");

for (let btn of popupCrossButton) {
    btn.addEventListener('click', onPopupClose)
}

const screens = document.getElementsByClassName("application-screen");
for (let screen of screens) {
    screen.classList.remove("hidden")
    screen.classList.add("screen-bgr-shadow")
}