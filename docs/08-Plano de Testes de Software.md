# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

|Caso de Teste|CT01 - Página Inicial|
|--|--|
|Requisitos Associados:|RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
|Objetivo do Teste:|Verificar se a página inicial está carregando corretamente, com os 04 cards.|
|Passos:|1) Acessar o Navegador  <br/> 2) Informar o endereço do site   <br/> 3) Visualizar a página principal.|
|Critérios de Êxito:|1) A página inicial deve ser carregada e nela, exibida a barra de navegação fixada ao lado esquerdo da tela. <br/> 2) Os cards devem ser exibidos no conteudo central da página, sendo: <br/> -01 card para mostar um perfil de psicólogo; <br/> -01 card para mostrar um relato, 01 card para mostrar dica; <br/> -01 card para mostrar perguntas frequentes. |


|Caso de Teste|CT02 - Criar Login|
|--|--|
|Requisitos Associados:|RF 02 - Para a página de psicólogos, deve haver um formulário requerendo informações previamente discutidas como email, CRP, telefone, abordagem. <br/> RF03 - O site deve apresentar na tela de cadastro para opção paciente, a o formulário para cadastrar formas de contato.|
| Objetivo do Teste:|Verificar se o site está oferencendo a opção de se cadastrar como imigrante e opção de se cadastrar como psigólogo  |
| Passos:|1) Acessar a área de login; <br/> 2) Escolher a opção criar login;   <br/> 3) Escolher o perfil para cadastro.|
| Critérios de Êxito:|1) A área de login deve apresentar a opção de criar um novo cadastro; <br/> 2) A página de Criar um novo cadastro deve ter a opção de escolha para Perfil de Psicólogo e Imigrante; <br/> 3) Se a opção escolhida no perfil for Imigrante, o site deve ser redirecionado para a página de Cadastro de Imigrantes. <br/> Se a opção escolhida no perfil for Psicólogo, o site deve ser redirecionado para a página de Cadastro de Psicólogo. |

|Caso de Teste|CT03 - Formulários de Cadastros|
|--|--|
|Requisitos Associados:|RF 02 - Para a página de psicólogos, deve haver um formulário requerendo informações previamente discutidas como email, CRP, telefone, abordagem. <br/> RF03 - O site deve apresentar na tela de cadastro para opção paciente, o formulário para cadastrar formas de contato.|
|Objetivo do Teste:|Verificar se é possível concluir o cadastro.|
|Passos:|1) Acessar a área de login  <br/> 2) Escolher a opção Criar Login  <br/> 3) Escolher a opção Psicólogo <br/> 4) Escolher o perfil para cadastro.|
|Critérios de Êxito:|1) A área de login deve apresentar a opção de criar um novo cadastro;  <br/> 2) A página de Criar um novo cadatro deve ter a opção de escolha para Perfil de Psicólogo ou Imigrante;  <br/> 3) Se a opção escolhida no perfil for Imigrante, o site deve ser redirecionado para a página de Cadastro de Imigrantes. Se a opção escolhida no perfil for Psicólogo, o site deve ser redirecionado para a página de Cadastro de Psicólogo. Se a opção escolhida no perfil for Imigrante, o site deve ser redirecionado para a página de Cadastro de Imigrantes;  <br/> 4) O formulário deve ser preenchido e o cadastro deve ser realizado. |

|Caso de Teste|CT04 - Campos do Formulário de Cadastro Psicólogos|
|--|--|
|Requisitos Associados:|RF 02 - Para a página de psicólogos, deve haver um formulário requerendo informações previamente discutidas como email, CRP, telefone, abordagem;|
|Objetivo do Teste:|Verificar campos do formulário.|
|Passos:|1) Acessar a área de login; <br/> 2) Escolher a opção Criar Login;  <br/> 3) Escolher a opção Psicólogo;  <br/> 4)Preencher o formulário.|
|Critérios de Êxito:|1) Campo Abordagem deve receber texto e números, sem limite de caracteres;  <br/> 2) O campo CRP deve receber somente números; <br/> 3) Os  Campos Nome, Endereço, Cidade, Estado e Instagram  devem receber somente texto; <br/> 4) Os campos Número, Cep e telefone devem receber somente números; <br/> 5) O campo e-mail deve receber dados no formato e-mail; <br/> 6) O campo senha pode receber texto e número e deve ser ocultado o valor digitado.| 

|Caso de Teste|CT05 - Campos dos Formulário de Cadastro Imigrantes|
|--|--|
|Requisitos Associados:|RF03 - O site deve apresentar na tela de cadastro para opção paciente, o formulário para cadastrar formas de contato.|
| Objetivo do Teste:|Verificar campos do formulário.|
| Passos:|1) Acessar a área de login; <br/> 2) Escolher a opção Criar Login;  <br/> 3) Escolher a opção Imigrante;  <br/> 4) Preencher o formulário.|
| Critérios de Êxito:|1) Os  Campos Nome, País de Origem e país Atual  devem receber somente texto; <br/> 2) O campo Número de telefone deve receber somente números; <br/> 3) O campo e-mail deve receber dados no formato e-mail; <br/> 4) O campo senha pode receber texto e número e deve ser ocultado o valor digitado. |

|Caso de Teste|CT06 - Login|
|--|--|
|Requisitos Associados:|RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
| Objetivo do Teste:|Verificar se é possível fazer login no site.|
| Passos:|1) Acessar a área de login; <br/> 2) Digitar e-mail;  <br/> 3) Digitar senha;  <br/> 4) Clicar em "entrar".|
| Critérios de Êxito:|1) O campo e-mail deve aceitar apenas texto no formato e-mail e deve ser um campo requerido; <br/> 2) O campo senha deve  ocultar caracteres; <br/> 3) O site deve ser capaz de logar, caso o e-mail esteja cadastrado e a senha esteja correta; <br/> 4) O site deve ser capaz de informar caso o e-mail não seja cadastrado. |

|Caso de Teste|CT07 - Esqueci a senha|
|--|--|
|Requisitos Associados:|RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
| Objetivo do Teste:|Verificar se é possível redefinir a senha no site.|
| Passos:|1) Acessar a área de login; <br/> 2) Digitar e-mail;  <br/> 4) Clicar em "Esqueci minha senha".|
| Critérios de Êxito:|1) O campo e-mail deve aceitar apenas texto no formato e-mail e deve ser um campo requerido; <br/> 2) Ao clicar no botão esqueci minha senha, o site deve redirecionar a página para redefinir senha ; <br/> 3) O campo e-mail deve ser solicitado; <br/> 4) um aviso de "enviamos um e-mail para o e-mail que foi digitado". <br/> 5) No link enviado por e-mail, deve ser possível carregar uma nova página com a opção de cadastrar a nova senha; <br/> 7) O cadastro de nova senha deve pedir a confirmação da senha digitada. |

|Caso de Teste|CT08 - Cards da Home Page - Profissionais|
|--|--|
|Requisitos Associados:|RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
| Objetivo do Teste:|Verificar se cada card direciona a navegação para a página correspondente.|
| Passos:|1) Acessar a Home Page; <br/> 2) Clicar no link do primeiro card (Profissionais).|
| Critérios de Êxito:|1) Ao clicar no link "ver perfil completo" do card Profissionais a página deverá ser redirecionada para página de psicólogos.| 

|Caso de Teste|CT09 - Cards da Home Page - Relatos|
|--|--|
|Requisitos Associados:|RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
| Objetivo do Teste:|Verificar se cada card direciona a navegação para a página correspondente.|
| Passos:|1) Acessar a Home Page; <br/> 2) Clicar no link do segundo card (Relatos).|
| Critérios de Êxito:|1) Ao clicar no link "Mais relatos" do card Relatos a página deverá ser redirecionada para página de relatos.| 

|Caso de Teste|CT09 - Cards da Home Page - Relatos|
|--|--|
|Requisitos Associados:|RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
| Objetivo do Teste:|Verificar se cada card direciona a navegação para a página correspondente.|
| Passos:|1) Acessar a Home Page; <br/> 2) Clicar no link do segundo card (Relatos).|
| Critérios de Êxito:|1) Ao clicar no link "Mais relatos" do card Relatos a página deverá ser redirecionada para página de relatos.| 

|Caso de Teste|CT10 - Cards da Home Page - Dicas|
|--|--|
|Requisitos Associados:|RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
| Objetivo do Teste:|Verificar se cada card direciona a navegação para a página correspondente.|
| Passos:|1) Acessar a Home Page; <br/> 2) Clicar no link do terceiro card (Dicas).|
| Critérios de Êxito:|1) Ao clicar no link "Veja mais Dicas" do card Dicas a página deverá ser redirecionada para página de Dicas.| 

|Caso de Teste|CT11 - Cards da Home Page - Perguntas Frequentes|
|--|--|
|Requisitos Associados:|RF01 - O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes.|
| Objetivo do Teste:|Verificar se cada card direciona a navegação para a página correspondente.|
| Passos:|1) Acessar a Home Page; <br/> 2) Clicar no link do quarto card (Dicas).|
| Critérios de Êxito:|1) Ao clicar no link "Tenho outras dúvidas" do card Perguntas Frequentes a página deverá ser redirecionada para página de Perguntas Frequentes.| 

|Caso de Teste|CT12 - CT03 - Cadastro Psicólogos|
|--|--|
|Requisitos Associados:||RF 02 - Para a página de psicólogos, deve haver um formulário requerendo informações previamente discutidas como email, CRP, telefone, abordagem. <br/> RF03 - O site deve apresentar na tela de cadastro para opção paciente, o formulário para cadastrar formas de contato.|
| Objetivo do Teste:|Verificar se o usuário conseguirá ver o Perfil Completo do Psicólogo .|
| Passos:|1) Acessar a Home Page; <br/> 2) Clicar no link "ver perfil completo"; <br/> 3) Na página Psicólogos clicar no link "entrar em contato (nome do psicólogo escolhido)" .|
| Critérios de Êxito:|1) Ao clicar no link "entrar em contato (nome do psicólogo escolhido)" o site deverá redirecionar o usuário para a página do Perfil do psicólogo escolhido.| 



Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
