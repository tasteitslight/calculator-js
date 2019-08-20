function currency (a) {
  return Number(a.toFixed(0)).toLocaleString();
}

function gid (a) {
  return document.getElementById(a);
}

function calculate () {

  let initialGain = Number(document.getElementById('initialGain').value.replace(/\D/g,''));
  let capGain = document.getElementsByClassName('capGain');
  let capGain__neg = document.getElementsByClassName('capGain__neg');
  let calc__table = document.getElementsByClassName('calc__table');
  let calc__td = calc__table[0].getElementsByTagName('td');

  let initialFedTax = initialGain * .238;
  let capAvail = initialGain - initialFedTax;
  let newValue = capAvail * (1+ .09 * 10);
  let newValueB = initialGain * (1+ .09 * 10);
  let tax85 = initialFedTax * .85
  let tax2029 = (newValue - capAvail) * .238;
  let afterTax = newValue - tax2029;
  let afterTaxB = newValueB - tax85;
  let netProfit = afterTax - initialGain;
  let netProfitB = afterTaxB - initialGain;

  // Capital Gain - $ Global

  for (let i=0; i<capGain.length; i++) {
    capGain[i].innerHTML = "$" +  currency(initialGain);
  }
  
  // Top Federal Tax Paid on Original Capital Gain, 23.8%

  gid('initialFedTax').innerHTML = "(" + currency(initialFedTax) + ")";
  
  // Capital Available for a "New Investment" in 2019

  document.getElementById('capAvail').innerHTML = "$" + currency(capAvail);

  // Value of New Investment After 10 Years

  gid('newValue').innerHTML = "$" + currency(newValue);
  gid('newValueB').innerHTML = "$" + currency(newValueB);

  // Top Federal Tax on 85% of Original Gain due Dec 31, 2026

  gid('tax85').innerHTML = "(" + currency(tax85) + ")";

  // Top Federal Tax on Disposition of New Investment in 2029

  gid('tax2029').innerHTML = "(" + currency(tax2029) + ")";

  // After Tax Proceeds

  gid('afterTax').innerHTML = "$" + currency(afterTax);
  gid('afterTaxB').innerHTML = "$" + currency(afterTaxB);

  // Less: Original Gain

  for (let i=0; i<capGain__neg.length; i++) {
    capGain__neg[i].innerHTML = "(" + currency(initialGain) + ")";
  }

  // Net Profit

  gid('netProfit').innerHTML = "$" + currency(netProfit);
  gid('netProfitB').innerHTML = "$" + currency(netProfitB);

  for (let i=0; i < calc__td.length; i++) {
    calc__td[i].style.color = '#000000';
  }

}

function update() {

  setTimeout(calculate, 500)
  return false;

}
