
// Alternar entre tema claro e escuro
const tema = document.getElementById("tema");

tema.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    tema.textContent = "☀";
  } else {
    tema.textContent = "☾";
  }
});

// Abrir e fechar menu no celular
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");

  menuBtn.textContent = menu.classList.contains("open")
    ? "✕"
    : "☰";
});

// Fechar menu depois de clicar em um link
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// Atualizar ano automaticamente
document.getElementById("year").textContent =
  new Date().getFullYear();
