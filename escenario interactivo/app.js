let contador = 0;
let contadorEl = document.getElementById("contador");
let gasolinas = document.querySelectorAll(".gasolina");

gasolinas.forEach(g => {
  g.addEventListener("click", () => {
    g.style.display = "none";
    contador++;
    contadorEl.textContent = contador;
  });
}); 



