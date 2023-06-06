//Psicologos
var tbPsicologos = localStorage.getItem("tbPsicologos");

$(function () {
	tbPsicologos = JSON.parse(tbPsicologos);
	if (tbPsicologos == null) {
		tbPsicologos = [];
		carregarListaPsicologos();
	} else carregarCardsPsicologos();
	verificarLogado();
});

function adicionarPsicologo() {
	if ($("#formCadastro").valid()) {
		var novoId = contCadastroPsicologo();

		var psicologo = JSON.stringify({
			id: novoId,
			imagem: $("#img_cadastro").val(),
			descricao: $("#msg").val(),
			crp: $("#crp").val(),
			nome: $("#nome").val(),
			endereco: $("#endereco").val(),
			numero: $("#numero").val(),
			cidade: $("#cidade").val(),
			estado: $("#estado").val(),
			cep: $("#cep").val(),
			telefone: $("#tel").val(),
			instagram: $("#instagram").val,
			cidade: $("#cidade").val(),
			email: $("#email").val(),
			senha: $("#senha").val()

		});
		//para informar que o cadastro já existe
		var encontrado = false;
		for (i = 0; i < tbPsicologos.length; i++) {
			var registro = JSON.parse(tbPsicologos[i])
			if (registro.email == $("#email").val()) {
				encontrado = true;
			}
		}
		if (!encontrado) {
			tbPsicologos.push(psicologo);
			localStorage.setItem("tbPsicologos", JSON.stringify(tbPsicologos));
			alert("Cadastro feito com sucesso!");
			$("#formCadastro").trigger('reset');
		}
		else {
			alert("Esse e-mail já possui um cadastro!");
		}
	}
	return true;
}


function formataNumerotelefone(numero) {
	numero = numero.replaceAll("-", "");
	var length = numero.length;
	console.log(length);
	var telefoneFormatado;
	var ddd = numero.substring(0, 2);

	if (length === 10) {
		telefoneFormatado = numero.substring(0, 2) + '-' + numero.substring(2, 6) + '-' + numero.substring(6, 10);
	} else if (length === 11) {
		telefoneFormatado = numero.substring(0, 2) + '-' + + numero.substring(2, 7) + '-' + numero.substring(7, 11);
	}
	else {
		alert("Telefone Inválido.");
	}

	$("#tel").val(telefoneFormatado);
}

function formataCep(numero) {
	numero = numero.replaceAll("-", "").replaceAll(".", "");
	var length = numero.length;
	var cepFormatado;

	if (length === 8) {
		cepFormatado = numero.substring(0, 2) + '.' + + numero.substring(2, 5) + '-' + numero.substring(5, 8);
	} else {
		alert("CEP Inválido.");
	}
	$("#cep").val(cepFormatado);
}


function carregarListaPsicologos() {

	var psicologo = JSON.stringify({
		id: "1",
		nome: "Maria Cristina Bizotti",
		descricao: "Atuo na abordagem da TCC - Terapia Cognitivo Comportamental. Já realizei muitos trabalhos voluntários. Busco promover qualidade de vida, bem-estar psicológico e emocional para meus pacientes, minha maior alegria é ver os resultados que a terapia proporciona na vida dos pacientes.",
		imagem: "img/mariacristina.jpg",
		crp: "12.145",
		endereco: "Avenida do Café",
		numero: "950",
		cidade: "Mairinque",
		estado: "SP",
		cep: "18120000",
		telefone: "1147083533",
		email: "maria@fladafi.com.br",
		instagram: "@mariacris",
		senha: "123456"

	});
	tbPsicologos.push(psicologo);

	psicologo = JSON.stringify({
		id: "2",
		nome: "Jéssica Matias",
		descricao: "trabalha com orientação psicanalítica de adolescentes e adultos. Gosta de caminhar, ir ao cinema e ler livros de romance.  Seu objetivo é crescer na carreira e ser reconhecida profissionalmente, além de ajudar as pessoas a viverem a vida de forma mais feliz e satisfatória.  Sente muita dificuldade em captar clientes e fica frustada quando os pacientes não levam a terapia a sério. ",
		imagem: "img/jessicamartins.jpg",
		crp: "65.411",
		endereco: "Rua do Chá",
		numero: "10",
		cidade: "Belo Horizonte",
		estado: "MG",
		cep: "32152450",
		telefone: "31938274569",
		email: "jessica@martins.com.br",
		instagram: "@mariacris",
		senha: "123456"

	});
	tbPsicologos.push(psicologo);

	psicologo = JSON.stringify({
		id: "3",
		nome: "Daniela Rufino",
		descricao: "Entender o problema e criar estratégias, juntamente com o paciente, afim de ajudá-lo, favorecendo modificações positivas em sua vida. Procurar ajuda psicológica é a oportunidade que se dá para olhar de frente seus problemas e as dificuldades causadoras de sofrimento, é aprender a melhor maneira de lidar com elas, se fortalecer, desenvolver potenciais e se autoconhecer.",
		imagem: "img/danielarufino.jpg",
		crp: "22.859",
		endereco: "Avenida Mitsuke",
		numero: "2.250",
		cidade: "Sâo Paulo",
		estado: "SP",
		cep: "04150236",
		telefone: "1130852639",
		email: "daniela@rufino.com.br",
		instagram: "@danirufino",
		senha: "123456"
	});
	tbPsicologos.push(psicologo);

	localStorage.setItem("tbPsicologos", JSON.stringify(tbPsicologos));
	carregarCardsPsicologos();

}

function carregarCardsPsicologos() {
	for (var i in tbPsicologos) {
		var registro = JSON.parse(tbPsicologos[i]);

		$("#lstPsicologos").append("<div class='cards'>" +
			"<img class='img_perfil_psicologo' src='" + registro.imagem + "'>" +
			"<p class='cards_nome'>" + registro.nome + "</p>" +
			"<p class='cards_descricao'>" + registro.descricao + "</p>" +
			"<a class='cards_saibamais' href='psicologo_perfil.html?id=" + registro.id + "'>Entrar em contato com " + registro.nome + "...</a>" +
			"</div>");

	}
}

//perfil psicologo
function getQueryStrings() {
	var assoc = {};
	var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
	var queryString = location.search.substring(1);
	var keyValues = queryString.split('&');

	for (var i in keyValues) {
		var key = keyValues[i].split('=');
		if (key.length > 1) {
			assoc[decode(key[0])] = decode(key[1]);
		}
	}

	return assoc;
}

function exibirPerfil() {
	var qs = getQueryStrings();
	var id = qs["id"];

	for (var i in tbPsicologos) {
		if (JSON.parse(tbPsicologos[i]).id == id) {
			var registro = JSON.parse(tbPsicologos[i]);


			var registro = JSON.parse(tbPsicologos[i]);
			$("#perfil_psicologo").html("<img class='img_perfil_psicologo' src='" + registro.imagem + "'>" +
				"<p class='cards_nome'>" + registro.nome + "</p>" +
				"<div class='cards_descricao'>" +
				"<span class='info_usuario'>CRP</span>" +
				"<p class='info_usuario_1'>" + registro.crp + " </p>" +
				"<span class='info_usuario'>Abordagem</span>" +
				"<p class='info_usuario_1'>" + registro.descricao + "</p>" +
				"<span class='info_usuario'>Cidade - Estado - País</span>" +
				"<p class='info_usuario_1'>" + registro.cidade + " </p>" +
				"<span class='info_usuario'>E-mail</span>" +
				"<p class='info_usuario_1'>" + registro.email + "</p>" +
				"<span class='info_usuario'>Telefone</span>" +
				"<p class='info_usuario_1'>" + registro.telefone + "</p>" +
				"<span class='info_usuario'> Instagram</span>" +
				"<p class='info_usuario_1'>" + registro.instagram + "</p>");

		}
	}

}


// contador - cadastro psicologo

function contCadastroPsicologo() {
	var maiorId = 0;  // 0  1 2 

	for (i = 0; i < tbPsicologos.length; i++) {

		if (tbPsicologos[i].id > maiorId) {
			maiorId = tbPsicologos[i].id;
		}
	}
	return maiorId + 1;

}


// cadastro imigrantes

var tbImigrantes = localStorage.getItem("tbImigrantes");

$(function () {
	tbImigrantes = JSON.parse(tbImigrantes);
	if (tbImigrantes == null) {
		tbImigrantes = [];
		carregarListaImigrantes();
	}

});


function adicionarImigrante() {
	if ($("#formCadastro").valid()) {
		var novoId = contCadastroImigrante();

		var imigrante = JSON.stringify({
			id: novoId,
			imagem: $("#img_cadastro").val(),
			nome: $("#nome").val(),
			paisorigem: $("#paisorigem").val(),
			paisatual: $("#paisatual").val(),
			email: $("#email").val(),
			telefone: $("#tel").val(),
			senha: $("#senha").val()

		});

		//para informar que o cadastro já existe
		var encontrado = false;
		for (i = 0; i < tbImigrantes.length; i++) {
			var registro = JSON.parse(tbImigrantes[i])
			if (registro.email == $("#email").val()) {
				encontrado = true;
			}
		}
		if (!encontrado) {
			tbImigrantes.push(imigrante);
			localStorage.setItem("tbImigrantes", JSON.stringify(tbImigrantes));
			alert("Cadastro feito com sucesso!");
			$("#formCadastro").trigger('reset');
		}
		else {
			alert("Esse e-mail já possui um cadastro!");
		}
	}
	return true;
}


function contCadastroImigrante() {
	var maiorId = 0;

	for (i = 0; i < tbImigrantes.length; i++) {

		if (tbImigrantes[i].id > maiorId) {
			maiorId = tbImigrantes[i].id;
		}
	}
	return maiorId + 1;

}

function carregarListaImigrantes() {
	var imigrante = JSON.stringify({
		id: "1",
		nome: "Fabiana Peireira",
		descricao: "Sou analista financeira em uma empresa do ramo esportivo. Durante minhas expedições sinto dificuldade em acomodações com muitas pessoas, dificuldade em me adaptar com temperaturas muito baixas e sinto muita saudade da família mas, como eu adoro conhecer cidades e passear pelos parques, tive que procurar ajuda de um profissional para que eu continue no meu objetivo adiminstrando os sentimetnos que me incomodam.",
		imagem: "img/fabianafatima.jpg",
		paisorigem: "Brasil",
		paisatual: "Irlanda",
		telefone: "1199999999",
		email: "fabiana@fatima.com.br",
		senha: "123456"

	});
	tbImigrantes.push(imigrante);
	localStorage.setItem("tbImigrantes", JSON.stringify(tbImigrantes));
}


//relatos

var tbRelatos = localStorage.getItem("tbRelatos");

$(function () {
	tbRelatos = JSON.parse(tbRelatos);
	if (tbRelatos == null) {
		tbRelatos = [];
		carregarListaRelatos();
	} else carregarCardsRelatos();

});

function adicionarRelatos() {
	var novoId = contCadastroRelatos();
	var nomeRelator = "Anomimo";
	var imagemRelator = "img/anonimo.jpg";

	if ($("#anonimo").val() == "nao") {
		nomeRelator = "Nome do Relator";
		imagemRelator = "img/fabianafatima.jpg"
	}

	var relato = JSON.stringify({
		id: novoId,
		imagem: imagemRelator,
		nome: nomeRelator,
		descricao: $("#msgrelato").val(),
		anonimo: $("#anonimo").val()

	});
	tbRelatos.push(relato);
	localStorage.setItem("tbRelatos", JSON.stringify(tbRelatos));
	alert("Relato adicionado.");
	carregarCardsRelatos();

	return true;
}

function carregarListaRelatos() {
	var relato = JSON.stringify({
		id: "1",
		nome: "Fabiana de Fátima Pereira",
		descricao: "Sou analista financeira em uma empresa do ramo esportivo. Durante minhas expedições sinto dificuldade em acomodações com muitas pessoas, dificuldade em me adaptar com temperaturas muito baixas e sinto muita saudade da família mas, como eu adoro conhecer cidades e passear pelos parques, tive que procurar ajuda de um profissional para que eu continue no meu objetivo adiminstrando os sentimetnos que me incomodam. Ter a ajuda de um profissional me ajudou a superar algumas questões.",
		imagem: "img/fabianaFatima.jpg",
	});
	tbRelatos.push(relato);

	var relato = JSON.stringify({
		id: "2",
		nome: "Jullio",
		descricao: "Sou executivo de vendas em uma empresa de serviços terceirizados. Tenho como hobbie viajar e fotografar, busca conhecer novas culturas e outros idiomas visando crescimento pessoal. Sinto dificuldade na adaptação às novas culturas, distanciamento familiar e em me adaptar à climas diferentes do habitual. Nesse site encontrei um terapeuta que me ajuda com essas dificuldades.",
		imagem: "img/jullioravazoli.jpg",
	});
	tbRelatos.push(relato);

	var relato = JSON.stringify({
		id: "3",
		nome: "Elisa",
		descricao: "Sou secretária da diretoria de uma empresa do ramo de fornecimento de energia elétrica. Amo cozinhar e ler livros, tenho facilidade com decoração de interiores e tenho como minha maior companhia, o marido. Busco conhecer o mundo para aprender sobre diversas culturas culinárias. Sempre tenho dificuldade em lidar com a saudade da família e em muitas de minhas viagens recebo discriminação cultural. A terapia tem sido de grande importância para mim.",
		imagem: "img/elisabudreckas.jpg",
	});
	tbRelatos.push(relato);

	localStorage.setItem("tbRelatos", JSON.stringify(tbRelatos));
	carregarCardsRelatos();




}


function carregarCardsRelatos() {
	for (var i in tbRelatos) {
		var registro = JSON.parse(tbRelatos[i]);


		$("#lstRelatos").append("<div class='cards'>" +
			"<img class='img_perfil_imigrante' src='" + registro.imagem + "'>" +
			"<p class='cards_nome'>" + registro.nome + "</p>" +
			"<p class='cards_descricao'>" + registro.descricao + "</p>" +
			"</div>");

	}
}

function verificarCadastroRelato() {

	if (localStorage.getItem("tipoUsuario") && localStorage.getItem("tipoUsuario") == "I") {
		$("#tipoUsuario").show();
	}
	else {
		$("#tipoUsuario").hide();
	}


}

function contCadastroRelatos() {
	var maiorId = 0;  // 0  1 2 

	for (i = 0; i < tbRelatos.length; i++) {

		if (tbRelatos[i].id > maiorId) {
			maiorId = tbRelatos[i].id;
		}
	}
	return maiorId + 1;

}

function criarLogin() {
	var perfil;

	if ($("#perfil").val() == "perfil_psicologo") {
		perfil = "cadastro_psicologo.html";

	} else perfil = "cadastro_imigrante.html";


	window.location.href = perfil;
}

var email;

function redefinirSenha() {
	var redefinirSenhaEmail;
	var achou = false;
	var isPsicologo = false;

	tbImigrantes = localStorage.getItem("tbImigrantes");
	tbImigrantes = JSON.parse(tbImigrantes);

	tbPsicologos = localStorage.getItem("tbPsicologos");
	tbPsicologos = JSON.parse(tbPsicologos);

	for (i = 0; i < tbPsicologos.length; i++) {
		var registro = JSON.parse(tbPsicologos[i]);
		if (registro.email == $("#email").val()) {
			achou = true;
			isPsicologo = true;
		}
	}
	if (!isPsicologo) {
		for (i = 0; i < tbImigrantes.length; i++) {
			var registro = JSON.parse(tbImigrantes[i]);
			if (registro.email == $("#email").val()) {
				achou = true;
			}
		}
	}
	if (!achou) {
		alert("E-mail não encontrado!");
	}
	else {
		$("#div_exibir").show();
		$("#div_ocultar").hide();
		email = $("#email").val();
	}
}

function salvarnovasenha() {
	var isPsicologo = false;
	var achou = false;
	for (i = 0; i < tbPsicologos.length; i++) {
		var registro = JSON.parse(tbPsicologos[i]);
		if (registro.email == email) {
			registro.senha = $("#senha").val();
			tbPsicologos[i] = JSON.stringify(registro);
			localStorage.setItem("tbPsicologos", JSON.stringify(tbPsicologos));
			achou = true;
			isPsicologo = true;

		}
	}
	if (!isPsicologo) {
		for (i = 0; i < tbImigrantes.length; i++) {
			var registro = JSON.parse(tbImigrantes[i]);
			if (registro.email == email) {
				registro.senha = $("#senha").val();
				tbImigrantes[i] = JSON.stringify(registro);
				localStorage.setItem("tbImigrantes", JSON.stringify(tbImigrantes));
				achou = true;
			}
		}
	}
	if (!achou) {
		alert("E-mail não encontrado!");
	}
	else {
		window.location.href = "login.html";
	}
}


function Login() {
	var encontrado = false;
	var senhaValida = false;
	var email = $("#email").val();
	var senha = $("#senha").val();

	for (i = 0; i < tbPsicologos.length; i++) {
		var registro = JSON.parse(tbPsicologos[i])
		if (registro.email == email) {
			encontrado = true;
			if (registro.senha == senha) {
				localStorage.setItem("idLogado", registro.id);
				localStorage.setItem("nomeLogado", registro.nome);
				localStorage.setItem("tipoUsuario", "P");

				senhaValida = true;


				window.location.href = "homepage.html";
			}
		}
	}

	if (!encontrado) {

		for (i = 0; i < tbImigrantes.length; i++) {
			var registro = JSON.parse(tbImigrantes[i])
			if (registro.email == email) {
				encontrado = true;
				if (registro.senha == senha) {
					localStorage.setItem("idLogado", registro.id);
					localStorage.setItem("nomeLogado", registro.nome);st
					localStorage.setItem("tipoUsuario", "I");
					senhaValida = true;
					window.location.href = "homepage.html";
				}
			}
		}
	}

	if (!encontrado) {
		alert("E-mail não cadastrado! Crie uma conta.");
	}

	if (encontrado && !senhaValida) {
		alert("Senha incorreta!");
	}
}



function verificarLogado() {

	if (localStorage.getItem("nomeLogado")) {

		$("#loginlogout").html("Olá, " + localStorage.getItem("nomeLogado"));
		$("#logout").show();
		$("#loginlogout").attr("href", "#");
	} else {

		$("#logout").hide();
	}



}

function logout() {

	if (localStorage.getItem("nomeLogado")) {
		localStorage.removeItem("nomeLogado");
		localStorage.removeItem("tipoUsuario");
	}
	window.location.href = "homepage.html";
}