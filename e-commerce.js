function validarEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Exemplo de uso
const email = "example@example.com";
if (validarEmail(email)) {
  console.log("O e-mail é válido.");
} else {
  console.log("O e-mail é inválido.");
}

 