function navbarMenuOpenFunction(){
    document.getElementById('burger-menu-expanded').style.left="0%";
    document.getElementById('burger-menu-open-icon-container').style.display="none";
    document.getElementById('burger-menu-close-icon-container').style.display="block";
}
function navbarMenuCloseFunction(){
    document.getElementById('burger-menu-expanded').style.left="100%";
    document.getElementById('burger-menu-close-icon-container').style.display="none";    
    document.getElementById('burger-menu-open-icon-container').style.display="block";    
}