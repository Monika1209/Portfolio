// Header

let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function() {
  document.body.classList.toggle('mobile-nav-active');

  if (this.classList.contains('fa-bars')) {
    this.classList.remove('fa-bars');
    this.classList.add('fa-times');
  } else {
    this.classList.remove('fa-times');
    this.classList.add('fa-bars');
  }
});

// Typing Effect

let typed = new Typed('.auto-input', {
  strings: ['Front-End Developer!', 'WordPress Developer!', 'Web Developer!', 'Python Developer!'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

// --------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach(button => {
      button.addEventListener("click", () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");

          const filter = button.getAttribute("data-filter");

          portfolioItems.forEach(item => {
              if (filter === "all" || item.classList.contains(filter)) {
                  item.style.display = "block";
                  setTimeout(() => item.style.opacity = "1", 100);
              } else {
                  item.style.opacity = "0";
                  setTimeout(() => item.style.display = "none", 100);
              }
          });
      });
  });
});


// Contact section-----------------------------------------------

document.getElementById("contactForm").addEventListener("submit", function(event) {
  let valid = true;
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  if (name.length < 3) {
      document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
      valid = false;
  }
  if (!email.match(/^\S+@\S+\.\S+$/)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      valid = false;
  }
  if (message.length < 10) {
      document.getElementById("messageError").textContent = "Message must be at least 10 characters long.";
      valid = false;
  }

  if (!valid) {
      event.preventDefault();
  }else {
    event.preventDefault();
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("contactForm").reset();
    setTimeout(() => {
      document.getElementById("successMessage").style.display = "none";
  }, 3000);
}
});