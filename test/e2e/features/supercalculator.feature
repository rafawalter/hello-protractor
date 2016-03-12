# language: pt

Funcionalidade: Navegar pelos financiamentos
  Como uma pessoa
  Eu quero fazer contas numa calculadora
  Para que as contas estejam corretas

  Cenário: titulo da calculadores
    Dado que naveguei para a calculadora
    Então vejo o título "Super Calculator" na página

  Cenário: somar um com dois
    Dado que naveguei para a calculadora
    E preenchi o primeiro número com 1
    E preenchi o segundo número com 2
    Quando clico no botão para calcular
    Então vejo o resultado 3
