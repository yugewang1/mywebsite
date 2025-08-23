
(function(){
  const KEY = "_theme";
  const btn = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const saved = localStorage.getItem(KEY);
  if (saved === "light" || saved === "dark") {
    document.body.setAttribute("data-theme", saved);
  }
  function setIcon(){
    const mode = document.body.getAttribute("data-theme");
    const dark = mode ? (mode==="dark") : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark){
      icon.className = "fa-solid fa-sun";
    } else {
      icon.className = "fa-solid fa-moon";
    }
  }
  setIcon();
  btn && btn.addEventListener("click", function(){
    const mode = document.body.getAttribute("data-theme");
    const next = mode === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", next);
    localStorage.setItem(KEY, next);
    setIcon();
  });
})();
