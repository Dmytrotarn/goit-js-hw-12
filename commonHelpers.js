import{a as h,S as v,i as c}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const S="43985824-437e417885fe4ca625fa28e08",w=15;h.defaults.baseURL="https://pixabay.com/api/";async function g(r,t){return(await h({params:{key:S,q:r,image_type:"photo",safesearch:!0,page:t,orientation:"horizontal",per_page:w}})).data}function y(r){return r.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:s,comments:a,downloads:b})=>`<li class="item-results">
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
                <p class="text-info">${b}</p>
            </li>
            </ul>
          </div>
        </li>`).join("")}const M=document.querySelector(".search-input"),d=document.querySelector(".gallery"),n=document.querySelector(".loader"),u=document.querySelector(".form"),f=document.querySelector(".load-more");let p="",l=1;const $=15;let m;const L=new v(".gallery a",{captionsData:"alt",captionDelay:250});u.addEventListener("submit",q);async function q(r){if(r.preventDefault(),l=1,p=M.value.trim(),f.classList.add("hidden"),p===""){c.error({message:"Input field can not be empty",position:"topRight",displayMode:2}),u.reset(),d.innerHTML="";return}n.classList.remove("hidden");try{const{hits:t,total:o,totalHits:i}=await g(p,l);if(!o){c.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"topRight",displayMode:2}),n.classList.add("hidden"),d.innerHTML="",u.reset();return}d.innerHTML=y(t),L.refresh(),m=Math.ceil(i/$),m>1&&f.classList.remove("hidden")}catch(t){c.error({message:`${t}`})}u.reset(),n.classList.add("hidden")}const P=()=>{const o=document.querySelector(".item-results").getBoundingClientRect().height*2;console.log(o),window.scrollBy({top:o,behavior:"smooth"})},x=async r=>{n.classList.remove("hidden");try{l+=1;const{hits:t}=await g(p,l);d.insertAdjacentHTML("beforeend",y(t)),P(),L.refresh(),l>m&&f.classList.add("hidden"),n.classList.add("hidden")}catch(t){c.error({message:`${t}`})}};f.addEventListener("click",x);
//# sourceMappingURL=commonHelpers.js.map
