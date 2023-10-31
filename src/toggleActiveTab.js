export default function toggleActiveTab(activeTab) {
  switch (activeTab) {
    case "A":
      document.querySelector("#about-button").classList.add("active-tab");
      document.querySelector("#menu-button").classList.remove("active-tab");
      document.querySelector("#contact-button").classList.remove("active-tab");
      break;
    case "M":
      document.querySelector("#about-button").classList.remove("active-tab");
      document.querySelector("#menu-button").classList.add("active-tab");
      document.querySelector("#contact-button").classList.remove("active-tab");
      break;
    case "C":
      document.querySelector("#about-button").classList.remove("active-tab");
      document.querySelector("#menu-button").classList.remove("active-tab");
      document.querySelector("#contact-button").classList.add("active-tab");
      break;
  }
}
