'use strict'

const imgDiv= document.querySelector('div');
const img = document.querySelector('img');
img.addEventListener('click', changeDogImgHandler);
changeDogImgHandler();

function generatePictureInPage(data){
   
    img.src= data.message;
    img.alt=data.status;
    img.style.width='600px';
    img.style.height='300px';
    img.style.display='inline';
    img.style.objectFit='cover';
    imgDiv.style.textAlign= 'left';
    imgDiv.style.marginTop="50px";
    
}

function changeDogImgHandler(){
    const randomImgDogSrc='https://dog.ceo/api/breeds/image/random'
    fetch(randomImgDogSrc)
    .then(response=>response.json())
    .then(data=>generatePictureInPage(data))
    .catch(err=>console.log('error: ',err));
}


const bodyFactAboutCats= document.querySelector('p');
const btnForChangeFactAboutCats= document.querySelector('.forChangeFact')
btnForChangeFactAboutCats.textContent='Change fact about cats';
btnForChangeFactAboutCats.addEventListener('click', changeFactsBtnHandler);
changeFactsBtnHandler();


function generateFactsAboutCats(dataCats){
    bodyFactAboutCats.textContent=dataCats.fact;
    bodyFactAboutCats.style.backgroundColor= 'gray';

}

function changeFactsBtnHandler(){
    const randomeFactAboutCatsUrl='https://catfact.ninja/fact';
    fetch(randomeFactAboutCatsUrl)
    .then(responseFacts=>responseFacts.json())
    .then(dataCats=>generateFactsAboutCats(dataCats))
    .catch(err=>console.log('error: ', err));
}






const [day, today, tomorrow, afterTomorrow]= document.querySelectorAll('th');

const firstName= document.querySelector('.firstName');
const secondname= document.querySelector('.secondname');
const thirdName= document.querySelector('.thirdName');

let [firstDayWs, secondDayWs, tirdDayWs]= document.querySelectorAll('.mWS');
let [fWindGats, sWindGats, tWindGuts]=document.querySelectorAll('.mWG')
let [firstSpScores, secondSpSores, tirdSpScores]=document.querySelectorAll('.wSS');



const weatherUrl='https://api.open-meteo.com/v1/forecast?latitude=50.1432&longitude=30.7461&hourly=temperature_2m&daily=wind_speed_10m_max,wind_gusts_10m_max&forecast_days=3';
fetch(weatherUrl)
.then(weatherResponse=>weatherResponse.json())
.then(weatherData=>generateWeatherData(weatherData))
.catch(e=>console.log('error: ', e));



function generateWeatherData({daily:{wind_speed_10m_max}, daily_units:{wind_speed_10m_max: windSU}, daily:{wind_gusts_10m_max},daily_units:{wind_gusts_10m_max: windGU} }){
   firstDayWs.textContent=`${wind_speed_10m_max[0]} ${windSU}`;
   secondDayWs.textContent=`${wind_speed_10m_max[1]} ${windSU}`;
   tirdDayWs.textContent=`${wind_speed_10m_max[2]} ${windSU}`;
   fWindGats.textContent= `${wind_gusts_10m_max[0]} ${windGU}`;
   sWindGats.textContent= `${wind_gusts_10m_max[1]} ${windGU}`;
   tWindGuts.textContent= `${wind_gusts_10m_max[2]} ${windGU}`;
  
   firstSpScores.textContent=calcSpeedScores(wind_speed_10m_max[0]);
   secondSpSores.textContent= calcSpeedScores(wind_speed_10m_max[1]);
   tirdSpScores.textContent= calcSpeedScores(wind_speed_10m_max[2]);
   firstSpScores.style.backgroundColor=calcColoreSpeedScores(wind_speed_10m_max[0]);
   secondSpSores.style.backgroundColor=calcColoreSpeedScores(wind_speed_10m_max[1]);
   tirdSpScores.style.backgroundColor=calcColoreSpeedScores(wind_speed_10m_max[2]);
  
}

day.textContent= 'DAY:';
today.textContent= 'TODAY';
tomorrow.textContent='TOMORROW';
afterTomorrow.textContent='DAY AFTER TOMORROW';

firstName.textContent='Maximum Wind Speed';
secondname.textContent='Maximum Wind Gusts';
thirdName.textContent='Wind Speed Scores';


function calcSpeedScores(wind_speed_10m_max){
    if(wind_speed_10m_max<1){
        return 0;
    }else if(wind_speed_10m_max >2 && wind_speed_10m_max<=5){
        return 1;
    } else if(wind_speed_10m_max>5 && wind_speed_10m_max<=11){
        return 2;
    }else if(wind_speed_10m_max>11 && wind_speed_10m_max<=19){
        return 3;
    }else if(wind_speed_10m_max>19 && wind_speed_10m_max<=28){
        return 4;
    }else if(wind_speed_10m_max>28 && wind_speed_10m_max<=38){
        return 5;
    }else if(wind_speed_10m_max>38 && wind_speed_10m_max<= 49){
        return 6;
    }else if(wind_speed_10m_max>49 && wind_speed_10m_max<=61){
        return 7;
    } else if(wind_speed_10m_max>61 && wind_speed_10m_max<=74){
        return 8;
    } else if(wind_speed_10m_max>74 && wind_speed_10m_max<=88){
        return 9;
    }else if(wind_speed_10m_max>88 && wind_speed_10m_max<=102){
        return 10;
    }else if(wind_speed_10m_max>102 && wind_speed_10m_max<=117){
        return 11
    }else if(wind_speed_10m_max>117){
        return 12;
    }
}

function calcColoreSpeedScores(wind_speed_10m_max){
    if(wind_speed_10m_max<1){
        return '#FFFFFF';
    }else if(wind_speed_10m_max >2 && wind_speed_10m_max<=5){
        return '#AEF1F9';
    } else if(wind_speed_10m_max>5 && wind_speed_10m_max<=11){
        return '#96F7DC';
    }else if(wind_speed_10m_max>11 && wind_speed_10m_max<=19){
        return '#96F7B4';
    }else if(wind_speed_10m_max>19 && wind_speed_10m_max<=28){
        return '#6FF46F';
    }else if(wind_speed_10m_max>28 && wind_speed_10m_max<=38){
        return '#73ED12';
    }else if(wind_speed_10m_max>38 && wind_speed_10m_max<= 49){
        return '#A4ED12';
    }else if(wind_speed_10m_max>49 && wind_speed_10m_max<=61){
        return '#DAED12';
    } else if(wind_speed_10m_max>61 && wind_speed_10m_max<=74){
        return '#DAED12';
    } else if(wind_speed_10m_max>74 && wind_speed_10m_max<=88){
        return '#ED8F12';
    }else if(wind_speed_10m_max>88 && wind_speed_10m_max<=102){
        return '#ED6312';
    }else if(wind_speed_10m_max>102 && wind_speed_10m_max<=117){
        return '#ED2912'
    }else if(wind_speed_10m_max>117){
        return '#D5102D';
    }
}

