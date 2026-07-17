const briefingForm = document.querySelector("#briefing-form");
const submissionTarget = document.querySelector("#submission-target");
const formStatus = document.querySelector("#form-status");

if (briefingForm && submissionTarget && formStatus) {

    let submissionInProgress = false;

    briefingForm.addEventListener("submit", () => {

        submissionInProgress = true;

        const submitButton =
            briefingForm.querySelector('button[type="submit"]');

        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";

        formStatus.textContent =
            "Submitting your request...";
    });

    submissionTarget.addEventListener("load", () => {

        if (!submissionInProgress) return;

        submissionInProgress = false;

        briefingForm.reset();

        const submitButton =
            briefingForm.querySelector('button[type="submit"]');

        submitButton.disabled = false;
        submitButton.textContent = "Request briefing";

        formStatus.textContent =
            "Thank you. Your request has been received. We'll be in touch shortly.";
    });

}
