document.getElementById("FormDoacao").addEventListener("submit"), function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let tipo = document.querySelector('input[nome="tipo"]checked').value ;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    if (nomeInput.split('').length < 2) {
        alert ("Por favor, digite seu nome e sobrenome");
        return false;
    }
    if (!email.includes("@gmail.com" || "@outlook.com" || "@hotmail.com")) return alert ("Email Inválido");
    if (idade < 16) return alert("Deve ser maior de 16 anos");
    if (peso < 50) return alert("Você deve ter mais de 50kg");

}
