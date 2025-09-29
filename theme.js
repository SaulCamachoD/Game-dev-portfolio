const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});