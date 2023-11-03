import "./styles.css";
import rootRender from "./rootRender";
import header from "./header";
import about from "./about";
import menu from "./menu";
import contact from "./contact";
import toggleActiveTab from "./toggleActiveTab";
import fixMinHeight from "./fixMinHeight";

rootRender(header());
rootRender(about());
fixMinHeight();

document.querySelector("#about-button").onclick = () => {
  rootRender("", "rpc");
  rootRender(about());
  toggleActiveTab("A");
  fixMinHeight();
};
document.querySelector("#menu-button").onclick = () => {
  rootRender("", "rpc");
  rootRender(menu());
  toggleActiveTab("M");
  fixMinHeight();
};
document.querySelector("#contact-button").onclick = () => {
  rootRender("", "rpc");
  rootRender(contact());
  toggleActiveTab("C");
  fixMinHeight();
};
