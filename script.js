
  function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + name);
    if (page) {
      page.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
  }

  function submitForm() {
    alert('Thank you for your message! Our team will respond within a few hours. For urgent support, please use our live chat.');
  }

  // Animate stats on scroll
  function animateCounters() {
    document.querySelectorAll('.stat-num').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }

  // Intersection observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .sport-card, .game-card, .bonus-card, .testimonial-card, .step-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, background 0.3s, box-shadow 0.3s';
    observer.observe(el);
  });

window.addEventListener('load', async function () {
  // 1. Wait for the Clerk engine to be ready
  await Clerk.load();

  const joinBtn = document.getElementById('join-btn');

  // 2. Check if user is already logged in
  if (Clerk.user) {
    // Change "JOIN NOW" to "MY ACCOUNT" if they are logged in
    joinBtn.innerText = "MY ACCOUNT";
    joinBtn.addEventListener('click', (e) => {
      e.preventDefault();
      Clerk.openUserProfile();
    });
  } else {
    // 3. If not logged in, open the Sign Up window on click
    joinBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Stops the page from refreshing
      Clerk.openSignUp();
    });
  }
});

