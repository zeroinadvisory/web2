const briefingForm = document.querySelector("#briefing-form");
const formStatus = document.querySelector("#form-status");

if (briefingForm && formStatus) {
  briefingForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton =
      briefingForm.querySelector('button[type="submit"]');

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";
    formStatus.textContent = "Submitting your request...";

    try {
      const formData = new FormData(briefingForm);

      await fetch(briefingForm.action, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });

      briefingForm.reset();
      formStatus.textContent =
        "Thank you. Your request has been received.";
    } catch (error) {
      console.error("Submission error:", error);

      formStatus.textContent =
        "Submission failed. Please try again.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Request briefing";
    }
  });
}
