var path,garoto, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
  boyImg = loadImage("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista
 path = createSprite(200,180,400,20);
 //adicione uma imagem para a pista
 path.addImage("path",pathImg);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.

path.scale=1.2;

//crie um sprite de menino
 garoto = createSprite(200,200,200,200)
//adicione uma animação de corrida para ele
 garoto.addImage("boy",boyImg)
garoto.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false;
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  garoto.x = World.mouseX
  // colidir o menino com os limites invisíveis da esquerda e da direita
  garoto.collide(leftBoundary);
  garoto.collide(rightBoundary);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
