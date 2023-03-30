# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Jéssica Matias	Idade: 32
Ocupação: Psicóloga clínica, trabalha com orientação psicanalítica de adolescentes e adultos.	
Motivações
●	Ajudar as pessoas a viverem vidas mais felizes e satisfatórias.
●	Crescer na carreira e ser reconhecida profissionalmente.	
Frustrações
●	Fica frustrada quando seus pacientes não levam a terapia a sério.
●	Dificuldade na captação de clientes.	
Hobbies
●	Caminhar
●	Ir ao cinema
●	Livros de romance

Lucas Gonçalves
Idade: 28
Ocupação: Engenheiro de software, trabalha com desenvolvimento de jogos em uma multinacional canadense, país onde reside atualmente. 
Motivações
●	Paixão pela tecnologia e sua constante evolução.
● Fascinado com a possibilidade de desenvolver softwares que podem impactar a vida das pessoas de forma positiva.	
Frustrações
●	Dificuldades em lidar com a pressão por prazos curtos, que muitas vezes são incompatíveis com a complexidade do trabalho.	
Hobbies
●	Jogos eletrônicos
●	Tocar guitarra


Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

1- Fabiana de Fátima dos Santos Pereira tem 33 anos, é analista financeira em uma empresa do ramo esportivo. Durante sua expedições sente dificuldade em acomodações com muitas pessoas, dificuldade em se adaptar com temperaturas muito baixas e sente muita saudade da família, mas adora andar a toa para conhecer cidades, passear pelos parques.  Está em busca de conhecer novas pessoas, culturas e novos lugares.

2- Jullio Ravazoli tem 36 anos é executivo de vendas em uma empresa de serviços terceirizados. Tem como hobbie viajar e fotografar, busca conhecer novas culturas e outros idiomas visando crescimento pessoal.  Sente dificuldade na adaptação às novas culturas, distanciamento familiar e em se adaptar à climas diferentes do habitual.

3- Elisa Budreckas Vieira tem 34 anos, é sceretária da diretoria de uma empresa do ramo de fornecimento de energia elétrica. Ama cozinhar e ler livros, tem facilidade com decoração de interiores e como sua maior companhia, o marido. Busca conhecer o mundo para aprender sobre diversas culturas culinárias.  Sempre tem dificuldade em lidar com a saudade da família e em muitas de suas viagens alega recber discriminação cultural.  

4- Maria Cristina Bizotti tem 28 anos, é psicóloga e atua na abordagem da TCC - Terapia Cognitivo Comportamental.  Já realizou muito trabalhos voluntários, gosta muito de ler e aprecia a arte voltada para pinturas.  Busca promover qualidade de vida, bem-estar psicológico e emocional para as pessoas, sua maior alegria é ver os resultados que a terapia proporciona na vida dos pacientes.  Sua frustração é saber que muitas pessoas acham que terapia é para pessoas "loucas" e que depressão e ansiedade é frescura. 


|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                                                                                  |
|--------------------|------------------------------------|---------------------------------------|
|Jéssica Matias	     |Captar e ajudar novos clientes.	    |é gratificante ver seus pacientes melhorando e superando seus problemas.|
Jéssica Matias	      |Democratizar o acesso à terapia.	   |acredito que a saúde mental deve ser uma prioridade em nossa sociedade e que as pessoas deveriam ter acesso a cuidados de qualidade.|
Jéssica Matias	      |Desenvolver um método de trabalho que motive e seja cativante. |é difícil ver alguém que precisa de ajuda, mas tem dificuldade em trabalhar para melhorar sua situação.|          
Lucas Gonçalves	     |Dedicar um tempo para mim e minha saúde mental. |apesar de amar o que faço a pressão e a rotina do trabalho são muito desgastantes.|
Lucas Gonçalves	     |Trabalhar questões emocionais relacionadas ao fato de estar longe da família e amigos.|	não é fácil encarar uma mudança de país estando longe das pessoas que ama.
Lucas Gonçalves	     |Adquirir uma nova motivação para continuar os estudos.|	com a correria do dia a dia acabo procrastinando e adiando os planos que tinha para minha carreira.|


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                       |PARA ... `MOTIVO/VALOR`                 |
|--------------------|--------------------------------------------------------------------------|----------------------------------------|
|Fabiana             | encontrar ajuda para lidar com distanciamento familiar                   | Para poder aproveitar melhor as viagens|
|Jullio              | conhecer relatos de pessoas que enfretaram as mesmas dificuldades        | para que eu consiga lidar melhor com  minhas frustrações |       
|Elisa               | ajuda profissional                                                       | para lidar com a discriminação cultural|
|Maria               | Divulgar meus serviços                                                   | para que mais pessoas encontrem resultados através de terapias |
                                                          
## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|------------------------------------------------------|------|
|RF-001| O site deve apresentar na página inicial cards com os psicólogos disponíveis, área de login, cards com relatos de imigrantes | ALTA | 
|RF-002| Para a página de psicólogos, deve haver um formulário requerendo informações previamente discutidas como email, CRP, telefone, abordagem   | ALTA |    
|RF-003| O site deve apresentar na tela de cadastro para opção paciente, a o formulário para cadastrar formas de contato      | ALTA |
|RF-004| Todos os botões devem ser clicáveis                  | MÉDIA |
|RF-005| Na página principal, devemos deixar claro o propósito do site já que envolve assuntos sensíveispropósito do site já que envolve assuntos sensíveis | MÉDIA |
|RF-006| O site deve apresentar na página de relatos, cards com identificação anônima ou não, opção de relatar    | MÉDIA |
|RF-007| O site deve apresentar na página de relatos, cards com identificação anônima ou não, e com relatos de pessoas que relataram   | MÉDIA |         
|RF-008| O site deve funcionar em mobile e desktop            | BAIXA |
         


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------------------------------------------------|-------|
|RNF-001| O site deve apresentar na tela de cadastro de psicólogo, a escolha do plano que ele quer assinar          | MÉDIA | 
|RNF-002| Interface de usuário                                              | MÉDIA | 
|RNF-003| O sistema deve ser fácil de usar e entender                       | MÉDIA | 
|RNF-004| O sistema deve rodar em diferentes plataformas com alterações mínimas    | MÉDIA | 
|RNF-005| Chat Online para suporte                                          | BAIXA | 
           

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                     |
|--|-------------------------------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre                         |
|02| O aplicativo deve se restringir às tecnologias básicas da Web Frontend        |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho                  |
|04| O grupo deverá utilizar o repositório específico do curso ADS                 |


