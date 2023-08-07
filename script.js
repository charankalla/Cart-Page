let onePairRadioEl=document.getElementById("onePairRadio");
let onePairContainerEl=document.getElementById("onePairContainer");
let twoPairContainerEl=document.getElementById("twoPairContainer");
let twoPairRadioEl=document.getElementById("twoPairRadio");
let bgContainerEl=document.getElementById("bgContainer");
let threePairContainerEl=document.getElementById("threePairContainer");
let threePairRadioEl=document.getElementById("threePairRadio");
let twoPairSizeColourContainerEl=document.getElementById("twoPairSizeColourContainer");
let onePairSizeColourContainerEl = document.getElementById("onePairSizeColourContainer");
let threePairSizeColourContainerEl=document.getElementById("threePairSizeColourContainer");
let priceEl=document.getElementById("price");


priceEl.textContent="DKK 0.00";
bgContainerEl.onclick=function(){
    if(onePairRadioEl.checked){
        onePairContainerEl.classList.add("checked");
        onePairSizeColourContainerEl.classList.remove("d-none");
        priceEl.textContent="DKK 195.00";
    }
    else{
        onePairContainerEl.classList.remove("checked");
        onePairSizeColourContainerEl.classList.add("d-none");
    }
    if(twoPairRadioEl.checked){
        twoPairContainerEl.classList.add("checked");
        twoPairSizeColourContainerEl.classList.remove("d-none");
        priceEl.textContent="DKK 345.00";
    }
    else{
        twoPairContainerEl.classList.remove("checked");
        twoPairSizeColourContainerEl.classList.add("d-none");
    }
    if(threePairRadioEl.checked){
        threePairContainerEl.classList.add("checked");
        threePairSizeColourContainerEl.classList.remove("d-none");
        priceEl.textContent="DKK 528.00";
    }
    else{
        threePairContainerEl.classList.remove("checked");
        threePairSizeColourContainerEl.classList.add("d-none");
    }
};
