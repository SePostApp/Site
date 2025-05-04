function startNow() {
  window.location.href = "https://discord.com/invite/tRybkt7fsq";
}

    function toggleMenu() {
      document.getElementById("navbar").classList.toggle("nav-open");
    }

particlesJS('particles-js1', {
  particles: {
    number: { value: 800 },
    size: { value: 1.0, random : true},
    color: { value: "#ffffff" },
    opacity: { value: 0.5 },
    line_linked: { enable: false, opacity: 0.5},
    move: { speed: 0.9 }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: false }, onclick: { enable: false }}
  },
  retina_detect: true
});

particlesJS('particles-js2', {
  particles: {
    number: { value: 500 },
    size: { value: 0.5, random : true},
    color: { value: "#ffffff" },
    opacity: { value: 0.5 },
    line_linked: { enable: true, opacity: 0.5},
    move: { speed: 0.5 }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: false }, onclick: { enable: false }}
  },
  retina_detect: true
});
