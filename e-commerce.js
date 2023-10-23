
// Valida Email
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
    
console.log(validateEmail('texto@texto.com')); // true
console.log(validateEmail('texto@texto')); // false
console.log(validateEmail('texto.com')); // false
console.log(validateEmail('texto')); // false

// verifica se a senha é Valida
function senhaValida(p){
  var retorno = false;
  var letrasMaiusculas = /[A-Z]/;
  var letrasMinusculas = /[a-z]/; 
  var numeros = /[0-9]/;
  var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
  if(p.length > 8){
  return retorno;
  }
  if(p.length < 8){
  return retorno;
  }
  var auxMaiuscula = 0;
  var auxMinuscula = 0;
  var auxNumero = 0;
  var auxEspecial = 0;
  for(var i=0; i<p.length; i++){
  if(letrasMaiusculas.test(p[i]))
  auxMaiuscula++;
  else if(letrasMinusculas.test(p[i]))
  auxMinuscula++;
  else if(numeros.test(p[i]))
  auxNumero++;
  else if(caracteresEspeciais.test(p[i]))
  auxEspecial++;
  }
  if (auxMaiuscula > 0){
  if (auxMinuscula > 0){
  if (auxNumero > 0){
  if (auxEspecial) {
  retorno = true;
  }
  }
  }
  }
  
 
  return retorno;
 }
 console.log(senhaValida("test1234"));
 console.log(senhaValida("Test123@"));
 console.log(senhaValida("Teste123@"));