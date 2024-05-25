import{a as m,S as b,i as p}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const v="43985824-437e417885fe4ca625fa28e08",S=15;m.defaults.baseURL="https://pixabay.com/api/";async function h(r,t){return(await m({params:{key:v,q:r,image_type:"photo",safesearch:!0,page:t,orientation:"horizontal",per_page:S}})).data}function y(r){return r.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:s,comments:a,downloads:L})=>`<li class="item-results">
        	<a href="${o}" class="gallery-link">
            <img src="${t}" alt="${i}" class="gallery-img"/>
        	</a>
        	<div class="wrap-info">
            <ul class="list-info">
              <li class="item-info">
                <p class="headline-info">Likes</p>
                <p class="text-info">${e}</p>
              </li>
              <li class="item-info">
                <p class="headline-info">Views</p>
                <p class="text-info">${s}</p>
            </li>
            <li class="item-info">
                <p class="headline-info">Comments</p>
                <p class="text-info">${a}</p>
            </li>
            <li class="item-info">
                <p class="headline-info">Downloads</p>
                <p class="text-info">${L}</p>
            </li>
            </ul>
          </div>
        </li>`).join("")}const g=document.querySelector(".search-input"),n=document.querySelector(".gallery"),l=document.querySelector(".loader"),c=document.querySelector(".form"),f=document.querySelector(".load-more");let u="",d=1;const w=new b(".gallery a",{captionsData:"alt",captionDelay:250});c.addEventListener("submit",M);async function M(r){if(r.preventDefault(),d=1,u=g.value.trim(),f.classList.add("hidden"),u===""){p.error({message:"Input field can not be empty",position:"topRight",displayMode:2}),c.reset(),n.innerHTML="";return}l.classList.remove("hidden");try{const{hits:t,total:o,totalHits:i}=await h(u,d);if(o)o>15&&f.classList.remove("hidden");else{p.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"topRight",displayMode:2}),l.classList.add("hidden"),n.innerHTML="",c.reset();return}n.innerHTML=y(t),w.refresh()}catch(t){p.error({message:`${t}`})}c.reset(),l.classList.add("hidden")}const q=async r=>{try{d+=1,l.classList.remove("hidden");const{hits:t}=await h(g,d);n.insertAdjacentHTML("beforeend",y(t))}catch(t){console.log(t)}};f.addEventListener("click",q);
//# sourceMappingURL=commonHelpers.js.map
