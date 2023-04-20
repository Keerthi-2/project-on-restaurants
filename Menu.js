var menuItems = [
  {name: "Burger", description: "Juicy beef burger with lettuce, tomato, and cheese", price: "$10.99", image: "burger.jpg"},
  {name: "Pizza", description: "Freshly baked pizza with your choice of toppings", price: "$12.99", image: "pizza.jpg"},
  {name: "Pasta", description: "Spaghetti with meatballs and marinara sauce", price: "$8.99", image: "pasta.jpg"},
   {name: "Cake", description: "Spaghetti with meatballs and marinara sauce", price: "$8.99", image: "pasta.jpg"},
    {name: "Momos", description: "Spaghetti with meatballs and marinara sauce", price: "$8.99", image: "pasta.jpg"},
     {name: "Pasta", description: "Spaghetti with meatballs and marinara sauce", price: "$8.99", image: "pasta.jpg"},
      {name: "Pasta", description: "Spaghetti with meatballs and marinara sauce", price: "$8.99", image: "pasta.jpg"},
       {name: "Pasta", description: "Spaghetti with meatballs and marinara sauce", price: "$8.99", image: "pasta.jpg"},
        {name: "Pasta", description: "Spaghetti with meatballs and marinara sauce", price: "$8.99", image: "pasta.jpg"},
         {name: "Pasta", description: "Spaghetti with meatballs and marinara sauce", price: "$8.99", image: "pasta.jpg"}
  // Add more menu items here...
];

// Store the menu items in the Web Storage
localStorage.setItem("menuItems", JSON.stringify(menuItems));

// Retrieve the menu items from the Web Storage
var storedMenuItems = JSON.parse(localStorage.getItem("menuItems"));

// Display the menu items on a web page
var menuPage = document.getElementById("menu");
for (var i = 0; i < storedMenuItems.length; i++) {
  var menuItem = storedMenuItems[i];
  var menuItemElement = document.createElement("div");
  menuItemElement.innerHTML = `
    <img src="${menuItem.image}" alt="${menuItem.name}">
    <h2>${menuItem.name}</h2>
    <p>${menuItem.description}</p>
    <p>${menuItem.price}</p>
  `;
  menuPage.appendChild(menuItemElement);
}