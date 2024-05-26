import{a as h,S as v,i as n}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const w="43985824-437e417885fe4ca625fa28e08",S=15;h.defaults.baseURL="https://pixabay.com/api/";async function g(o,s){return(await h({params:{key:w,q:o,image_type:"photo",safesearch:!0,page:s,orientation:"horizontal",per_page:S}})).data}function y(o){return o.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:b})=>`<li class="item-results">
        	<a href="${r}" class="gallery-link">
            <img src="${s}" alt="${i}" class="gallery-img"/>
        	</a>
        	<div class="wrap-info">
            <ul class="list-info">
              <li class="item-info">
                <p class="headline-info">Likes</p>
                <p class="text-info">${e}</p>
              </li>
              <li class="item-info">
                <p class="headline-info">Views</p>
                <p class="text-info">${t}</p>
            </li>
            <li class="item-info">
                <p class="headline-info">Comments</p>
                <p class="text-info">${a}</p>
            </li>
            <li class="item-info">
                <p class="headline-info">Downloads</p>
                <p class="text-info">${b}</p>
            </li>
            </ul>
          </div>
        </li>`).join("")}const M=document.querySelector(".search-input"),d=document.querySelector(".gallery"),l=document.querySelector(".loader"),u=document.querySelector(".form"),f=document.querySelector(".load-more");let p="",c=1;const $=15;let m;const L=new v(".gallery a",{captionsData:"alt",captionDelay:250});u.addEventListener("submit",q);async function q(o){if(o.preventDefault(),c=1,p=M.value.trim(),f.classList.add("hidden"),p===""){n.error({message:"Input field can not be empty",position:"topRight",displayMode:2}),u.reset(),d.innerHTML="";return}l.classList.remove("hidden");try{const{hits:s,total:r,totalHits:i}=await g(p,c);if(!r){n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"topRight",displayMode:2}),l.classList.add("hidden"),d.innerHTML="",u.reset();return}d.innerHTML=y(s),L.refresh(),m=Math.ceil(i/$),m>1&&f.classList.remove("hidden")}catch(s){n.error({message:`${s}`})}u.reset(),l.classList.add("hidden")}const P=()=>{const r=document.querySelector(".item-results").getBoundingClientRect().height*2;console.log(r),window.scrollBy({top:r,behavior:"smooth"})},x=async()=>{l.classList.remove("hidden");try{c+=1;const{hits:o}=await g(p,c);d.insertAdjacentHTML("beforeend",y(o)),P(),L.refresh(),c>=m&&(f.classList.add("hidden"),n.show({message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight"})),l.classList.add("hidden")}catch(o){n.error({message:`${o}`})}};f.addEventListener("click",x);
//# sourceMappingURL=commonHelpers.js.map
