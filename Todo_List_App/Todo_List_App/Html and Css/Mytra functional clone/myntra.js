 var swiper = new Swiper(".swiper", {
      slidesPerView: 5,
      direction: "horizontal",
      loop: true,

      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    const Topwear  = document.querySelector(".Topwear ");
    const Menu_container1 = document.querySelector(".Menu_container1");
    const men_menu = document.querySelector(".men_menu");
    const icon = document.querySelector(".icon");
    const men = document.querySelector("#men");
    const close = document.querySelector("#close");
    const back = document.querySelector("#back");
    const overelay = document.querySelector(".overelay");
    const side_bar = document.querySelector(".side_bar");
    const side_button = document.querySelector(".Header_menu_icon");


    side_button.addEventListener('click', ()=>{
overelay.style.display = "block" 

    })

    overelay.addEventListener('click', (e)=>{
      if(e.target ===overelay){
        overelay.style.display = "none" 
      }


    })
    men.addEventListener('click', (e)=>{
      if(e.target === men){
        side_bar.style.display = "none" 
        // close.style.display = "none" 
        men_menu.style.display = "block" 

      }
    })
   Menu_container1.addEventListener('click', (e) => {

    Topwear.classList.toggle('active');
    console.log("click ho raha kia ")
  
});
    back.addEventListener('click', (e)=>{
      if(e.target === back){
        men_menu.style.display = "none" 
        side_bar.style.display = "block" 

      }


    })



  const texts = [
  "Search for products...",
  "Search for brands...",
  "Find latest deals..."
];

let i = 0;
let j = 0;
let isDeleting = false;

function typeEffect() {
  const inputs = [
    document.getElementById("search"),
    document.getElementById("search2")
  ];

  const currentText = texts[i];

  inputs.forEach(input => {
    if (!input) return;

    if (!isDeleting) {
      input.placeholder = currentText.substring(0, j++);
    } else {
      input.placeholder = currentText.substring(0, j--);
    }
  });

  let speed = isDeleting ? 50 : 100;

  if (j === currentText.length) {
    isDeleting = true;
    speed = 1200; // pause
  } 
  else if (j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
