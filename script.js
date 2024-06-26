const openMenu = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu_mobile");
const devider_top = document.querySelector(".devider_top");
const devider_midle = document.querySelector(".devider_midle");
const devider_bottom = document.querySelector(".devider_bottom");
const span_text = document.querySelector(".span_text");
const span_content = document.querySelector(".span_content");


openMenu.addEventListener("click",function(){
    mobileMenu.classList.toggle("active")
    if(mobileMenu.classList.contains("active")){
        span_text.textContent = `Закрити`;
        devider_top.style.transform = "rotate(49deg)";
        devider_bottom.style.transform = "rotate(-49deg)";
        devider_midle.style.display = "none";
        span_content.style.gap = 0 + "px";
    }
    else{
        span_text.textContent = `Меню`;
        devider_top.style.transform = "rotate(0deg)";
        devider_bottom.style.transform = "rotate(0deg)";
        devider_midle.style.display = "block";
        span_content.style.gap = 6 + "px"; 
    }
})
