
function calculate(){
    var prin=parseFloat(document.getElementById('principle').value);
    var intRate=parseFloat(document.getElementById('rate').value);
    var ratePerc=intRate/100;
    var varTime=parseFloat(document.getElementById('time').value);
    var halfAnEquation=1+ratePerc*varTime

    document.getElementById("changeTxt").innerHTML="With a starting principle of $" + prin + " and with a growth rate of " + intRate + "% for " + varTime + " years, your total interest will be " + prin*halfAnEquation.toFixed(2);
}