import emailjs from "emailjs-com";

document.addEventListener("DOMContentLoaded", (event) => {
  const userID = "VITE_EMAILJS_USER_ID"; 
  const serviceID = "VITE_EMAILJS_SERVICE_ID";
  const templateID = "VITE_EMAILJS_TEMPLATE_ID";

  console.log("User ID:", userID);
  console.log("Service ID:", serviceID);
  console.log("Template ID:", templateID);

  emailjs.init(userID);

  async function sendMail(event) {
    event.preventDefault();

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await emailjs.send(serviceID, templateID, params);
      if (response.status === 200 || response.text === "OK") {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        alert(
          "Your message was sent successfully. I will get back to you shortly within normal business hours. Thank you."
        );
      } else {
        console.error("Failed to send message:", response);
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again later.");
    }
  }

  document.getElementById("contactForm").addEventListener("submit", sendMail);
});
