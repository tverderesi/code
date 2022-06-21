function js_button() {
  const nome = prompt("Qual é seu nome?");
  alert(`Olá, ${nome}! seja bem-vindo!`);

  const rem_el = document.getElementById("a01");
  rem_el.classList.remove("hidden");

  const rem_el2 = document.getElementById("ex01");
  rem_el2.classList.remove("noborder");
  document.getElementById("a01").innerHTML = `<i>function js_button() {<br>
    alert("Olá, seja bem-vindo!"); <br>
    document.getElementById('a01').innerHTML = "código"; <br>
  } <br></i> <br>
  Esta primeira função carrega a função para criar uma janela de alerta na página que diz "Olá, seja bem vindo!" <br>
  Já a segunda função mostra o código que está sendo carregado pela página.
  <br> <br> <br>
  <i> prompt("Qual é seu nome?"); </i> <br>
  Esta função faz uma janela com input aparecer.
  <br> <br> <br>
    <i>
    let btn = document.getElementById("b01"); <br>
    btn.addEventListener('click', event => { <br>
      js_button(); <br>
    });<br> 
    </i> <br> 
    Aqui, temos o script que permite que o código seja carregado quando clicamos no botão "Clique aqui para executar o código."`;
}

let btn = document.getElementById("b01");
btn.addEventListener("click", (event) => {
  js_button();
});

function bkbtn() {
  const anim = document.getElementById("body");
  anim.classList.replace("text-focus-in", "text-blur-out");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}

let back_btn = document.getElementById("back");
back_btn.addEventListener("click", (event) => {
  bkbtn();
});
