const form = document.querySelector("#access-form");
const status = document.querySelector("#form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const email = String(formData.get("email") || "").trim();

  status.textContent = email
    ? `Thanks. ${email} is on the preview list.`
    : "Add an email address to request access.";
});
