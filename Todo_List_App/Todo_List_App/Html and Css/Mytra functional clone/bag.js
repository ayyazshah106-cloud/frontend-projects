const CONVENIENCE_FEE =99;
let currentbagitems;
onLoad();
function onLoad(){
  itemObej();
 displayBagitems();
 displayBagSummary();
}


 function displayBagSummary(){
  let BagSummaryElement = document.querySelector(".bag-summary");
  let totalItems = currentbagitems.length;
  let totalMrp = 0;
  let totalDiscount = 0;
  let finalPayment = 0;
  currentbagitems.forEach(bagItem =>{
    totalMrp += bagItem.original_price;
    totalDiscount += bagItem.current_price - bagItem.original_price;
     finalPayment += totalMrp + totalDiscount + CONVENIENCE_FEE;
  });

 
  BagSummaryElement.innerHTML = ` <div class="bag-details-container">
          <div class="price-header">PRICE DETAILS (${totalItems} Items) </div>
          <div class="price-item">
            <span class="price-item-tag">Total MRP</span>
            <span class="price-item-value">Rs${totalMrp}</span>
          </div>
          <div class="price-item">
            <span class="price-item-tag">Discount on MRP</span>
            <span class="price-item-value priceDetail-base-discount">-Rs${totalDiscount}</span>
          </div>
          <div class="price-item">
            <span class="price-item-tag">Convenience Fee</span>
            <span class="price-item-value">Rs 99</span>
          </div>
          <hr>
          <div class="price-footer">
            <span class="price-item-tag">Total Amount</span>
            <span class="price-item-value">Rs ${finalPayment}</span>
          </div>
        </div>
        <button class="btn-place-order">
          <div class="css-xjhrni">PLACE ORDER</div>
        </button>`
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

function removefrombag(bagId){
 let index = bagItems.findIndex(id => String(id) === String(bagId));

if (index !== -1) {
    bagItems.splice(index, 1);
}

localStorage.setItem("bagItems", JSON.stringify(bagItems));
   itemObej();
   displayBagItems();
   displayBagitems();
   displayBagSummary();


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

          <div class="remove-from-cart" onclick = "removefrombag(${item.id})">X</div>
        </div>`
}
