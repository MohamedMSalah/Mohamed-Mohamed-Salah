/**
 * Contact Form & Copy Actions
 * Mohamed Mohamed Salah - Portfolio
 */

function showToast(message, type = "success") {
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${type === 'success' ? '#10b981' : '#f43f5e'}" stroke-width="2">
      ${type === 'success' 
        ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>' 
        : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'}
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function initContact() {
  const form = document.getElementById("contactForm");
  const copyEmailBtn = document.getElementById("copyEmailBtn");

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      const email = "m0hamed724@outlook.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied to clipboard (m0hamed724@outlook.com)");
      }).catch(() => {
        showToast("Could not copy email automatically", "error");
      });
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("contactName");
      const emailInput = document.getElementById("contactEmail");
      const messageInput = document.getElementById("contactMessage");

      let hasError = false;

      // Reset errors
      [nameInput, emailInput, messageInput].forEach(inp => {
        if (inp) {
          inp.closest(".form-group").classList.remove("has-error");
        }
      });

      if (!nameInput.value.trim()) {
        nameInput.closest(".form-group").classList.add("has-error");
        hasError = true;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.closest(".form-group").classList.add("has-error");
        hasError = true;
      }

      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.closest(".form-group").classList.add("has-error");
        hasError = true;
      }

      if (hasError) {
        showToast("Please fill all required fields correctly.", "error");
        return;
      }

      // Open mailto fallback pre-filled
      const subject = encodeURIComponent(`Portfolio Inquiry from ${nameInput.value.trim()}`);
      const body = encodeURIComponent(`Hi Mohamed,\n\n${messageInput.value.trim()}\n\nBest regards,\n${nameInput.value.trim()} (${emailInput.value.trim()})`);
      
      const mailtoUrl = `mailto:m0hamed724@outlook.com?subject=${subject}&body=${body}`;
      
      showToast("Thank you! Opening your email client...", "success");
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
        form.reset();
      }, 800);
    });
  }
}

document.addEventListener("DOMContentLoaded", initContact);
