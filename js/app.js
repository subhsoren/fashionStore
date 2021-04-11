const menuIcon = document.querySelector('.menu-icon');
var mobileNav = document.querySelector('.mobile-nav');
mobileNav.style.maxHeight = "0px";

function menuToggle(){
    if(mobileNav.style.maxHeight == "0px"){
        mobileNav.style.maxHeight = "200px";
    }else{
        mobileNav.style.maxHeight = "0px";
    }
}