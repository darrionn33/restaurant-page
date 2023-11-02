import put from "put-selector";

export default function contact(params) {
  const contact = put("main#contact");
  const contactDiv = put("div.contact-div");
  put(contact, contactDiv);
  put(contactDiv, "iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.862665181262!2d91.89953234058332!3d25.60947941497087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507f312ba577d1%3A0x793839d4e6c4ac50!2sChill%20Out%20Cafe!5e0!3m2!1sen!2sin!4v1698896482652!5m2!1sen!2sin",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
  });
  return contact;
}
