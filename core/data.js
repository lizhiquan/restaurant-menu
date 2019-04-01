let breakfastDishes = `
<div class="dish-item">
<img src="http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/break_1.jpg" alt="">
<div class="item-desc">
  <h6>Barrel's Breakfast</h6>
  <div class="price">$20</div>
</div>
</div>
<div class="dish-item">
<img src="http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/break_3.jpg" alt="">
<div class="item-desc">
  <h6>Chinese Breakfast</h6>
  <div class="price">$70</div>
</div>
</div>
<div class="dish-item">
<img src="http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/break_5.jpg" alt="">
<div class="item-desc">
  <h6>Vegetarian Spicy</h6>
  <div class="price">$20</div>
</div>
</div>
<div class="dish-item">
<img src="http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/break_2.jpg" alt="">
<div class="item-desc">
  <h6>English Breakfast</h6>
  <div class="price">$60</div>
</div>
</div>
<div class="dish-item">
<img src="http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/break_4.jpg" alt="">
<div class="item-desc">
  <h6>Eggs Breakfast</h6>
  <div class="price">$55</div>
</div>
</div>
<div class="dish-item">
<img src="http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/break_6.jpg" alt="">
<div class="item-desc">
  <h6>Cupcake Recipes</h6>
  <div class="price">$25</div>
</div>
</div>
<div class="dish-item">
<img src="http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/dess_1.jpg" alt="">
<div class="item-desc">
  <h6>Capo Steak</h6>
  <div class="price">$30</div>
</div>
</div>
<div class="dish-item">
<img src="http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/dess_5.jpg" alt="">
<div class="item-desc">
  <h6>Chinese Spicy</h6>
  <div class="price">$25</div>
</div>
</div>
<div class="dish-item">
<img src="http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/dess_2.jpg" alt="">
<div class="item-desc">
  <h6>Eggs Benedict</h6>
  <div class="price">$25</div>
</div>
</div>
<div class="dish-item">
<img src="http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/dess_6.jpg" alt="">
<div class="item-desc">
  <h6>Spicy Cheese</h6>
  <div class="price">$35</div>
</div>
</div>
`;

let lunchDishes = [
    {
        img: "http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/L_1.jpg",
        name: "Lunch Complete",
        price: 20
    },
    {
        img: "http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/L_3.jpg",
        name: "Crepe Complete",
        price: 50
    },
    {
        img: "http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/L_5.jpg",
        name: "Vegetarian Lunch",
        price: 40
    },
    {
        img: "http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/din_1.jpg",
        name: "Crepe Complete",
        price: 35
    },{
        img: "http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/L_4.jpg",
        name: "Eggs Benedict",
        price: 25
    }
    ,{
        img: "http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/L_2.jpg",
        name: "English Lunch",
        price: 40
    }
    ,{
        img: "http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/L_6.jpg",
        name: "Barrel's Lunch",
        price: 60
    }
    ,{
        img: "http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/din_2.jpg",
        name: "Vegetarian Lunch",
        price: 50
    }
    ,{
        img: "http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/L_4.jpg",
        name: "Lunch Complete",
        price: 45
    },
    {
        img: "http://rstheme.com/products/wordpress/ristora/wp-content/uploads/2019/03/L_1.jpg",
        name: "Japanese Lunch",
        price: 20
    }
];

module.exports = {
    getBreakfastDishes: function () {
        return breakfastDishes;
    }, 
    getLunchDishes: function () {
        return lunchDishes;
    }
};