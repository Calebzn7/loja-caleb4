const email = document.getElementById("email");
const senha = document.getElementById("senha");
const Entrar = document.getElementById("Entrar");

Entrar.addEventListener("click", function (event) {

    event.preventDefault(); 

    const nomeEmail = email.value;
    const SenhaDigitada = senha.value;

  
    if (nomeEmail === "" || SenhaDigitada === "") {
        alert("Preencha todos os campos!");
    } 
   
    else if (nomeEmail === "Email" && SenhaDigitada === "123") {
        alert("Login realizado com sucesso!"); 
        window.location.href = "adidas.html";
    } 
  
    else {
        alert("Usuário ou senha incorretos!");
    }
});