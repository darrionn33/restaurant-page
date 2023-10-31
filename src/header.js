export default function header(params) {
  const header = document.createElement("header");
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons");

  const title = document.createElement("h1");
  title.textContent = "Restaurant Page";

  const aboutButton = document.createElement("button");
  aboutButton.id = "about-button";
  aboutButton.classList.add("active-tab");
  aboutButton.textContent = "About";

  const menuButton = document.createElement("button");
  menuButton.id = "menu-button";
  menuButton.textContent = "Menu";

  const contactButton = document.createElement("button");
  contactButton.id = "contact-button";
  contactButton.textContent = "Contact";

  buttonsDiv.appendChild(aboutButton);
  buttonsDiv.appendChild(menuButton);
  buttonsDiv.appendChild(contactButton);
  header.appendChild(title);
  header.appendChild(buttonsDiv);

  return header;
}
