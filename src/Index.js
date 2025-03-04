document.getElementById("menu-togglee"). addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

document.querySelectorAll(".openModal").forEach((button) => {
  button.addEventListener("click", function () {
    const modalId = this.getAttribute("data-target");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden'); 
      setTimeout(() => {
          modal.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100); 
  }
    const modalBox = modal.querySelector(".transform");

    modal.classList.remove("hidden", "opacity-0", "translate-y-[-100%]");
    modal.classList.add("opacity-100", "translate-y-0");
    modal.classList.add("flex", "items-center", "justify-center");
    setTimeout(() => {
      modalBox.classList.remove("opacity-0", "scale-95");
      modalBox.classList.add("opacity-100", "scale-100");
    }, 50);
  });
});

document.querySelectorAll(".closeModal").forEach((button) => {
  button.addEventListener("click", function () {
    const modalId = this.getAttribute("data-target");
    const modal = document.getElementById(modalId);
    
    const modalBox = modal.querySelector(".transform");

    modal.classList.add("opacity-0", "translate-y-[-100%]");
    modal.classList.remove("opacity-100", "translate-y-0");

    modalBox.classList.add("opacity-0", "scale-95");
    modalBox.classList.remove("opacity-100", "scale-100");

    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
  });
});


document.querySelectorAll(".hover-label").forEach((label) => {
  const parent = label.closest(".group");

  parent.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      label.classList.toggle("opacity-100");
    }
  });

  
  document.addEventListener("click", function (event) {
    if (!parent.contains(event.target) && window.innerWidth <= 768) {
      label.classList.remove("opacity-100");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzqdoqNhwIt6W1yVT9yrCG3lWJ4k39AQQLiGX4TP45YEQNyjhy2z6nE3H4C4cgGlEkCgw/exec";
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const alertBox = document.getElementById("customAlert");
  const alertMessage = document.getElementById("alertMessage");
  const closeAlert = document.getElementById("closeAlert");

  function showAlert(message) {
    alertMessage.innerText = message;
    alertBox.classList.remove("hidden");
    alertBox.classList.add("flex", "items-center", "justify-center");
    
  }

  closeAlert.addEventListener("click", () => {
    alertBox.classList.add("hidden");
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let btnText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Loading...";
    submitBtn.disabled = true;

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        if (response.ok) {
          showAlert("Thanks, Your message has been sent successfully!");
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch(() => {
        showAlert("Oops! Something went wrong.");
      })
      .finally(() => {
        setTimeout(() => {
          submitBtn.innerHTML = btnText;
          submitBtn.disabled = false;
          form.reset();
        }, 1000);
      });
  });
});







setTimeout(() => {
  document.getElementById("typing-text").classList.add("cursor-hidden");
}, 2000); 

window.history.scrollRestoration = "manual";
window.onload = function () {
  window.scrollTo(0, 0);
};




  
  