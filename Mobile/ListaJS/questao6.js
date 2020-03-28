function isPalindromo(){

palavra=document.getElementById("campo1").value;

		   palavra = palavra.toLowerCase(); //converte tudo para minusculo

		   palavra = palavra.replace(/[^a-zA-Z]/gi, ''); //Expressão regular para deixar somente caracteres de a à Z

		   var palavraInversa = palavra.split('').reverse().join('');

		   
		if (palavraInversa == palavra) {
			alert("A palavra digitada é um palindromo");

		}else{
			alert("A palavra digitada não é um palindromo");
		}
		   return palavraInversa == palavra;

		}