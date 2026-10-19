const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  menuToggle.textContent = open ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  menuToggle.textContent = "☰";
}));

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("quoteForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = encodeURIComponent("Website enquiry: " + data.get("service"));
  const body = encodeURIComponent(
    "Hello Kinetra Engineering Solutions,\n\nI would like to enquire about your services.\n\n" +
    "Name: " + data.get("name") + "\nPhone: " + (data.get("phone") || "Not provided") +
    "\nService: " + data.get("service") + "\n\nProject details:\n" + data.get("message")
  );
  document.getElementById("formStatus").textContent =
    "Your email app should open with the enquiry prepared. Review it and press Send.";
  window.location.href = "mailto:kinetraengineeringsolutions@gmail.com?subject=" + subject + "&body=" + body;
});
