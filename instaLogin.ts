// Elements
const passwordInput = document.getElementById("password") as HTMLInputElement;
const togglePassword = document.getElementById("togglePassword") as HTMLElement;
const loginBtn = document.querySelector(".login-btn") as HTMLElement;

passwordInput.addEventListener("input", (): void => {
  togglePassword.style.display =
    passwordInput.value.length > 0 ? "block" : "none";
  updateLoginBtnState();
});

togglePassword.addEventListener("click", (): void => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "Show";
  }
  passwordInput.focus();
});

passwordInput.addEventListener("focus", updateLoginBtnState);
passwordInput.addEventListener("blur", updateLoginBtnState);

function updateLoginBtnState() {
  if (!loginBtn) return;
  if (passwordInput.value.trim().length > 0) {
    loginBtn.classList.remove("dim");
  } else {
    loginBtn.classList.add("dim");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(updateLoginBtnState, 50);
});

//   Link

function validateLogin(event: MouseEvent) {
  event.preventDefault();

  // Multiple valid users

  interface Users {
    email: string;
    password: string;
  }

  const users: Users[] = [
    { email: "rehan@gmail.com", password: "12345" },
    { email: "ali@gmail.com", password: "abc123" },
    { email: "fatima@gmail.com", password: "pass321" },
    { email: "huzaifa@gmail.com", password: "343546" },
    { email: "hussain@gmail.com", password: "1586614" },
    { email: "umair@gmail.com", password: "266@123" },
    { email: "hammad@gmail.com", password: "hammad001" },
    { email: "ronaldo@gmail.com", password: "Suiiii07" },
    { email: "messi@gmail.com", password: "meeeeh123" },
    { email: "abbas@gmail.com", password: "h&hbirds26214" },
    { email: "aiza@gmail.com", password: "papakipari2123" },
    { email: "faryal@gmail.com", password: "ankhoomei1312" },
  ];

  const username = (
    document.querySelector('input[type="text"]') as HTMLInputElement
  ).value.trim();
  const password = (
    document.getElementById("password") as HTMLInputElement
  ).value.trim();

  const userFound = users.find(
    (user) => user.email === username && user.password === password
  );
  console.log(userFound);

  if (userFound) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", username);

    window.location.href = "../index.html";
  } else {
    showErrorToast("Invalid email or password!");
  }

  return false;
}
loginBtn.addEventListener("click", validateLogin);
const toast = document.getElementById("error-toast");
const toastMsg = document.getElementById("error-msg");
const toastClose = document.getElementById("error-close");
let hideToastTimeout: ReturnType<typeof setTimeout> | null = null;

function showErrorToast(message: string, duration: number = 3500): void {
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("show");

  if (hideToastTimeout) clearTimeout(hideToastTimeout);
  hideToastTimeout = setTimeout(() => {
    hideErrorToast();
  }, duration);
}

function hideErrorToast(): void {
  if (!toast) return;
  toast.classList.remove("show");
  setTimeout(() => {
    if (toastMsg) toastMsg.textContent = "";
  }, 500);
}

if (toastClose) {
  toastClose.addEventListener("click", (): void => {
    if (hideToastTimeout) clearTimeout(hideToastTimeout);
    hideErrorToast();
  });
}
