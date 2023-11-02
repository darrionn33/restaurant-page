import put from "put-selector";

export default function about(params) {
  const about = put("main#about");
  put(about, "h1", "Come and have some delicious food!");
  put(about, "p", "Tasty and affordable!");
  const orderButton = put("button#order-button");
  put(about, orderButton, {
    textContent: "Order Now",
    title: "Menu",
  });

  orderButton.onclick = () => {
    document.querySelector("#menu-button").click();
  };

  const infoDiv = put("div");

  const phoneDiv = put("div");
  put(phoneDiv, "img", {
    src: "./assets/phone-custom.png",
  });
  put(phoneDiv, "p", "8787678109");
  const locationDiv = put("div");
  put(locationDiv, "img", {
    src: "./assets/map-marker-custom.png",
  });
  put(
    locationDiv,
    "p",
    "Main Campus Rd, North Eastern Hill University, Shillong, Meghalaya 793022"
  );

  const timingDiv = put("div");

  const pTiming = put("p");
  const span = put("span");
  span.textContent = "Mon-Sun:";
  pTiming.textContent = "11 A.M. to 9 P.M.";
  pTiming.insertAdjacentElement("afterbegin", span);
  put(timingDiv, "img", {
    src: "./assets/clock-outline-custom.png",
  });
  put(timingDiv, pTiming);

  put(infoDiv, phoneDiv);
  put(infoDiv, locationDiv);
  put(infoDiv, timingDiv);

  put(about, orderButton);
  put(about, infoDiv);

  return about;
}
