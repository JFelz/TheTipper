
const renderToDom = (selectId, renderToHtml) => {
  const divId = document.querySelector(selectId);
  divId.innerHTML = renderToHtml;
};


const calculateBill = document.querySelector("#calcBill");
const EnterBillValue = document.querySelector("#totalValue");


calculateBill.addEventListener('click', () => {

const billTotal = Number(EnterBillValue.value);

billTotal <= 300 && billTotal >= 50 ? tipCost = ((billTotal/100) * 15) :
billTotal > 300 ? tipCost = ((billTotal/100) * 25) : null;
billTotal < 50 ? tipCost = ((billTotal/100) * 10) : null;

console.log(tipCost);

finalValue = tipCost + billTotal;

console.log(finalValue);


renderToDom('.Here', `<b>The tip is $${tipCost.toFixed(2)}. The total is $${finalValue.toFixed(2)}.</b>`);
});

const tipBtn_10 = document.querySelector(".TipBtn_10");

tipBtn_10.addEventListener('click', () => {
  
  const billTotal = Number(EnterBillValue.value);

  billTotal < 50 ? tipCost = ((billTotal/100) * 10) : null
  
  console.log(tipCost);
  
  finalValue = tipCost + billTotal;
  
  console.log(finalValue);

  renderToDom('.Here', `<b>The tip is $${tipCost.toFixed(2)}. The total is $${finalValue.toFixed(2)}.</b>`);
});

const tipBtn_15 = document.querySelector(".TipBtn_15");

tipBtn_15.addEventListener('click', () => {
  
  const billTotal = Number(EnterBillValue.value);

  billTotal ? tipCost = ((billTotal/100) * 15) : null
  
  console.log(tipCost);
  
  finalValue = tipCost + billTotal;
  
  console.log(finalValue);

  renderToDom('.Here', `<b>The tip is $${tipCost.toFixed(2)}. The total is $${finalValue.toFixed(2)}.</b>`);
});

const tipBtn_25 = document.querySelector(".TipBtn_25");

tipBtn_25.addEventListener('click', () => {
  
  const billTotal = Number(EnterBillValue.value);

  billTotal ? tipCost = ((billTotal/100) * 25) : null
  
  console.log(tipCost);
  
  finalValue = tipCost + billTotal;
  
  console.log(finalValue);

  renderToDom('.Here', `<b>The tip is $${tipCost.toFixed(2)}. The total is $${finalValue.toFixed(2)}.</b>`);
});
