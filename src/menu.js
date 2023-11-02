import put from "put-selector";
import menuItem from "./menuItem";
export default function menu(params) {
  const foodArray = [
    {
      name: "Beverages",
      items: [
        { name: "Regular Coffee", price: 50 },
        { name: "Cappuccino", price: 80 },
        { name: "Latte", price: 80 },
        { name: "Lassi", price: 130 },
      ],
    },
    {
      name: "Rice",
      items: [
        { name: "Plain Rice", price: 120 },
        { name: "Jeera Rice", price: 140 },
        { name: "Veg Pulao", price: 180 },
      ],
    },
    {
      name: "Veggies",
      items: [
        { name: "Aloo Dum", price: 180 },
        { name: "Jeera Aloo", price: 170 },
        { name: "Mixed Veg", price: 180 },
        { name: "Matar Paneer", price: 220 },
      ],
    },
    {
      name: "Chicken Main Course",
      items: [
        { name: "Chicken Adobo", price: 330 },
        { name: "Peri Peri Chicken", price: 330 },
        { name: "Honey Lemon Chicken", price: 330 },
        { name: "Crisy Chicken Strips", price: 330 },
        { name: "Garlic Roasted Chicken", price: 330 },
        { name: "BBQ Grilled Chicken", price: 330 },
      ],
    },
    {
      name: "Burgers",
      items: [
        { name: "B-E-L-T Burger", price: 230 },
        { name: "B-E-L-T Benedict", price: 250 },
        { name: "Veggie Hot Dog", price: 150 },
        { name: "Cheese Chilli Dog", price: 220 },
        { name: "Mo-ger (Chicken)", price: 250 },
      ],
    },
  ];
  const menu = put("main#menu");
  put(menu, "h1", "Menu");
  foodArray.forEach((section) => {
    const menuSection = put("div.menu-section");
    put(menuSection, "h2", section.name);
    section.items.forEach((food) => {
      put(menuSection, menuItem(food.name, food.price));
    });
    put(menu, menuSection);
  });
  return menu;
}
