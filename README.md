# Cronometro
Projeto de um cronômetro feito com muito Javascript para dar aquela upada nas habilidades adquiridas no JS.
Neste projeto básico de um cronômetro online, usei bastante Javascript para desenvolve-lo.
<h3>Imagens do projeto:</h3>
<img src="https://github.com/sian19/Cronometro/blob/master/images/Img-Projeto.png">
<img src="https://github.com/sian19/Cronometro/blob/master/images/Img-Projeto2.png">
<h3>Oque foi implementado no projeto:</h3>
<ul>
  <li>Foi feito o uso do temporizador no JS, onde eu introduzi dentro da função do temporizador, 3 váriaveis para ir recebendo valores e incrementado de acordo com que o tempo fosse passando. O mesmo processo foi feito com a contagem retrocessiva, só que desta vez decrementando as 3 váriaveis conforme o tempo fosse passando(Esta foi a lógica por trás da aplicação).</li>
  <li>Foi feito o uso do localstorage, para salvar a contagem do usuário no navegador caso acontecesse algum imprevisto se o navegador fosse fechado por exemplo.</li>
  <li>O resultado vai aparecer abaixo do display do contador caso o usuário pause o cronômetro, o desafio aqui nesta parte foi criar vários comandos de condições para manipular uma váriavel que recebesse os valores que as váriaveis do temporizador recebia, desta forma mostrando na tela em tempo real o tempo gasto pelo usuário.</li>
  <li>Foi usado JSON, para converter os valores em strings que eram salvos pelo localstorage, para que ao reiniciar o navegador os dados que foram salvos pudessem ser convertidos em números para serem usados ao dar um refresh na página através do evento load.</li>
  <li>Foi criado um botão caso o usuário quisesse zerar o cronômetro para uma nova contagem por exemplo.</li>
  <li>Projeto desenvolvido com JS puro sem o auxílio de nenhum framework ou biblioteca.</li>
</ul>

<h3>Link do projeto:</h3>
<a href="https://cronometro-topaz.vercel.app/">Clique aqui</a>
