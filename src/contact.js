import put from "put-selector";

export default function contact(params) {
  const contact = put("main#contact");
  const contactDiv = put("div.contact-div");
  put(contact, "h1", "Contact Us!");
  put(contact, contactDiv);

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

  put(contactDiv, infoDiv);
  put(contactDiv, "iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.862665181262!2d91.89953234058332!3d25.60947941497087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507f312ba577d1%3A0x793839d4e6c4ac50!2sChill%20Out%20Cafe!5e0!3m2!1sen!2sin!4v1698896482652!5m2!1sen!2sin",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
  });

  return contact;
}
