// FUNCTIONS

function ex01() {
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

function bkbtn() {
  const anim = document.getElementById("body");
  anim.classList.replace("text-focus-in", "text-blur-out");
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 1000);
}

function ex02btn() {
  const username = document.querySelector("#username").value;
  alert(`Olá
  ${username}, bem-vindo!`);
  document.getElementById("loginform").style.display = "none";
}

// Calling Functions

let ex01btn = document.getElementById("b01");
ex01btn.addEventListener("click", () => {
  ex01();
});

let back_btn = document.getElementById("back");
back_btn.addEventListener("click", () => {
  bkbtn();
});

document.getElementById("btnc2").addEventListener("click", () => {
  let a = document.getElementById("a02");
  a.innerHTML = `
  function ex02btn() { <br>
    const username = document.querySelector("#username").value; <br>
    alert(&#79;Olá {username}, bem-vindo!&#79;); <br>
    document.getElementById("loginform").style.display = "none"; <br>
  }`; //comentar o que o código faz
  a.classList.remove("hidden");
  document.getElementById("code02").classList.remove("noborder");
});
