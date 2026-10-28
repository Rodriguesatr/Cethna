const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
mainNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

const dateInput = document.getElementById("date");
if (dateInput) {
  const today = new Date();
  const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  dateInput.min = localDate;
}
document.getElementById("bookingForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "Seu formulário está preenchido, mas o envio ainda não está conectado. O WhatsApp profissional do CETNA precisa ser configurado antes de receber pedidos reais. Nenhum dado foi enviado.";
  status.classList.add("notice");
  status.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
}
