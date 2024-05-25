import{a as d,S as m,i as l}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="43985824-437e417885fe4ca625fa28e08",h=15;d.defaults.baseURL="https://pixabay.com/api/";async function g(r,s){return(await d({params:{key:y,q:r,image_type:"photo",safesearch:!0,page:s,per_page:h}})).data}function L(r){return r.map(({webformatURL:s,largeImageURL:i,tags:a,likes:e,views:t,comments:o,downloads:f})=>`<li class="item-results">
        	<a href="${i}" class="gallery-link">
            <img src="${s}" alt="${a}" class="gallery-img"/>
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
                <p class="text-info">${o}</p>
            </li>
            <li class="item-info">
                <p class="headline-info">Downloads</p>
                <p class="text-info">${f}</p>
            </li>
            </ul>
          </div>
        </li>`).join("")}const S=document.querySelector(".search-input"),c=document.querySelector(".gallery"),p=document.querySelector(".loader"),n=document.querySelector(".form");document.querySelector("load-more");let u="",b=1;const q=new m(".gallery a",{captionsData:"alt",captionDelay:250});n.addEventListener("submit",v);async function v(r){if(r.preventDefault(),u=S.value.trim(),u===""){l.error({message:"Input field can not be empty",position:"topRight",displayMode:2}),n.reset(),c.innerHTML="";return}p.classList.remove("is-hidden");try{const{hits:s,total:i}=await g(u,b);if(i===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"topRight",displayMode:2}),p.classList.add("is-hidden"),c.innerHTML="",n.reset();return}c.innerHTML=L(s),q.refresh()}catch(s){l.error({message:`${s}`})}n.reset(),p.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
