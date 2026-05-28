let currentbagitems;

onLoad();
function onLoad(){
  itemObej();
 displayBagitems();
}

function itemObej(){
  currentbagitems = bagItems.map(Itemid=>{
for(let i=0;i<items.length;i++){
  if(Itemid == items[i].id){
    return items[i];
  }
}


  });
console.log(currentbagitems);
}

function displayBagitems(){
  console.log(bagItems)
  
  let bag_items_container = document.querySelector('.bag-items-container');
  let innerHTML = '';
  currentbagitems.forEach(bagItem=>{
    
    innerHTML+=  generatItemHtml(bagItem);
  });
  
  bag_items_container.innerHTML = innerHTML;
}





function generatItemHtml(item){
return ` <div class="bag-item-container">
          <div class="item-left-part">
            <img src="${item.image}" class="bag-item-img">
          </div>
          <div class="item-right-part">
            <div class="company">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price-container">
              <span class="current-price">Rs ${item.current_price}</span>
              <span class="original-price">Rs ${item.original_price}</span>
              <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
            </div>
            <div class="return-period">
              <span class="return-period-days">${item.return_period} days</span> return available
            </div>
            <div class="delivery-details">
              Delivery by
              <span class="delivery-details-days">${item.delivery_date}</span>
            </div>
          </div>

          <div class="remove-from-cart">X</div>
        </div>`
}