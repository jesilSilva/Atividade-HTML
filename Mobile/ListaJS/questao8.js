function habilitarCampo(){

	if (document.getElementById("pessoaFisica").checked) {
	document.getElementById("camposEspeciaisPessoaFisica").style.display = "block";
	document.getElementById("camposEspeciaisPessoaJuridica").style.display="none";
	
}else if(document.getElementById("pessoa").checked){
	document.getElementById("camposEspeciaisPessoaJuridica").style.display="block";
	document.getElementById("camposEspeciaisPessoaFisica").style.display = "none";
}
}

function tecla(){
    evt = window.event;
    var tecla = evt.keyCode;

    if(tecla < 47 || tecla > 58){ 
      alert('Digite apenas números');
      evt.preventDefault();
    }
  }
