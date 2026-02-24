document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const receiveBtn = document.getElementById("receiveBtn");
  const messageList = document.getElementById("messageList");

  const PASSWORD = "golukumar123"; // Set your password

  let messages = [];

  // SEND MESSAGE
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    messages.push({ name, email, message, time: new Date().toLocaleString() });
    alert("Message Sent Successfully ✅");
    contactForm.reset();
  });

  // RECEIVE MESSAGES
  receiveBtn.addEventListener("click", function () {
    const pass = prompt("Enter password to view messages:");
    if (pass !== PASSWORD) {
      alert("Incorrect password!");
      return;
    }

    messageList.innerHTML = "";
    if (messages.length === 0) {
      messageList.innerHTML = "<p>No messages received yet.</p>";
    } else {
      messages.forEach((msg) => {
        const div = document.createElement("div");
        div.innerHTML = `
          <strong>Name:</strong> ${msg.name}<br>
          <strong>Email:</strong> ${msg.email}<br>
          <strong>Message:</strong> ${msg.message}<br>
          <small>${msg.time}</small>
        `;
        messageList.appendChild(div);
      });
    }
    messageList.style.display = "block";
  });
});
