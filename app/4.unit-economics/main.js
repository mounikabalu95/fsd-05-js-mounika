let unitEconomicsForm = document.getElementById('calculate'),
    sellingPriceInput = document.getElementById('selling-price'),
    cogsInput = document.getElementById('cogs'),
    grossMarginInput = document.getElementById('gross-margin'),
    salesMarketingInput = document.getElementById('sales-marketing'),
    operationsCostInput = document.getElementById('operations-cost'),
    netMarginInput = document.getElementById('net-margin'),
    sellingPricevalue, cogsvalue, grossMarginvalue, 
    salesMarketingvalue, operationsCostvalue, netMarginvalue;

function calculate(e){
    e.preventDefault();
    sellingPricevalue = sellingPriceInput.value;
    cogsvalue = cogsInput.value;
    grossMarginvalue = sellingPricevalue - cogsvalue;

    salesMarketingvalue = salesMarketingInput.value;
    operationsCostvalue = operationsCostInput.value;
    netMarginvalue = grossMarginvalue - salesMarketingvalue - 
    operationsCostvalue;
    netMarginInput.value = netMarginvalue;
}

unitEconomicsForm.addEventListener('submit',calculate);
    