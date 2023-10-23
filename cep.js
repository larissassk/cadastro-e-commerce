'use restrict'; 
//Modo restrito

//Limpar formulário
const LimparFormulario = (endereco) =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
}
//Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
//preenche campos do formulario
const preencheFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;

}
/*função para consumo de API utilizando a função do tipo assimcrona*/
const pesquisarcep = async() =>{
    LimparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();
        if(addres.hasOwnProperty('erro')){
            alert('cep não encontrado');
    }else{
        preencheFormulario(addres);
    }
}else{
    alert('cep incorreto');
    }
}
// Adiciona um evento DOM, no input CEP
document.getElementById('cep').addEventListener('focusout', pesquisarcep);

