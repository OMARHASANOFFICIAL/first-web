function showMessage() {

    document.getElementById("message").textContent =
        "🎉 দারুণ! JavaScript কাজ করছে!";
}


function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const button = document.getElementById("darkButton");

    if (document.body.classList.contains("dark")) {

        button.textContent = "☀️ Light";

    } else {

        button.textContent = "🌙 Dark";
    }
}