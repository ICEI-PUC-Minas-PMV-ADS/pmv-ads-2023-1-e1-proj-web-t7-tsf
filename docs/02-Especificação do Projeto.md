# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

## Personas

1. Fabiana de Fátima dos Santos Pereira tem 33 anos, é analista financeira em uma empresa do ramo esportivo. Durante sua expedições sente dificuldade em acomodações com muitas pessoas, dificuldade em se adaptar com temperaturas muito baixas e sente muita saudade da família mas, adora andar à toa para conhecer cidades e passear pelos parques.  Está em busca de conhecer novas pessoas, culturas e novos lugares.

2. Jullio Ravazoli tem 36 anos, é executivo de vendas em uma empresa de serviços terceirizados. Tem como hobbie viajar e fotografar, busca conhecer novas culturas e outros idiomas visando crescimento pessoal.  Sente dificuldade na adaptação às novas culturas, distanciamento familiar e em se adaptar à climas diferentes do habitual.

3. Elisa Budreckas Vieira tem 34 anos, é secretária da diretoria de uma empresa do ramo de fornecimento de energia elétrica. Ama cozinhar e ler livros, tem facilidade com decoração de interiores e como sua maior companhia, o marido. Busca conhecer o mundo para aprender sobre diversas culturas culinárias.  Sempre tem dificuldade em lidar com a saudade da família e em muitas de suas viagens alega receber discriminação cultural.  

4. Maria Cristina Bizotti tem 28 anos, é psicóloga e atua na abordagem da TCC - Terapia Cognitivo Comportamental.  Já realizou muito trabalhos voluntários, gosta muito de ler e aprecia a arte voltada para pinturas.  Busca promover qualidade de vida, bem-estar psicológico e emocional para as pessoas, sua maior alegria é ver os resultados que a terapia proporciona na vida dos pacientes.  Sua frustração é saber que muitas pessoas acham que terapia é para pessoas "loucas" e que depressão e ansiedade é frescura. 

5. Jéssica Matias tem 32 anos, é psicóloga clínica, trabalha com orientação psicanalítica de adolescentes e adultos. Gosta de caminhar, ir ao cinema e ler livros de romance.  Seu objetivo é crescer na carreira e ser reconhecida profissionalmente, além de ajudar as pessoas a viverem a vida de forma mais feliz e satisfatória.  Sente muita dificuldade em captar clientes e fica frustada quando os pacientes não levam a terapia a sério. 	

6. Lucas Gonçalves tem 28 anos, é engenheiro de software, trabalha com desenvolvimento de jogos em uma multinacional canadense, país onde reside atualmente.  Gosta de jogos eletrônicos e de tocar guitarra. Tem paixão por tecnologia e sua constante evolução.  Fica fascinado com a possibilidade de desenvolver softwares que podem impactar a vida das pessoas de forma positiva mas, tem dificuldade de lidar com a pressão por prazos curtos, que muitas vezes são incompatíveis com a complexidade do trabalho.	
7. Andreia Vale tem 53 anos, é psicóloga clínica, trabalha com terapia cognitiva comportamental. Suas maiores motivações são o amor pela profissão, a assistência social e psicólogica que provê no decorrer do tratamento, a promoção de mudanças e acolhimento na vida dos seus pacientes. Atualmente, algumas de suas frustações são sobre a falta de padronização e direcionamento para com os pacientes imigrantes, e o distanciamento dos mesmos. Um de seus hobbies é dançar, ouvir música, ler e estar junto de seus filhos. 
8. Matheus Campos Braga tem 28 anos, é psicólogo clínico analítico. Um de duas motivações é a percepção do desenvolvimento dos pacientes promovida pelo processo terapêutico. No que se refere aos pacientes de fora do país, o fato de estar funcionando como um ponto de apoio dessas pessoas que se encontram muito escassa pelo fato de morarem distante de seus familiares, amigos, entre outros. A maior frustração no atendimento online em relação a pacientes de fora do país se refere a uma dificuldade de fixação de horários devido à diferença de fuso e pela natureza de trabalho da maioria deles (informal) que impede uma previsibilidade e constância no processo terapêutico deles. Seus hobbies consistem em jogar videogame, estudar sobre diversos assuntos como física, direito, filosofia e política. E também, adora ver filmes e séries. 



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                       |PARA ... `MOTIVO/VALOR`                 |
|--------------------|--------------------------------------------------------------------------|----------------------------------------|
|Fabiana             |Encontrar ajuda para lidar com distanciamento familiar                   |Poder aproveitar melhor as viagens|
|Jullio              |Conhecer relatos de pessoas que enfretaram as mesmas dificuldades        |Conseguir lidar melhor com  as frustrações |       
|Elisa               |Encontrar ajuda profissional                                                       |Lidar com a discriminação cultural|
|Maria               |Divulgar serviços                                                        |Que mais pessoas encontrem resultados através de terapias |
|Jéssica Matias	     |Captar e ajudar novos clientes	                                       |Ver pacientes melhorando e superando problemas|
Jéssica Matias	     |Democratizar o acesso à terapia	                                       |Concientizar que a saúde mental deve ser uma prioridade na sociedade|
Jéssica Matias	     |Divulgar um método de trabalho que cause motivação                       |Ajudar pessoas que precisam e querem melhorar sua situação.|          
Lucas Gonçalves	     |Encontrar profissional que ajude na dedicação da saúde mental            |Aprender a lidar com o desgaste gerado pela pressão de prazos|
Lucas Gonçalves	     |Encontrar ajuda profissional para distanciamento familiar                |Trabalhar questões emocionais relacionadas ao fato de estar longe da família e amigos
Lucas Gonçalves	     |Adquirir ajduda profissional para motivação e fim da proscrastinação     |Manter o foco nos estudos e nos objetivos|
Andreia Vale	       |Padronização e direcionamento focados em pacientes imigrantes	           |Proporcionar qualidade de vida aos imigrantes
Matheus Braga	       |Gerenciar horários para atendimento de pacientes que estão fora do Brasil |Obter constância nos atendimentos direcionados a imigrantes


                                                           
## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID       | Descrição do Requisito  | Prioridade |
|---------|------------------------------------------------------|------|
|RF-001| O site deve apresentar na página inicial cards com os <br/> psicólogos disponíveis, área de login, cards com relatos de imigrantes | ALTA | 
|RF-002| Para a página de psicólogos, deve haver um formulário <br/> requerendo informações previamente discutidas como email, CRP, telefone, abordagem   | ALTA |    
|RF-003| O site deve apresentar na tela de cadastro para opção <br/> paciente, a o formulário para cadastrar formas de contato      | ALTA |
|RF-004| Todos os botões devem ser clicáveis                  | MÉDIA |
|RF-005| Na página principal, devemos deixar claro o propósito <br/> do site já que envolve assuntos sensíveis | MÉDIA |
|RF-006| O site deve apresentar na página de relatos, cards com identificação anônima ou não e a opção de relatar  | MÉDIA |
|RF-007| O site deve apresentar na página de relatos, todos os relatos cadastrados.   | MÉDIA | 
|RF-008| O site deve apresentar um formulário/e-mail para suporte    | MÉDIA | 

         


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------------------------------------------------|-------|
|RNF-001| O site deve apresentar na tela de cadastro de psicólogo          | MÉDIA | 
|RNF-002| Interface de usuário                                              | MÉDIA | 
|RNF-003| O sistema deve ser fácil de usar e entender                       | MÉDIA | 
|RNF-004| O sistema deve rodar em diferentes plataformas com <br/> alterações mínimas    | MÉDIA | 
|RNF-005| O site deve ser responsivo          | MÉDIA |
           

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir:

|ID| Restrição                                                                     |
|--|-------------------------------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre                         |
|02| O aplicativo deve se restringir às tecnologias básicas da Web Frontend        |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho                  |
|04| O grupo deverá utilizar o repositório específico do curso ADS                 |
