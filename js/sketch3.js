let data;
let taille = ['grand', 'moyen', 'petit'];
let images = [];
let sprites = [];

let smsListe = [
  { cont: "Bonjour" },
  { cont: "Comment ça va ?" },
  { cont: { __text: "Bonne journée !" } }
];


function preload() {
  data = loadJSON("data.json");
  
  images[0] = loadImage('points_blancs.jpg');
  images[1] = loadImage('points_blancs.jpg');
  images[2] = loadImage('points_blancs.jpg');
}

function setup() {
  let sms = data.corpus.sms;
	sms = shuffle(sms);
  noCanvas();
  let smsListe = data.corpus.sms;

  for (let i = 0; i < smsListe.length; i++) {
    let texte = smsListe[i].cont;
    if (typeof texte === 'object') texte = texte.__text;
    let p = createP(texte);
    let boitesPoints = select('#points')
    let div = createDiv();
    boitesPoints.child(div);
    aleatoire = int(random(3));
    if(aleatoire == 1){
      div.addClass('points')
    }
    p.addClass(random(taille));
  }
}


 






  for (let i = 0; i < images.length; i++) {
    sprites.push({
      img: images[i],
      x: random(width),
      y: random(height),
      vx: random(-3, 3),
      vy: random(-3, 3),
      w: 100, // largeur d'affichage
      h: 100  // hauteur d'affichage
    });
  }

function draw() {
  background(220);

  // Mettre à jour et afficher chaque sprite
  for (let s of sprites) {
    // Déplacer
    s.x += s.vx;
    s.y += s.vy;

    // Rebondir sur les bords
    if (s.x < 0 || s.x + s.w > width) {
      s.vx *= -1;
    }
    if (s.y < 0 || s.y + s.h > height) {
      s.vy *= -1;
    }

    // Afficher l'image
    image(s.img, s.x, s.y, s.w, s.h);
}
  }