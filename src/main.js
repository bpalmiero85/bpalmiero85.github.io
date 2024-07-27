// import emailjs from "emailjs-com";

// emailjs.init("VITE_EMAILJS_USER_ID");

// async function sendMail(event) {
//   event.preventDefault();

//   const params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     subject: document.getElementById("subject").value,
//     message: document.getElementById("message").value,
//   };

//   try {
//     const response = await emailjs.send(
//       "VITE_EMAILJS_SERVICE_ID",
//       "VITE_EMAILJS_TEMPLATE_ID",
//       params
//     );

//     if (response.status === 200 || response.text === "OK") {
//       alert(
//         "Your message was sent successfully. I will get back to you shortly within normal business hours. Thank you."
//       );
//     } else {
//       console.error("Failed to send message:", response);
//       alert("Failed to send message. Please try again later.");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("Failed to send message. Please try again later.");
//   }
// }
// document.getElementById("contactForm").onsubmit = sendMail;
