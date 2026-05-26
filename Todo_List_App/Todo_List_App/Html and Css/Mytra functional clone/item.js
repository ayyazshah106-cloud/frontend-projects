

let displayItemsOnHomePage = ()=>{
let Items_container_elem = document.querySelector(".items_container");

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



