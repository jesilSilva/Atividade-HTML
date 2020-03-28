
	var inversa=[document.getElementById("campo1").value,document.getElementById("campo2").value,
	document.getElementById("campo3").value,document.getElementById("campo4").value,
	document.getElementById("campo5").value];

function preencherInversamente(){

	var inversa=[document.getElementById("campo1").value,document.getElementById("campo2").value,
	document.getElementById("campo3").value,document.getElementById("campo4").value,document.getElementById("campo5").value];
	//inserindo valores invertidos nos campos
	document.getElementById("campo5").value=inversa[0];
	document.getElementById("campo4").value=inversa[1];
	document.getElementById("campo3").value=inversa[2];
	document.getElementById("campo2").value=inversa[3];
	document.getElementById("campo1").value=inversa[4];
	
	// var cores = ['vermelho', 'verde', 'azul'];
// for (var i = 0; i < inversa.length; i++) {
//   alert(inversa[i]);
// }
	// document.getElementById("campo1").value = "Goool";
}
