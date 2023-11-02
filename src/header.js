import put from "put-selector";

export default function header(params) {
  const header = put("header");
  const buttonsDiv = put("div.buttons");

  const aboutButton = put("button#about-button.active-tab", "About");
  const menuButton = put("button#menu-button", "Menu");
  const contactButton = put("button#contact-button", "Contact");

  put(buttonsDiv, aboutButton);
  put(buttonsDiv, menuButton);
  put(buttonsDiv, contactButton);
  put(header, "h2", "Chill Out Cafe");
  put(header, buttonsDiv);

  return header;
}
