function toggleStep(stepId) {
    const stepContent = document.getElementById(stepId);
    if (stepContent.style.display === "block") {
        stepContent.style.display = "none";
    } else {
        stepContent.style.display = "block";
    }
}
