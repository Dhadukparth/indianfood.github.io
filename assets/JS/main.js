const toggleBTN = document.getElementById("toggleBtn");
const closeBTN = document.getElementById("closeBtn");
const banner = document.getElementById("banner");


toggleBTN.addEventListener('click', function(){
    banner.classList.add("menuActive");
});

closeBTN.addEventListener('click', function(){
    banner.classList.remove("menuActive");
});