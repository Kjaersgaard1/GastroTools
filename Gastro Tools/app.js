const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');

    //Toggle Nav
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav_active');

/*     //Animate Links
    navLinks.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation = ''
         }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`;
            }
        }); */
});
}

navSlide();