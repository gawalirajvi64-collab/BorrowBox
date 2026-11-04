const loginForm = document.getElementById("loginForm");
const togglePassword = document.getElementById("togglePassword");

if (togglePassword) {
  togglePassword.addEventListener("click", function () {
    const password = document.getElementById("password");

    if (password.type === "password") {
      password.type = "text";
      togglePassword.textContent = "Hide";
    } else {
      password.type = "password";
      togglePassword.textContent = "Show";
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (email && password) {
      message.textContent = "Login successful — opening your dashboard...";
      setTimeout(function () {
        window.location.href = "dashboard.html";
      }, 700);
    }
  });
}

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("signupMessage");

    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match.";
      return;
    }

    message.textContent = "Account created — opening BorrowBox...";
    setTimeout(function () {
      window.location.href = "dashboard.html";
    }, 700);
  });
}
