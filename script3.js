// Gallery modal images
const galleryImages = document.querySelectorAll("#gallery img");
const modal = document.getElementById("modal");
const modalImg = modal.querySelector("img");
const closeBtn = document.getElementById("close-button");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  closeModal();
});

modal.addEventListener("click", () => {
  closeModal();
});

function closeModal() {
  modal.style.display = "none";
  modalImg.src = "";
  modalImg.alt = "";
  document.body.style.overflow = "auto";
}

// Contact Form submission handler
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function handleSubmit(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const confirmation = document.getElementById("confirmationMessage");
  const email = emailInput.value.trim();

  if (email && validateEmail(email)) {
    confirmation.style.color = "#fff8a6";
    confirmation.textContent = `Thank you for subscribing, ${email}!`;
    emailInput.value = "";
  } else {
    confirmation.style.color = "#ffa07a";
    confirmation.textContent = "Please enter a valid email address.";
  }
  return false;
}

// Auto-close menu on link click (for mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});

// Toggle menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("confirmationMessage").textContent =
    "Thanks for subscribing!";
  document.getElementById("contactForm").reset();
  return false;
}
