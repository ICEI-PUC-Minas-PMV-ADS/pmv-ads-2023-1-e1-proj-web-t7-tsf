# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)

## CT01 - Página Inicial
- Resultado obtido: Passou no teste pois todas as informações estão disponíveis incluindo barra de navegação lateral e cards informativos. Todos os botões são clicáveis. 
- Testado por: Liana

![Teste - Pagina Inicial](img/paginainicial.png) Teste - Página Inicial

## CT02 - Criar Login 
- Resultado obtido: Passou no teste pois o botão Login (barra lateral) é funcional e redireciona corretamente. Há um dropdown com duas opções: Psicólogo e Imigrante. Ao escolher ou uma ou outra opção e clicar em enviar, ver-se-á um formulário de acordo com cada opção corretamente. 
- Testado por: Liana

![Teste - Criar Login](docs/img/criarlogin.png) Teste - Criar Login

## CT03 - Formulários de Cadastro
- Resultado obtido: Passou no teste pois na página de login é possível escolher ambas as opções e clicar em Enviar. Além disso, o formulário está disponível com as validações necessárias bem como telefone e e-mail reais. O usuário também conseguirá adicionar uma foto caso queira. Como melhoria, podemos colocar validação no campo senha e também, a opção de deixar a senha visível para que seja mais seguro para o usuário. 
- Testado por: Liana

![Teste - Login Imigrante](img/loginimigrante.png) Teste - Login Imigrante

## CT04 - Campos do Formulário de Cadastro Psicólogos
- Resultado obtido: Passou no teste pois na página de login é possível escolher a opção de psicólogo e clicar em Enviar. Além disso, o formulário está disponível com as validações necessárias bem como CRP, telefone e e-mail reais. O usuário também conseguirá adicionar uma foto caso queira. Como melhoria, podemos colocar validação no campo senha e também, a opção de deixar a senha visível para que seja mais seguro para o usuário. 
- Testado por: Liana

![Teste - Login Terapeuta](img/loginpsi.png) Teste - Login Terapeuta

## CT05 - Campos dos Formulário de Cadastro Imigrantes

## CT06 - Login
- Resultado obtido: Passou no teste, foi possível realizar o login corretamente com uma conta cadastrada e senha válida. Apesar de permitir texto em uma formatação diferente no campo e-mail reconheceu e barrou e-mails não cadastrados e senhas erradas. 

- Testado por: Douglas

![Teste - Login](img/Login.png) Teste - Login

## CT07 - Esqueci a senha
- Resultado obtido: Não passou no teste, Após preencher com um email válido e clicar em Redefinir Senha, não há qualquer redirecionamento de página ou mensagem que confirme o sucesso do procedimento.
- Testado por: Douglas

![Teste - Redefinir Senha](img/RedefinirSenha.png) Teste - Redefinir Senha

## CT08 - Cards da Home Page - Profissionais
- Resultado obtido: Passou no teste. Ao clicar, o botão do card direciona corretamente para a página de psicólogos. Vale ressaltar que como no card aparece somente um profissional, o botão dá a entender que direciona para o perfil desse profissional em específico. 
- Testado por: Douglas

![Teste - Card Profissionais](img/CardProfissionais.png) Teste - Card Profissionais

## CT09 - Cards da Home Page - Relatos
- Resultado obtido: Passou no teste. Ao clicar, o botão do card direciona corretamente para a página de relatos.
- Testado por: Douglas

![Teste - Card Relatos](img/CardRelatos.png) Teste - Card Relatos

## CT10 - Cards da Home Page - Dicas

- Resultado obtido: Passou no teste ao clicar em *Veja mais dicas* e, também ao utilizar a opção *Dicas* na aba de navegação esquerda. Há a possibilidade de utilizar javascript para adicionar uma animação ao mover o cursor no card tornando mais interativo e chamativo. 
- Testado por: Larissa

![Teste - Dicas](img/dicas.png) Teste - Dicas

## CT11 - Cards da Home Page - Perguntas Frequentes

- Resultado obtido: Passou no teste ao clicar em *Tenho Outras Dúvidas* e, também ao utilizar a opção *Perguntas Frequentes* na aba de navegação esquerda. Há a possibilidade de utilizar javascript para adicionar uma animação ao mover o cursor no card tornando mais interativo e chamativo.
- Testado por: Larissa

![Teste - Perguntas Frequentes](img/perguntasfrequentes.png) Teste - Perguntas Frequentes

## CT12 - Card, Cadastro Psicólogos, Home Page

- Resultado obtido: Passou no teste ao clicar em *Ver Perfil Completo* e escolher um profissional para ter mais informações. E, também ao utilizar a opção *Psicólogos* na aba de navegação esquerda. Há a possibilidade de utilizar javascript para adicionar uma animação ao mover o cursor no card tornando mais interativo e chamativo. No perfil do psicólogo, podemos colocar links externos para facilitar o contato do paciente com o psicólogo. 
- Testado por: Larissa

![Teste - Card Psicólogos](img/cardpsicologos.png) Teste - Card Psicólogos

## CT13 - Relatos

- Resultado obtido: Passou no teste ao clicar em *Mais Relatos*. E, também ao utilizar a opção *Relatos* na aba de navegação esquerda. Há a possibilidade de utilizar javascript para adicionar uma animação ao mover o cursor no card tornando mais interativo e chamativo. O mesmo pode ser feito nos relatos ao serem colocados mais em evidência com animações. 
- Testado por: Larissa

![Teste - Card Relatos](img/cardrelatos.png) Teste - Card Relatos 

## CT14 - Relatos

- Resultado obtido: Não passou no teste. Não foi adicionada a opção de deixar um feedback. 
- Testado por: Larissa
