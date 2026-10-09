

let displayItemsOnHomePage = ()=>{
let Items_container_elem = document.querySelector(".items_container");

  if(Items_container_elem === null){
    return;
  }

  // let Items_container_elem = document.querySelector(".items_container");
  

// let items = {
//   item_image : "Images/item1.jpg",
//   rating : {
//     star_rating : 4.5,
//     Reveiw : 1.5, 
//   },
//   company_name : " Carlarton Lodon",
//   item_name : " Rhodium Plated CZ floal studs",
//   current_price : 600,
//   original_price : 1050,
//   discount_price : 42,

// }
let innerHTML = "";
items.forEach(item =>{

innerHTML+=`<div class="item_container">
        <img src="${item.image}" alt="">
        <div class="rating">
          ${item.rating.stars} ⭐ |   ${item.rating.count}
        </div>
        <div class="company_name">
        ${item.company}
        </div>
        <div class="item_name">
            ${item.item_name}
        </div>
        <div class="price">
          <span class="current_price">Rs  ${item.current_price}</span>
          <span class="original_price">Rs ${item.original_price}</span>
          <span class="discount_price"> (${item.discount_percentage}% OFF)</span>
        </div>
        <button onclick = "addToBag(${item.id})"
         class="add_to_bag">
        Add to bag
        
        </button >
      </div>`

});

Items_container_elem.innerHTML =innerHTML;
}

let bagItems;

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem("bagItems" , JSON.stringify(bagItems))
  displayBagItems();
}

function displayBagItems(){
  let bag_item_count = document.querySelector(".bag_item_count");
  if(bagItems.length>0){
    bag_item_count.innerText = bagItems.length;
     bag_item_count.style.display = "block";
  }
  else{
    bag_item_count.style.display = "none";
  }
}



onLoad(); 
function onLoad(){
  let bagitemsStr = localStorage.getItem('bagItems');
  bagItems = bagitemsStr ? JSON.parse(bagitemsStr) : [];
  displayBagItems() 
  displayItemsOnHomePage()
}

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


