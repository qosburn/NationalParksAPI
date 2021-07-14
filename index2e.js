const baseURL =
  'https://developer.nps.gov/api/v1/parks?limit=467&api_key=3vLuL2FfPRGht2DMlQbgquUINSkvZfZCPbdlnzvp';

//https://developer.nps.gov/api/v1/parks?limit=300&api_key=3vLuL2FfPRGht2DMlQbgquUINSkvZfZCPbdlnzvp

document.getElementById('btnFetch').addEventListener('click', fetchPeeps);

let parkContainer = document.querySelector('.park-info');

function fetchPeeps(e) {
  e.preventDefault();
  fetch(`${baseURL}`)
    .then((response) => response.json())
    .then((json) => displayImage(json))
    .catch((error) => {
      console.log('error');
    });
}

function displayImage(data) {
  var randNum = Math.floor(Math.random() * 467) + 1;
  while (parkContainer.firstChild) {
    parkContainer.removeChild(parkContainer.firstChild);
  }

  console.log(data);
  console.log(`this is how many items ${data.data.length}`);

  console.log(data.data[5].fullName);
  console.log(data.data[5].fullName);
  console.log(data.data[`${randNum}`].fullName);
  console.log(data.data[`${randNum}`].states);
  console.log(data.data[`${randNum}`].entranceFees[0].cost);
  console.log(data.data[`${randNum}`].entranceFees[0].description);
  console.log(data.data[`${randNum}`].directionsInfo);
  console.log(data.data[`${randNum}`].directionsInfo);
  console.log(data.data[`${randNum}`].addresses[0].postalCode);
  console.log(data.data[`${randNum}`].weatherInfo);

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

  //parkWeather
  let parkWeather = document.createElement('li');
  parkWeather.className = 'list-group-item';
  let parkWeatherlable = document.createElement('span');
  parkWeatherlable.className = 'listGLable';
  parkWeatherlable.innerText = 'General Weather Conditions: ';
  let parkWeatherData = document.createElement('span');
  parkWeatherData.className = 'listGData';

  //parkAddress
  let parkAddress = document.createElement('li');
  parkAddress.className = 'list-group-item';
  let parkAddlable = document.createElement('span');
  parkAddlable.className = 'listGLable';
  parkAddlable.innerText = 'Mailing Address: ';
  let parkAddData = document.createElement('span');
  parkAddData.className = 'listGData';

  //this is the added a -- check on add LINK

  let parkWebsite = document.createElement('li');
  parkWebsite.className = 'list-group-item';
  let a = document.createElement('a');
  let linkText = document.createTextNode('Visit the Parks Website');
  a.title = 'Visit the Parks Website';
  a.href = data.data[`${randNum}`].url;
  a.className = 'btn btn-primary';
  a.target = '_blank';

  movImg.src = data.data[`${randNum}`].images[0].url;
  movEtitle.innerText = data.data[`${randNum}`].fullName;
  movEdescript.innerText = data.data[`${randNum}`].description;
  parkDLocData.innerText = data.data[`${randNum}`].directionsInfo;
  parkWeatherData.innerText = data.data[`${randNum}`].weatherInfo;
  parkAddData.innerText =
    data.data[`${randNum}`].addresses[0].line1 +
    ', ' +
    data.data[`${randNum}`].addresses[0].city +
    ', ' +
    data.data[`${randNum}`].addresses[0].stateCode +
    ' ' +
    data.data[`${randNum}`].addresses[0].postalCode;

  // console.log(data.data[`${randNum}`].fullName);

  movE.appendChild(movImg);
  movE.appendChild(movEbody);
  movEbody.appendChild(movEtitle);
  movEbody.appendChild(movEdescript);
  movE.appendChild(parkDetails);
  parkDetails.appendChild(parkDLoc);
  parkDLoc.appendChild(parkDLoclable);
  parkDLoc.appendChild(parkDLocData);

  parkDetails.appendChild(parkWeather);
  parkWeather.appendChild(parkWeatherlable);
  parkWeather.appendChild(parkWeatherData);

  parkDetails.appendChild(parkAddress);
  parkAddress.appendChild(parkAddlable);
  parkAddress.appendChild(parkAddData);
  parkDetails.appendChild(parkWebsite);
  parkWebsite.appendChild(a);
  a.appendChild(linkText);
  parkContainer.appendChild(movE);

  // Possible Background images
  //https://www.nps.gov/common/uploads/structured_data/3C7ECCCF-1DD8-B71B-0B4CB4FB1834BC1D.jpg
  //https://www.nps.gov/common/uploads/structured_data/3C793AD5-1DD8-B71B-0B4A3C1BFA5B4C83.jpg
  //https://www.nps.gov/common/uploads/structured_data/3C79850F-1DD8-B71B-0BC4A88BA85DE6B0.jpg
  //https://www.nps.gov/common/uploads/structured_data/3C7A599D-1DD8-B71B-0BBDC12BEC5107B5.jpg

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
