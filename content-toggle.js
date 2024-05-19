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

  const sellersInstructionsChip = document.getElementById(sellersChipId)
  const customersInstructionsChip = document.getElementById(customersChipId)
  const sellersInstructions = document.getElementById(sellersContentClassName)
  const customersInstructions = document.getElementById(customersContentClassName)

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
