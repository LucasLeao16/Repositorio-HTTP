const ListadeTeclas = document.querySelectorAll(".tecla");

const TocarSom = function (idSom) {
  const elemento = document.querySelector(idSom);
  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Não é um elemento de audio");
  }
};

for (let i = 0; i < ListadeTeclas.length; i++) {
  const tecla = ListadeTeclas[i];
  const som = ListadeTeclas[i].classList[1];
  const idSom = `#som_${som}`;
  tecla.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
  tecla.onclick = function () {
    TocarSom(idSom);
  };
}
