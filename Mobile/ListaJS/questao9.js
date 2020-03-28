function intercalada(){
var s1=document.getElementById("nome1").value;
var s2=document.getElementById("nome2").value;
  
   
  var n = s1.length;
  
  if(s1.length < s2.length){
    n = s2.length;
  }
  
  var string = '';
  for(var i = 0; i < n; i++){
    if(s1[i]){
      string += s1[i];
    }
    if(s2[i]){
      string += s2[i];
    }
  }
  document.getElementById("result").style.display="block";
document.getElementById("resultado").value=string;
   
}