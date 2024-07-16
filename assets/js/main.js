function sendMail(event) {
  event.preventDefault();

  var params = {
    name: document.querySelector('input[name="name"]').value,
    number: document.querySelector('input[name="number"]').value,
    email: document.querySelector('input[name="email"]').value,
    textarea: document.querySelector('textarea[name="textarea"]').value,
  };

  if (!params.name || !params.number || !params.email || !params.textarea) {
    alert("All fields are required.");
    return false;
  }

  const serviceID = "service_g6eqr9f";
  const templateID = "template_69j7uge";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.querySelector('input[name="name"]').value = "";
      document.querySelector('input[name="email"]').value = "";
      document.querySelector('input[name="number"]').value = "";
      document.querySelector('textarea[name="textarea"]').value = "";
      console.log(res);
      alert("Your message sent successfully");
    })
    .catch((err) => console.log(err));
}
