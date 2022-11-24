(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const c=921.48;async function i(){fetch("data.json").then(o=>o.json()).then(o=>{const n=o.map(t=>`
      <div class="items"> 
        <p class="xaxis">${t.day}</p> 
        <div class="yaxis" style="height:calc((${t.amount}rem/2))"></div> 
        <p class="valueAmount" id="${t.amount}">$${t.amount}</p>  
      </div>`).join("");document.querySelector("#chart").insertAdjacentHTML("afterbegin",n)}).catch(o=>{console.log(o)})}i();async function l(){const n=new Date().getDay(),t=["mon","tues","wed","thurs","fri","sat","sun"];for(let a=0;a<t.length;a++)if(n+1===t[a]+1){console.log(t[a]);const e=document.querySelector(".yaxis");e.style.backgroundColor="--color-primary-cyan"}}l();document.querySelector("#app").innerHTML=`
<div class="container">
  <header>
    <div class="balance-container">
      <p class="fw-regular"> My balance </p>
      <p class=" fs-regular fw-bold"> $${c}</p>
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
`;
