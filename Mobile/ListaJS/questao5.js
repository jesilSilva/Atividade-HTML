function VerificarSenha(){

VerificarSenha=document.getElementById("senha").value;
VerificarConfirmacaoSenha=document.getElementById("ConfirmeSenha").value;


		   
if ((VerificarSenha.length < 6 || VerificarSenha.length > 10) ) {
	alert("A senha deve contér no minímo 6 e no máximo 10 caracteres");
	document.getElementById("senha").focus();
}	
	else if (VerificarSenha != VerificarConfirmacaoSenha ) {

	alert("O as senhas digitadas não são iguais");
	document.getElementById("senha").focus();

		}
}
		   
		