function showRegister() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

// Fake login (front-end only)
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Login successful (frontend only)");
});

// Fake register (front-end only)
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Registration successful (frontend only)");
});
