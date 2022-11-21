const btnScrollTop = document.querySelector('#backToTop')
const btnHambuger = document.querySelector('#btnHambuger')
const btnCloseMenu = document.querySelector('#btnCloseMenu')

//Sticky menu
window.onscroll = function(){
    const header = document.getElementById("stickyHeader")
    const sticky = header.offsetTop

    //Show sticky nav
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }

    if(window.pageYOffset > window.innerHeight/2){
        btnScrollTop.style.display  = "block"
    }
    else{
        btnScrollTop.style.display  = "none"
    }
}

//Toggle nav bar
btnHambuger.addEventListener('click', () => {
    const fixedMenu = document.querySelector('#menu')
    fixedMenu.classList.add('menu--active')
  });

btnCloseMenu.addEventListener('click', () => {
    const fixedMenu = document.querySelector('#menu')
    fixedMenu.classList.remove('menu--active')
  });

//Scroll top
btnScrollTop.addEventListener('click', () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
}));


//Swiper
var mySwiper = new Swiper ('.swiper', {
    // Các Parameters
    direction: 'horizontal',
    loop: true,

    // pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  /**
   * Darkmode
   */
  const theme = localStorage.getItem('theme')
  const sysTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

  //Checking theme
  const themeCheck = () =>{
    if(theme === "dark" || (!theme && sysTheme)){
      document.documentElement.classList.add("dark")
      return
    }
    else{
      document.documentElement.classList.remove("light")
    }
  }

  //switching theme

  const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")){
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      return
    }
    else{
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      return
    }
  }

const btnSwitchTheme = document.querySelector("#themeSwitcher")

//always check theme 
themeCheck()
btnSwitchTheme.addEventListener('click', () => {
  themeSwitch()
});