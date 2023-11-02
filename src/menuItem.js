import put from "put-selector";

export default function menuItem(name, price) {
  const menuItem = put("div.menu-item");
  put(menuItem, "div", name);
  put(
    menuItem,
    "div.dot-leaders",
    "................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................"
  );
  put(menuItem, "div", "₹" + price);

  return menuItem;
}