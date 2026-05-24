let Items_container_elem = document.querySelector(".items_container");

Items_container_elem.innerHTML = `<div class="item_container">
        <img src="Images/item1.jpg" alt="">
        <div class="rating">
          4.5 ⭐ | 1.4k
        </div>
        <div class="company_name">
          Carlarton Lodon
        </div>
        <div class="item_name">
          Rhodium Plated CZ floal studs
        </div>
        <div class="price">
          <span class="current_price">Rs 600</span>
          <span class="original_price">Rs 1050</span>
          <span class="discount_price"> (42% OFF)</span>
        </div>
        <button class="add_to_bag">
          Add to bag
        </button>
      </div>`;