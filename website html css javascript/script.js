const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Mensagem enviada! Entraremos em contato em breve.");
  form.reset();
});