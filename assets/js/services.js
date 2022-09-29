/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*==================== HIDE MENU ====================*/

const hideMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.remove('show-menu')
        })
    }
}

showMenu('x','nav-menu')


/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,

})

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 5000,
      },

    thumbs: {
      swiper: galleryThumbs
    }
})


const imgbx = document.querySelector('.imgbx')
const slides = imgbx.getElementsByTagName('img')
let i =0;

function nextSlide()
{
    slides[i].classList.remove('active')
    i= (i+1) % slides.length;
    slides[i].classList.add('active')
}


