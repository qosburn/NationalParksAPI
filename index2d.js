const baseURL =
  'https://developer.nps.gov/api/v1/parks?limit=467&api_key=3vLuL2FfPRGht2DMlQbgquUINSkvZfZCPbdlnzvp';

//https://developer.nps.gov/api/v1/parks?limit=300&api_key=3vLuL2FfPRGht2DMlQbgquUINSkvZfZCPbdlnzvp

let parkContainer = document.querySelector('.park-info');

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
var randNum = Math.floor(Math.random() * 467) + 1;

function displayImage(data) {
  console.log(data);
  console.log(`this is how many items ${data.data.length}`);

  console.log(data.data[5].fullName);
  console.log(data.data[5].fullName);
  console.log(data.data[`${randNum}`].fullName);
  console.log(data.data[`${randNum}`].states);
  console.log(data.data[`${randNum}`].entranceFees[0].cost);
  console.log(data.data[`${randNum}`].entranceFees[0].description);
  console.log(data.data[`${randNum}`].directionsInfo);

  console.log(randNum);

  let movE = document.createElement('div');
  movE.className = 'card';
  let movImg = document.createElement('img');
  movImg.className = 'card-img-top';
  let movEbody = document.createElement('div');
  movEbody.className = 'card-body';
  let movEtitle = document.createElement('h5');
  movEtitle.className = 'card-title';
  let movEdescript = document.createElement('p');
  movEdescript.className = 'card-text';
  //parkDetails
  let parkDetails = document.createElement('ul');
  parkDetails.className = 'list-group list-group-flush';
  //parkLocation
  let parkDLoc = document.createElement('li');
  parkDLoc.className = 'list-group-item';
  let parkDLoclable = document.createElement('span');
  parkDLoclable.className = 'listGLable';
  parkDLoclable.innerText = 'Location: ';

  let parkDLocData = document.createElement('span');
  parkDLocData.className = 'listGData';

  //this is the added a -- check on add LINK
  let a = document.createElement('a');
  let linkText = document.createTextNode('Parks Website');
  a.title = 'Visit the Parks Website';
  a.href = data.data[`${randNum}`].url;
  a.className = 'btn btn-primary';

  movImg.src = data.data[`${randNum}`].images[0].url;
  movEtitle.innerText = data.data[`${randNum}`].fullName;
  movEdescript.innerText = data.data[`${randNum}`].description;
  parkDLocData.innerText = data.data[`${randNum}`].directionsInfo;

  // console.log(data.data[`${randNum}`].fullName);

  parkContainer.appendChild(movE);
  movE.appendChild(movImg);
  movE.appendChild(movEbody);
  movEbody.appendChild(movEtitle);
  movEbody.appendChild(movEdescript);
  movE.appendChild(parkDetails);
  parkDetails.appendChild(parkDLoc);
  parkDLoc.appendChild(parkDLoclable);
  parkDLoc.appendChild(parkDLocData);

  movEbody.appendChild(a);
  a.appendChild(linkText);

  // for (let i = 0; i < data.data.length; i++) {
  //   let movE = document.createElement('div');
  //   movE.className = 'card';
  //   let movPoster = document.createElement('img');
  //   movPoster.className = 'card-img-top2';
  //   let movEbody = document.createElement('div');
  //   movEbody.className = 'card-body';
  //   let movEtitle = document.createElement('h5');
  //   movEtitle.className = 'card-title';
  //   let movEdescript = document.createElement('p');
  //   movEdescript.className = 'card-text';
  //   //let movImg = document.createElement('img');
  //   //movImg.className = 'card-img-top';

  //   let movDtop = document.createElement('p');
  //   movDtop.className = 'btnDtop';
  //   movDtop.innerText = 'happy';

  //   //this is the added a -- check on add LINK
  //   var a = document.createElement('a');
  //   var linkText = document.createTextNode('Parks Website');
  //   a.appendChild(linkText);
  //   a.title = 'Parks Website';
  //   a.href = `${data.data[i].url}`;
  //   a.className = 'btn btn-primary';

  //   movEtitle.innerText = `${data.data[i].fullName} `;
  //   movEdescript.innerText = `${data.data[i].description}`;

  //   console.log(data.data[i].url);
  //   console.log(data.data[i].fullName);

  //   //movImg.src = data.data[i].images[0].url; // movImg.src = personUrl(
  //   //   data[i].title.replaceAll(' ', '').toLowerCase().replace("'", '')
  //   // );
  //   // movPoster.src = movUrl(
  //   //   data[i].title.replaceAll(' ', '').toLowerCase().replace("'", '')
  //   // );
  //   movContainer.appendChild(movE);
  //   //movE.appendChild(movImg);
  //   movE.appendChild(movPoster);
  //   movE.appendChild(movEbody);
  //   movEbody.appendChild(movEtitle);
  //   movEbody.appendChild(movEdescript);
  //   movEbody.appendChild(movDtop);
  //   movEbody.appendChild(a);
  // }
}

/*
  NOTEs
  Website resources: 




  


Examples of other students - https://studioghiblifilmdata.web.app and https://td-ghibli-api-c0135.firebaseapp.com




studio has given free usage of..
see rights

link for the images: https://www.ghibli.jp/works/kaguyahime/



*/
