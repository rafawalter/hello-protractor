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

  Cenário: somar quatro com seis
    Dado que naveguei para a calculadora
    Quando faço a soma de 4 com 6
    Então vejo o resultado 10

  Cenário: deve haver histórico
    Dado que naveguei para a calculadora
    Quando faço a soma de 1 com 2
    E faço a soma de 3 com 4
    Então vejo 2 itens no histórico

    Quando faço a soma de 5 com 6
    Então vejo 3 itens no histórico
    E a última linha do histórico contém "1 + 2"
    E a primeira linha do histórico contém "5 + 6"
    
