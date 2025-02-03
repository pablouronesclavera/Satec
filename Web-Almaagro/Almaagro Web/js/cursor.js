document.addEventListener("mousemove", (event) => {
    const cursor = document.getElementById("cursor");
    const offsetX = -20;
    const offsetY = -12;

    cursor.style.transform = `translate(${event.clientX + offsetX}px, ${event.clientY + offsetY}px)`;
});