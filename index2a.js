const baseURL =
  'https://developer.nps.gov/api/v1/parks?limit=467&api_key=3vLuL2FfPRGht2DMlQbgquUINSkvZfZCPbdlnzvp';

//https://developer.nps.gov/api/v1/parks?limit=300&api_key=3vLuL2FfPRGht2DMlQbgquUINSkvZfZCPbdlnzvp

let movContainer = document.querySelector('.park-info');

document.getElementById('btnFetch').addEventListener('click', fetchPeeps);

function fetchPeeps(e) {
  e.preventDefault();
  fetch(`${baseURL}`)
    .then((response) => response.json())
    .then((json) => displayImage(json))
    .catch((error) => {
      console.log('error');
    });
}
var computerNumber = Math.floor(Math.random() * 467) + 1;

function displayImage(data) {
  console.log(data);

  console.log(data.data[3].fullName);
  console.log(data.data[466].fullName);
  console.log(data.data[`${computerNumber}`].fullName);

  console.log(computerNumber);

  for (let i = 0; i < data.data.length; i++) {
    let movE = document.createElement('div');
    movE.className = 'card';
    let movEtitle = document.createElement('h5');
    movEtitle.className = 'card-title';
    let movEdescript = document.createElement('p');
    movEdescript.className = 'card-text';
    //let movImg = document.createElement('img');
    //movImg.className = 'card-img-top';
    let movPoster = document.createElement('img');
    movPoster.className = 'card-img-top2';
    let movDtop = document.createElement('p');
    movDtop.className = 'btnDtop';
    movDtop.innerText = 'happy';

    //this is the added a -- check on add LINK
    var a = document.createElement('a');
    var linkText = document.createTextNode('Parks Website');
    a.appendChild(linkText);
    a.title = 'Parks Website';
    a.href = `${data.data[i].url}`;
    a.className = 'btn btn-primary';

    movEtitle.innerText = `${data.data[i].fullName} `;
    movEdescript.innerText = `${data.data[i].description}`;

    console.log(data.data[i].url);
    console.log(data.data[i].fullName);

    //movImg.src = data.data[i].images[0].url; // movImg.src = personUrl(
    //   data[i].title.replaceAll(' ', '').toLowerCase().replace("'", '')
    // );
    // movPoster.src = movUrl(
    //   data[i].title.replaceAll(' ', '').toLowerCase().replace("'", '')
    // );
    movContainer.appendChild(movE);
    //movE.appendChild(movImg);
    movE.appendChild(movPoster);
    movE.appendChild(movEtitle);
    movE.appendChild(movEdescript);
    movE.appendChild(movDtop);
    movE.appendChild(a);
  }
}

// function personUrl(characterName) {
//   characterList = {
//     castleinthesky: 'https://www.ghibli.jp/gallery/laputa006.jpg',
//     pompoko: 'https://www.ghibli.jp/gallery/tanuki011.jpg',
//     theredturtle: 'https://www.ghibli.jp/gallery/redturtle017.jpg',
//     whenmarniewasthere: 'https://www.ghibli.jp/gallery/marnie019.jpg',
//     thetaleoftheprincesskaguya:
//       'https://www.ghibli.jp/gallery/kaguyahime039.jpg',
//     thewindrises: 'https://www.ghibli.jp/gallery/kazetachinu019.jpg',
//     fromuponpoppyhill: 'https://www.ghibli.jp/gallery/kokurikozaka050.jpg',
//     arrietty: 'https://www.ghibli.jp/gallery/karigurashi045.jpg',
//     ponyo: 'https://www.ghibli.jp/gallery/ponyo024.jpg',
//     talesfromearthsea: 'https://www.ghibli.jp/gallery/ged048.jpg',
//     howlsmovingcastle: 'https://www.ghibli.jp/gallery/howl049.jpg',
//     thecatreturns: 'https://www.ghibli.jp/gallery/baron005.jpg',
//     spiritedaway: 'https://www.ghibli.jp/gallery/chihiro048.jpg',
//     myneighborstheyamadas: 'https://www.ghibli.jp/gallery/yamada050.jpg',
//     princessmononoke: 'https://www.ghibli.jp/gallery/mononoke036.jpg',
//     porcorosso: 'https://www.ghibli.jp/gallery/porco034.jpg',
//     onlyyesterday: 'https://www.ghibli.jp/gallery/omoide028.jpg',
//     kikisdeliveryservice: 'https://www.ghibli.jp/gallery/majo011.jpg',
//     myneighbortotoro: 'https://www.ghibli.jp/gallery/totoro032.jpg',
//     graveofthefireflies:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.EnZGBy1AMR3_ysHQ0onhAQHaD_%26pid%3DApi&f=1',
//     whisperoftheheart: 'https://www.ghibli.jp/gallery/mimi048.jpg',
//   };

//   if (characterList.hasOwnProperty(characterName)) {
//     return characterList[characterName];
//   } else {
//     return '';
//   }
// }

// function movUrl(movPosterName) {
//   posterList = {
//     castleinthesky: 'https://www.ghibli.jp/images/laputa.jpg',
//     pompoko: 'https://www.ghibli.jp/images/tanuki.jpg',
//     theredturtle: 'https://www.ghibli.jp/images/red-turtle.jpg',
//     whenmarniewasthere: 'https://www.ghibli.jp/images/marnie.jpg',
//     thetaleoftheprincesskaguya: 'https://www.ghibli.jp/images/kaguyahime.jpg',
//     thewindrises: 'https://www.ghibli.jp/images/kazetachinu.jpg',
//     fromuponpoppyhill: 'https://www.ghibli.jp/images/kokurikozaka.jpg',
//     arrietty: 'https://www.ghibli.jp/images/karigurashi.jpg',
//     ponyo: 'https://www.ghibli.jp/images/ponyo.jpg',
//     talesfromearthsea: 'https://www.ghibli.jp/images/ged.jpg',
//     howlsmovingcastle: 'https://www.ghibli.jp/images/howl.jpg',
//     thecatreturns: 'https://www.ghibli.jp/images/baron.jpg',
//     spiritedaway: 'https://www.ghibli.jp/images/chihiro.jpg',
//     myneighborstheyamadas: 'https://www.ghibli.jp/images/yamada.jpg',
//     princessmononoke: 'https://www.ghibli.jp/images/mononoke.jpg',
//     porcorosso: 'https://www.ghibli.jp/images/porco.jpg',
//     onlyyesterday: 'https://www.ghibli.jp/images/omoide.jpg',
//     kikisdeliveryservice: 'https://www.ghibli.jp/images/majo.jpg',
//     graveofthefireflies: 'https://www.ghibli.jp/images/hotarunohaka.jpg',
//     myneighbortotoro: 'https://www.ghibli.jp/images/totoro.jpg',
//     whisperoftheheart: 'https://www.ghibli.jp/images/mimi.jpg',
//   };
//   if (posterList.hasOwnProperty(movPosterName)) {
//     return posterList[movPosterName];
//   } else {
//     return '';
//   }
// }

/*
  NOTEs
  Website resources: https://translate.google.com/translate?hl=en&sl=ja&u=https://www.ghibli.jp/works/mimi/&prev=search&pto=aue




  title: Grave of the Fireflies, Castle in the Sky, My Neighbor Totoro, Kiki's Delivery Service, Only Yesterday, Porco Rosso, Pom Poko, Whisper of the Heart, Princess Mononoke, My Neighbors the Yamadas, Spirited Away, The Cat Returns, Howl's Moving Castle, Tales from Earthsea, Ponyo, Arrietty, From Up on Poppy Hill, The Wind Rises, The Tale of the Princess Kaguya, When Marnie Was There, The Red Turtle,


Ghibli Museum


Examples of other students - https://studioghiblifilmdata.web.app and https://td-ghibli-api-c0135.firebaseapp.com




studio has given free usage of..
see rights

link for the images: https://www.ghibli.jp/works/kaguyahime/



*/
