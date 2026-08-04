(function () {
  const key = "_theme";
  const button = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");

  try {
    const saved = localStorage.getItem(key);
    if (saved === "light" || saved === "dark") {
      document.body.setAttribute("data-theme", saved);
    }
  } catch (_) {
    // The site remains usable if local storage is unavailable.
  }

  function setIcon() {
    if (!icon) return;
    const mode = document.body.getAttribute("data-theme");
    const dark = mode ? mode === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    icon.className = dark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  setIcon();

  if (button) {
    button.addEventListener("click", function () {
      const mode = document.body.getAttribute("data-theme");
      const next = mode === "dark" ? "light" : "dark";
      document.body.setAttribute("data-theme", next);
      try {
        localStorage.setItem(key, next);
      } catch (_) {
        // The selected theme still applies to the current page.
      }
      setIcon();
    });
  }
})();
