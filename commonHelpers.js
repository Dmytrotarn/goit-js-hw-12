import{a as d,S as p,i as n}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();d.defaults.baseURL="https://pixabay.com/api/";async function m(r){return(await d({params:{key:"43985824-437e417885fe4ca625fa28e08",q:r,image_type:"photo",safesearch:!0}})).data}function h(r){return r.map(({webformatURL:s,largeImageURL:i,tags:a,likes:e,views:t,comments:o,downloads:f})=>`<li class="item-results">
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
        </li>`).join("")}const l=document.querySelector(".search-input"),c=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=document.querySelector(".form");document.querySelector("load-more");const g=new p(".gallery a",{captionsData:"alt",captionDelay:250});y.addEventListener("submit",L);async function L(r){r.preventDefault();const s=l.value.trim();if(s===""){n.error({message:"Input field can not be empty",position:"topRight",displayMode:2}),l.value="",c.innerHTML="";return}u.classList.remove("is-hidden"),await m(s).then(i=>{if(i.total===0){n.show({message:'"Sorry, there are no images matching your search query. Please try again!"',color:"blue",position:"topRight",displayMode:2}),u.classList.add("is-hidden"),c.innerHTML="";return}c.innerHTML=h(i.hits),g.refresh()}).catch(i=>{n.error({message:`${i}`})}).finally(()=>{l.value="",u.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
