# Plano de Testes de Software

Abaixo estão os casos de testes escolhidos pela equipe, considerando os Requisitos Funcionais destacados nesse projeto:

|Caso de Teste           |CT01 - Página Inicial                                                                                                                |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:  |RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
|Objetivo do Teste:      |Verificar se a página inicial está carregando corretamente com os 04 cards.                                                        |
|Passos:                 |1) Acessar o Navegador<br/> 2) Informar o endereço do site<br/> 3) Visualizar a página principal.                                   |
|Critérios de Êxito:     |1) A página inicial deve ser carregada e, nela exibida a barra de navegação fixada ao lado esquerdo da tela;<br/> 2) Os cards devem ser exibidos no conteúdo central da página, sendo:<br/> -01 card para mostrar um perfil de psicólogo;<br/> -01 card para mostrar um relato;<br/> -01 card para mostrar dica;<br/>  -01 card para mostrar perguntas frequentes.|


|Caso de Teste|CT02 - Criar Login|
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF02 - Para a página de psicólogos, deve haver um formulário requerendo informações previamente discutidas como e-mail, CRP, telefone, abordagem. <br/> RF03 - O site deve apresentar na tela de cadastro para opção paciente, o formulário para cadastrar formas de contato. <br/> RF04 - Todos os botões devem ser clicáveis.|
|Objetivo do Teste:|Verificar se o site está oferecendo a opção de se cadastrar como imigrante e outra opção como psicólogo. <br/> Verificar se o botão "Enviar" dispara um evento.                       |
|Passos:|1) Acessar a área de login; <br/> 2) Escolher a opção criar login;   <br/> 3) Escolher o perfil para cadastro.                                       |
|Critérios de Êxito:|1) A área de login deve apresentar a opção de criar um novo cadastro; <br/> 2) A página de criar um novo cadastro deve ter a opção de escolha para Perfil de Psicólogo e Imigrante; <br/> 3) Se a opção escolhida no perfil for Imigrante, o site deve ser redirecionado para a página de Cadastro de Imigrantes, ao clicar no botão "Enviar". <br/> 4) Se a opção escolhida no perfil for Psicólogo, o site deve ser redirecionado para a página de Cadastro de Psicólogo, ao clicar no botão "Enviar".|

|Caso de Teste           |CT03 - Formulários de Cadastro                                                                                                      |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF02 - Para a página de psicólogos, deve haver um formulário requerendo informações previamente discutidas como e-mail, CRP, telefone, abordagem. <br/> RF03 - O site deve apresentar na tela de cadastro para opção paciente, o formulário para cadastrar formas de contato. <br/> RF04 - Todos os botões devem ser clicáveis.|
|Objetivo do Teste:|Verificar se é possível concluir o cadastro.|
|Passos:|1) Acessar a área de login;  <br/> 2) Escolher a opção Criar Login;  <br/> 3) Escolher a opção Psicólogo; <br/> 4) Escolher o perfil para cadastro; <br/> 5) Preencher o cadastro; <br/> 6) Enviar o cadastro.|
|Critérios de Êxito:|1) A área de login deve apresentar a opção de criar um novo cadastro;  <br/> 2) A página de Criar um novo cadastro deve ter a opção de escolha para Perfil de Psicólogo ou Imigrante;  <br/> 3) Se a opção escolhida no perfil for Imigrante, o site deve ser redirecionado para a página de Cadastro de Imigrantes. <br/> 4) Se a opção escolhida no perfil for Psicólogo, o site deve ser redirecionado para a página de Cadastro de Psicólogo; <br/> 5) O formulário deve ser preenchido e o cadastro deve ser realizado.|

|Caso de Teste           |CT04 - Campos do Formulário de Cadastro Psicólogos                                                                                  |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF 02 - Para a página de psicólogos, deve haver um formulário requerendo informações previamente discutidas como e-mail, CRP, telefone, abordagem;|
|Objetivo do Teste:|Verificar e validar campos do formulário para cadastro de psicólogos. <br/> RF04 - Todos os botões devem ser clicáveis.|
|Passos:|1) Acessar a área de login; <br/> 2) Escolher a opção Criar Login;  <br/> 3) Escolher a opção Psicólogo;  <br/> 4)Preencher o formulário.|
|Critérios de Êxito:|1) o campo Abordagem deve receber texto e números, sem limite de caracteres;  <br/> 2) O campo CRP deve receber somente números; <br/> 3) O campo Nome deve receber somente texto; <br/> 4)O campo Endereço deve receber somente texto; <br/> 5)O campo Cidade deve receber somente texto; <br/. 6) O campo Estado deve receber somente texto; <br/>  7) O campo Instagram deve receber somente texto; <br/> 8) O campo Número deve receber somente número; <br/> 9) O campo CEP deve receber somente número; <br/> 9) O campo Telefone deve receber somente número; <br/> 10) O campo e-mail deve receber dados no formato e-mail e deve ser requerido para envio do formulário; <br/> 11) O campo Senha pode receber texto e número, deve ser ocultado o valor digitado e requerido para envio do formulário; <br/> 12) O campo Confirmar Senha pode receber texto e número, deve ser ocultado o valor digitado, deve ser requerido para envio do formulário e deve verificar se o valor digitado é igual ao valor digitado no campo senha.| 

|Caso de Teste           |CT05 - Campos dos Formulário de Cadastro Imigrantes                                                                                 |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF03 - O site deve apresentar na tela de cadastro para opção paciente, o formulário para cadastrar formas de contato.|
|Objetivo do Teste:|Verificar e validar campos do formulário de imigrantes. <br/> RF04 - Todos os botões devem ser clicáveis.|
|Passos:|1) Acessar a área de login; <br/> 2) Escolher a opção Criar Login;  <br/> 3) Escolher a opção Imigrante;  <br/> 4) Preencher o formulário.|
|Critérios de Êxito:|1) O campo Nome deve receber somente texto; <br/> 2) O campo País de Origem deve receber somente texto; <br/> 3) O  campo País Atual deve receber somente texto; <br/> 4) O campo Número de Telefone deve receber somente números; <br/> 5) O campo e-mail deve receber dados no formato e-mail e deve ser requerido para enviar o formulário; <br/> 6) O campo senha pode receber texto e número, deve ser ocultado o valor digitado e deve ser requerido para envio do formulário; <br/> 7) O campo Confirmar Senha pode receber texto e número, deve ser ocultado o valor digitado e deve ser requerido para envio do formulário e deve verificar se o valor digitado é igual ao valor digitado no campo senha.|

|Caso de Teste           |CT06 - Login                                                                                                                        |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
|Objetivo do Teste:|Verificar se é possível fazer login no site. <br/> RF04 - Todos os botões devem ser clicáveis.|
|Passos:|1) Acessar a área de login; <br/> 2) Digitar e-mail;  <br/> 3) Digitar senha;  <br/> 4) Clicar em "entrar".|
|Critérios de Êxito:|1) O campo e-mail deve aceitar apenas texto no formato e-mail e deve ser um campo requerido; <br/> 2) O campo senha deve  ocultar caracteres e deve ser um campo requerido; <br/> 3) O site deve ser capaz de logar, caso o e-mail esteja cadastrado e a senha esteja correta; <br/> 4) O site deve ser capaz de informar caso o e-mail não seja cadastrado.|

|Caso de Teste|CT07 - Esqueci a senha|
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
|Objetivo do Teste:|Verificar se é possível redefinir a senha no site. <br/> RF04 - Todos os botões devem ser clicáveis.|
|Passos:|1) Acessar a área de login; <br/> 2) Digitar e-mail já cadastrado;  <br/> 4) Clicar em "Esqueci minha senha".|
|Critérios de Êxito:|1) O campo e-mail deve aceitar apenas texto no formato e-mail e deve ser um campo requerido; <br/> 2) Ao clicar no botão esqueci minha senha, o site deve redirecionar a página para redefinir senha; <br/> 3) O campo e-mail deve ser solicitado; <br/> 4) O aviso de "enviamos um link para o e-mail que foi digitado" deve ser mostrado. <br/> 5) No link enviado por e-mail, deve ser possível carregar uma nova página com a opção de cadastrar a nova senha; <br/> 7) O cadastro de nova senha deve pedir a confirmação da senha digitada.|

|Caso de Teste|CT08 - Cards da Home Page - Profissionais|
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
|Objetivo do Teste:|Verificar se cada card direciona a navegação para a página correspondente.|
|Passos:|1) Acessar a Home Page; <br/> 2) Clicar no link do primeiro card (Profissionais).|
|Critérios de Êxito:|1) Ao clicar no link "ver perfil completo" do card Profissionais a página deverá ser redirecionada para página de psicólogos.| 

|Caso de Teste|CT09 - Cards da Home Page - Relatos|
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
|Objetivo do Teste:|Verificar se cada card direciona a navegação para a página correspondente.|
|Passos:|1) Acessar a Home Page; <br/> 2) Clicar no link do segundo card (Relatos).|
|Critérios de Êxito:|1) Ao clicar no link "Mais relatos" do card Relatos a página deverá ser redirecionada para página de relatos.| 

|Caso de Teste|CT10 - Cards da Home Page - Dicas|
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
|Objetivo do Teste:|Verificar se cada card direciona a navegação para a página correspondente.|
|Passos:|1) Acessar a Home Page; <br/> 2) Clicar no link  "Veja mais Dicas" do terceiro card (Dicas).|
|Critérios de Êxito:|1) Ao clicar no link "Veja mais Dicas" do card Dicas a página deverá ser redirecionada para página de Dicas.| 

|Caso de Teste|CT11 - Cards da Home Page - Perguntas Frequentes|
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
|Objetivo do Teste:|Verificar se cada card direciona a navegação para a página correspondente.|
|Passos:|1) Acessar a Home Page; <br/> 2) Clicar no link do quarto card (Perguntas Frequentes).|
|Critérios de Êxito:|1) Ao clicar no link "Tenho outras dúvidas" do card Perguntas Frequentes a página deverá ser redirecionada para página de Perguntas Frequentes.| 

|Caso de Teste|CT12 - Card, Cadastro Psicólogos, Home Page|
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF02 - Para a página de psicólogos, deve haver um formulário requerendo informações previamente discutidas como e-mail, CRP, telefone, abordagem. <br/>RF03 - O site deve apresentar na tela de cadastro para opção paciente, o formulário para cadastrar formas de contato.|
|Objetivo do Teste:|Verificar se o usuário conseguirá ver o Perfil Completo do Psicólogo .|
|Passos:|1) Acessar a Home Page; <br/> 2) No primeiro card (Profissionais), clicar no link "ver perfil completo"; <br/> 3) Na página Psicólogos, escolher um psicólogo cadastrado e clicar no link "entrar em contato com (nome do psicólogo escolhido)" .|
|Critérios de Êxito:|1) Ao clicar no link "entrar em contato com (nome do psicólogo escolhido)" o site deverá redirecionar o usuário para a página do Perfil do psicólogo escolhido e visualizar as seguintes informações:<br/> a) Nome do Profissional; <br/> b) CRP do profissional; <br/> c) O texto sobre a abordagem que o profissional escreveu; <br/> d) A cidade, o estado e o país que esse profissional atua; <br/> e) O e-mail do profissional; <br/> f) O telefone de contato do profissional; <br/> g) O Instagram do profissional.| 

|Caso de Teste|CT13 - Relatos|
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF07 - O site deve apresentar na página de relatos, todos os relatos cadastrados.|
|Objetivo do Teste:|Verificar se o usuário conseguirá acessar a página de relatos.|
|Passos:|1) Acessar a Home Page; <br/> 2) Na barra de navegação, escolher o link "Relatos".|
|Critérios de Êxito:|1) A página Relatos deverá ser exigida com os relatos já cadastrados, anonimamente ou não.| 

|Caso de Teste|CT14 - Relatos|
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF06 - O site deve apresentar na página de relatos, cards com identificação anônima ou não e a opção de relatar. <br/> RF04 - Todos os botões devem ser clicáveis.|
|Objetivo do Teste:|Verificar se o usuário Imigrante conseguirá cadastrar seu relato.|
|Passos:|1) Acessar a Home Page e efetuar o login com um perfil de Imigrante; <br/> 2) Na barra de navegação, escolher o link "Relatos".|
|Critérios de Êxito:|1) A página Relatos deverá ser exigida com os relatos já cadastrados; <br/> Deverá conter uma opção para que o usuário deixe seu relato; <br/> O usuário deverá ter a opção de cadastrar o relato anônimo ou não.| 

|Caso de Teste|CT15 - Relatos|
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF06 - O site deve apresentar na página de relatos, cards com identificação anônima ou não e a opção de relatar.|
|Objetivo do Teste:|Verificar se o usuário Psicólogo conseguirá cadastrar relato.|
|Passos:|1) Acessar a Home Page e efetuar o login com um perfil de Psicólogo; <br/> 2) Na barra de navegação, escolher o link "Relatos".|
|Critérios de Êxito:|1) A página Relatos deverá ser exigida com os relatos já cadastrados; <br/> Não poderá conter a opção para que o usuário deixe seu relato.| 


|Caso de Teste|CT16 - Entre em contato|
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF08 - O site deve apresentar um formulário/e-mail para suporte. <br/> RF04 - Todos os botões devem ser clicáveis.|
|Objetivo do Teste:|Verificar se o usuário poderá enviar um formulário com dúvidas para o dono do site.|
|Passos:|1) Acessar a Home Page; <br/> 2) Na barra de navegação, escolher o link "Entre em contato".|
|Critérios de Êxito:|1) A página Entre em Contato deverá ter um formulário; <br/> 2) O formulário deverá ter um campo Nome e nesse campo receber somente texto; <br/> 3) O formulário deverá ter um campo Telefone e nesse campo somente poderá ser digitado número; <br/> 4)O formulário deve ter um campo e-mail que deverá apenas aceitar dados no formato e-mail; <br/> 5) O formulário deve ter um campo para receber a mensagem de dúvida do usuário, sem limite de caracteres, podendo ser digitado números e texto; <br/> 6) A página deverá ter um botão para envio do formulário; <br/>  7) Todos os campos devem ser requeridos; <br/> 8) Após os envio do formulário o usuário deverá visualizar uma mensagem "Mensagem enviada com sucesso!".|

|Caso de Teste|CT17 - Propósito do Site|
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados:|RF05 - Na página principal, devemos deixar claro o propósito do site já que envolve assuntos sensíveis.|
|Objetivo do Teste:|Verificar se o dono do site tem um espaço para expor o propósito do site.|
|Passos:|1) Acessar a Home Page.|
|Critérios de Êxito:|1) A Home Page deve ter um parágrafo com uma mensagem dizendo o proposito do site.|

