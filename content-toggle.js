/**
 * @function
 * Function that toggles content on chip click
 * @param { string } sellersChipId, @param { string } customersChipId – toggle element id value
 * @param { string } sellersContentClassName, @param { string } customersContentClassName – content classnames
 * @param { string } classChecked, @param { string }  classHidden – css classnames that shows/hide elements
 */
export function toggleCustomerSeller(sellersChipId, customersChipId, 
  sellersContentClassName, customersContentClassName, 
  classChecked, classHidden) {
  // const sellersInstructionsChip = document.getElementById("instructions__sellers")
  // const customersInstructionsChip = document.getElementById("instructions__customers")
  // const sellersInstructions = document.getElementsByClassName("instructions-grid sellers")?.[0]
  // const customersInstructions = document.getElementsByClassName("instructions-grid customers")?.[0]

  // sellersInstructionsChip.addEventListener('click', function () {
  //   customersInstructionsChip.classList.remove("customer-seller-toggle__checked");
  //   sellersInstructionsChip.classList.add("customer-seller-toggle__checked");
  //   sellersInstructions.classList.remove("instructions-grid__hidden")
  //   customersInstructions.classList.add("instructions-grid__hidden")
  // })

  // customersInstructionsChip.addEventListener('click', function () {
  //   sellersInstructionsChip.classList.remove("customer-seller-toggle__checked");
  //   customersInstructionsChip.classList.add("customer-seller-toggle__checked");
  //   customersInstructions.classList.remove("instructions-grid__hidden")
  //   sellersInstructions.classList.add("instructions-grid__hidden")
  // })

  const sellersInstructionsChip = document.getElementById(sellersChipId)
  const customersInstructionsChip = document.getElementById(customersChipId)
  const sellersInstructions = document.getElementsByClassName(sellersContentClassName)?.[0]
  const customersInstructions = document.getElementsByClassName(customersContentClassName)?.[0]

  sellersInstructionsChip.addEventListener('click', function () {
    customersInstructionsChip.classList.remove(classChecked);
    sellersInstructionsChip.classList.add(classChecked);
    sellersInstructions.classList.remove(classHidden)
    customersInstructions.classList.add(classHidden)
  })

  customersInstructionsChip.addEventListener('click', function () {
    sellersInstructionsChip.classList.remove(classChecked);
    customersInstructionsChip.classList.add(classChecked);
    customersInstructions.classList.remove(classHidden)
    sellersInstructions.classList.add(classHidden)
  })
}
