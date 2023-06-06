var currencyone=100;
var exchangerate=1.2;

function convert(amount,rate){
    return amount*rate;
}

var conversion=convert(currencyone,exchangerate);
console.log(conversion);