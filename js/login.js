// Cekamo da se DOM uctia
document.addEventListener("DOMContentLoaded", () => {
  // Selektujemo iz DOM-a formu, polje za unos lozinke i email-a
  const loginForm = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginStatus = document.getElementById("login-status");

  // Osluskujemo dogadja na email input za unos teksta i postavljamo login-status teks na prazan
  emailInput.addEventListener("input", () => {
    loginStatus.textContent = "";
    loginStatus.className = "";
  });

  // Osluskujemo dogadja na password input za unos teksta i postavljamo login-status teks na prazan
  passwordInput.addEventListener("input", () => {
    loginStatus.textContent = "";
    loginStatus.className = "";
  });

  // Osluskujemo submit na formi
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Provjeravamo da li element posotji prije nego sto ga selektujemo i ako postoji onda uzimamo vrijednost i onda uklanjamo praznine sa pocetka i kraja
    const emailValid = emailInput ? emailInput.value.trim() : "";
    const passwordValid = passwordInput ? passwordInput.value.trim() : "";

    loginStatus.className = "";

    // Provjera podataka forme i ipis odgovarajuce poruke
    if (emailValid === "" && passwordValid === "") {
      loginStatus.textContent = "Please, enter email and password!";
      loginStatus.className = "error";
    } else if (emailValid === "") {
      loginStatus.textContent = "Please, enter email!";
      loginStatus.className = "error";
    } else if (passwordValid.length < 6) {
      loginStatus.textContent = "Password must contain at least 6 characters.";
      loginStatus.className = "error";
    } else {
      loginStatus.textContent = "Login successful. Welcome!";
      loginStatus.className = "success";
    }
  });
});
