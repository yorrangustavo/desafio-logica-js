 /*
## Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
## Saída
 
 */


function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

 const MyHero = " BombermaN ";
 let NumeroXP = gerarNumeroAleatorio();

switch (NumeroXP) {
  case NumeroXP >=0 && NumeroXP <=1000:
    console.log("O Herói de nome " + MyHero + "está no nivel Ferro");
    break;
  
  case NumeroXP >= 1001 && NumeroXP <=2000:
    console.log("O Herói de nome " + MyHero + "está no nivel Bronze");
      break;

  case NumeroXP >= 2001 && NumeroXP <=5.000:
    console.log("O Herói de nome " + MyHero + "está no nivel Prata");
      break;

  case NumeroXP >= 5001 && NumeroXP <= 7.000:
    console.log("O Herói de nome " + MyHero + "está no nivel Ouro");
      break;

  case NumeroXP >= 7001 && NumeroXP <= 8000:
    console.log("O Herói de nome " + MyHero + "está no nivel Platina");
      break;

  case NumeroXP >= 8001 && NumeroXP <= 9000:
    console.log("O Herói de nome " + MyHero + "está no nivel Ascendente");
      break;
      
  case NumeroXP >= 9001 && NumeroXP <=10000:
    console.log("O Herói de nome " + MyHero + "está no nivel Imortal");
      break;
      
  case NumeroXP >= 10001:
    console.log("O Herói de nome " + MyHero + "está no nivel Radiante");
      break;
  
}
