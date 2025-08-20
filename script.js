document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success");
  const errorMsg = document.getElementById("form-error");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        successMsg.classList.remove("hidden");
        errorMsg.classList.add("hidden");
        form.reset();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      successMsg.classList.add("hidden");
      errorMsg.classList.remove("hidden");
    }
  });
});