//Explicação da função:
// A função sempre irá começar mostrando o texto e atribuindo o valor true para a variável
// que ao acionar novamente a função ela irá executar o else, pois a variável estará como
// false

var visibilidade = true; //Variável que vai manipular o botão Ocultar/Mostra
 
function ocultarExibir() { // Quando clicar no botão.
 
    if (visibilidade) {//Se a variável visibilidade for igual a true, então...
    	document.getElementById("paragrafo").style.display = "block";
        //Ocultamos a div
        visibilidade = false;//alteramos o valor da variável para falso.
    } else {//ou se a variável estiver com o valor false..
        document.getElementById("paragrafo").style.display = "none";//Exibimos a div..
        visibilidade = true;//Alteramos o valor da variável para true.
    }
}

