import { toggleCustomerSeller } from "./content-toggle"
import { onSumbit } from "./api"
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