document.addEventListener("DOMContentLoaded", function () {

  const firstnameInput = document.getElementById("firstname");
  const displayFirstname = document.getElementById("display-firstname");

  const ageInput = document.getElementById("age");
  const hardTruthSection = document.getElementById("a-hard-truth");

  const passwordInput = document.getElementById("pwd");
  const confirmPasswordInput = document.getElementById("pwd-confirm");

  const darkModeSelect = document.getElementById("toggle-darkmode");

 
  const updateFirstname = () => {
    displayFirstname.textContent = firstnameInput.value;
  };

  firstnameInput.addEventListener("keyup", updateFirstname);

  ageInput.addEventListener("keyup", function () {
    const age = parseInt(ageInput.value);

  
    hardTruthSection.style.visibility = age < 18 ? "hidden" : "visible";
  });


  passwordInput.addEventListener("keyup", validatePassword);
  confirmPasswordInput.addEventListener("keyup", validatePassword);

 
  function validatePassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;


    const isLengthValid = password.length >= 6;

    const doPasswordsMatch = password === confirmPassword;

    passwordInput.style.border = isLengthValid ? "1px solid #ccc" : "1px solid red";
    confirmPasswordInput.style.border = doPasswordsMatch ? "1px solid #ccc" : "1px solid red";
  }


  darkModeSelect.addEventListener("change", function () {
    const darkModeValue = darkModeSelect.value;
    toggleDarkMode(darkModeValue);
  });

  // Function to toggle dark mode using CSS variables
  function toggleDarkMode(mode) {
    const root = document.documentElement;

    if (mode === "dark") {
      root.style.setProperty("--bg-color", "black");
      root.style.setProperty("--text-color", "white");
    } else {
      root.style.setProperty("--bg-color", "white");
      root.style.setProperty("--text-color", "black");
    }
  }
});