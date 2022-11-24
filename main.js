import './style.css'
const balance = 921.48;
async function getData(){
  fetch('data.json').then( response =>{
    return response.json();
  }).then(data =>{
    const html = data.map(value =>{
      return `
      <div class="items"> 
        <p class="xaxis">${value.day}</p> 
        <div class="yaxis" style="height:calc((${value.amount}rem/2))"></div> 
        <p class="valueAmount" id="${value.amount}">$${value.amount}</p>  
      </div>`
      ;
    }).join('');
    /*const vv = data.find(value =>{
      return value.amount;
    })*/
    document.querySelector('#chart').insertAdjacentHTML('afterbegin', html);
    //document.querySelector('#total').insertAdjacentText('afterbegin', vv);
  }).catch(error =>{
    console.log(error);
  });
}
getData();

async function findDate(){
  const date = new Date;
  const chosenDate = date.getDay();
  const avDays =["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
  for (let index = 0; index < avDays.length; index++) {
    if((chosenDate + 1) ===(avDays[index] + 1)){
      console.log(avDays[index]);
      const datevalue = document.querySelector('.yaxis');
      datevalue.style.backgroundColor = '--color-primary-cyan';
    }
  }


  /*const days = fetch('data.json').then(res =>{
    return res.json();
  })
  const chosenDate = date.getDay();
  console.log(chosenDate);
  let dayIndex = days.then(data => {
    data.map(function (value){
      return value.day;
    });
  });
  console.log(dayIndex);
  for (let i = 0; i < dayIndex.length; i++) {
    if(chosenDate === dayIndex[i]){
      console.log(dayIndex);
      const datevalue = document.querySelector('.yaxis');
      datevalue.style.backgroundColor = '--color-primary-cyan'
    };
  }*/

}
findDate();

document.querySelector('#app').innerHTML = `
<div class="container">
  <header>
    <div class="balance-container">
      <p class="fw-regular"> My balance </p>
      <p class=" fs-regular fw-bold"> $${balance}</p>
    </div>
    <svg class="icon" width="54" height="54">
      <use xlink:href="images/logo.svg#logo"></use>
    </svg>
  </header>
  <main>
    <div class="body">
      <div class=".header">
        <h1 class="fw-bold"> Spending - Last 7 days </h1>
      </div>
      <div class="chartContainer">
        <div class="chart" id="chart"></div> 
      </div>
      <div class="values">
        <div class="amount">
          <p class="desc"> Total this month </p>
          <p class="money fw-bold fs-regular"> $478.33 </p>
        </div>
        <div class="changeof">
          <p class="money fw-bold">+2.4%</p>
          <p class="desc"> from last month </p>
        </div>
      </div>
    </div> 
  </main>
</div>
`
/*
const bar = document.querySelector('.yaxis');
const value = document.querySelector('.valueAmount');
bar.addEventListener("click", function (){
  value.classList.add('active');
  value.style.display ='block';
});*/
