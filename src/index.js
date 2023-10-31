import "./styles.css";
import rootRender from "./rootRender";
import header from "./header";
import about from "./about";
import menu from "./menu";
import contact from "./contact";
import toggleActiveTab from "./toggleActiveTab";

rootRender(header());
rootRender(about());

document.querySelector("#about-button").onclick = () => {
  rootRender("", "rpc");
  rootRender(about());
  toggleActiveTab("A");
};
document.querySelector("#menu-button").onclick = () => {
  rootRender("", "rpc");
  rootRender(menu());
  toggleActiveTab("M");
};
document.querySelector("#contact-button").onclick = () => {
  rootRender("", "rpc");
  rootRender(contact());
  toggleActiveTab("C");
};
