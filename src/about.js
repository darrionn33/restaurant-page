export default function about(params) {
  const about = document.createElement("main");
  const h1 = document.createElement("h1");
  h1.textContent = "Come and have some delicious food!";
  const p = document.createElement("p");
  p.textContent = "Tasty and affordable!";
  const orderButton = document.createElement("button");
  orderButton.textContent = "Order Now";
  orderButton.id = "order-button";
  orderButton.title = "Menu";

  orderButton.onclick = () => {
    document.querySelector("#menu-button").click();
  };

  const infoDiv = document.createElement("div");

  const locationDiv = document.createElement("div");
  const locationIcon = new Image();
  const pLocation = document.createElement("p");
  locationIcon.src = "./assets/map-marker-custom.png";
  pLocation.textContent =
    "Main Campus Rd, North Eastern Hill University, Shillong, Meghalaya 793022";
  locationDiv.appendChild(locationIcon);
  locationDiv.appendChild(pLocation);

  const timingDiv = document.createElement("div");
  const timingIcon = new Image();
  const pTiming = document.createElement("p");
  const span = document.createElement("span");
  span.textContent = "Mon-Sun:";
  timingIcon.src = "./assets/clock-outline-custom.png";
  pTiming.textContent = "11 A.M. to 9 P.M.";
  pTiming.insertAdjacentElement("afterbegin", span);
  timingDiv.appendChild(timingIcon);
  timingDiv.appendChild(pTiming);

  infoDiv.appendChild(locationDiv);
  infoDiv.appendChild(timingDiv);

  about.appendChild(h1);
  about.appendChild(p);
  about.appendChild(orderButton);
  about.appendChild(infoDiv);

  return about;
}
