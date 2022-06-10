function exibir_data_atual(){
	date = new Date();
	ano = date.getFullYear();
    mes = date.getMonth() +1;
    dia = date.getDate ();

    var data_atual = dia + "/" + mes + "/" + ano;

    document.getElementById("data_atual").innerHTML =  data_atual;
}

function ocultar_dados_formularios(){
    document.getElementById("dados_formulario").style.display= 'none';
}

function exibir_formulario(){
    document.getElementById("exibir_cpf").innerHTML = document.getElementById("cpf").value;
    document.getElementById("exibir_nome").innerHTML = document.getElementById("nome").value;
    document.getElementById("exibir_email").innerHTML = document.getElementById("email").value;
    document.getElementById("exibir_telefone").innerHTML = document.getElementById("telefone").value;
    document.getElementById("exibir_assunto").innerHTML = document.getElementById("assunto").value;
    document.getElementById("exibir_mensagem").innerHTML = document.getElementById("mensagem").value;

    document.getElementById("dados_formulario").style.display= 'block';
}

