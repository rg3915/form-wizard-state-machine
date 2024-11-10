# form-wizard-state-machine

Form Wizard made with AlpineJS and apply State Machine Pattern

Formulário Wizard com Máquina de Estados

Este projeto implementa um formulário wizard com uma máquina de estados para gerenciar o fluxo de etapas de forma eficiente e escalável. Utilizando tecnologias modernas e padrões de design robustos, essa solução proporciona uma experiência de usuário intuitiva e personalizável.

## Intro

Uma máquina de estados é um modelo de design que organiza a lógica de um sistema em "estados" finitos, onde o sistema pode estar em apenas um estado por vez. Cada estado define o comportamento do sistema e permite transições para outros estados, geralmente com condições específicas. As máquinas de estado são usadas para representar fluxos e interações previsíveis, como etapas de um formulário, que é o exemplo que veremos aqui.

Este diagrama descreve um fluxo de cadastro, detalhando as etapas e os estados pelos quais um usuário passa ao preencher suas informações.

Na primeira tela, que vamos chamar de início, podemos escolher entre pessoa física ou jurídica.

Após a escolha do tipo, vamos para a tela de identificação, onde preenchemos o nome e e-mail.

Depois vamos para a tela de Documentos, onde se o tipo de pessoa for física, preenchemos RG e CPF, e se for jurídica, preenchemos CNPJ e Razão Social.

Na próxima tela preenchemos o endereço.

E na última tela exibimos todos os dados para revisão final.

![](img/mermaid-diagram.png)

Em resumo, o diagrama descreve um fluxo de cadastro dividido em etapas lógicas que guiam o usuário desde a escolha do tipo de cadastro até a finalização, passando por etapas intermediárias de preenchimento de dados e revisão.


## Funcionalidades

* Gerenciamento de etapas do formulário com máquina de estados
* Validação de dados em cada etapa
* Suporte a etapas condicionais baseadas em respostas anteriores
* Interface de usuário personalizável

## Tecnologias Utilizadas

* Frontend: [AlpineJS](https://alpinejs.dev/) para construir a interface de usuário

* Estilização: [Pico CSS](https://picocss.com/)

## Rodando a aplicação

```python
git clone https://github.com/rg3915/form-wizard-state-machine.git

cd form-wizard-state-machine

python -m http.server
```

Ou rode com [livereload](https://www.npmjs.com/package/livereload)

Ou com [http-server](https://www.npmjs.com/package/http-server)

![](img/01.png)
![](img/02.png)
![](img/03.png)
![](img/04.png)
![](img/05.png)
![](img/06.png)

## Leia mais em

* [State by Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/state)
* [State Design Pattern by Mario Example](https://www.ashishvishwakarma.com/GoF-Design-Patterns-by-Example/State-Pattern/).


## Contribuição

Contribuições são bem-vindas! Para contribuir, por favor:

* Crie um fork do repositório
* Faça suas alterações
* Envie um pull request
