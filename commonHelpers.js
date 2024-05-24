import{S as d,i as a}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="43985824-437e417885fe4ca625fa28e08",m="https://pixabay.com/api/";function h(i){const r=new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${r}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function y(i){return i.map(({webformatURL:r,largeImageURL:s,tags:n,likes:e,views:t,comments:o,downloads:f})=>`<li class="item-results">
        	<a href="${s}" class="gallery-link">
            <img src="${r}" alt="${n}" class="gallery-img"/>
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
        </li>`).join("")}const l=document.querySelector(".search-input"),c=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=document.querySelector(".form");document.querySelector("load-more");const L=new d(".gallery a",{captionsData:"alt",captionDelay:250});g.addEventListener("submit",S);function S(i){i.preventDefault();const r=l.value.trim();if(r===""){a.error({message:"Input field can not be empty",position:"topRight",displayMode:2}),l.value="",c.innerHTML="";return}u.classList.remove("is-hidden"),h(r).then(s=>{if(s.total===0){a.show({message:'"Sorry, there are no images matching your search query. Please try again!"',color:"blue",position:"topRight",displayMode:2}),u.classList.add("is-hidden"),c.innerHTML="";return}c.innerHTML=y(s.hits),L.refresh()}).catch(s=>{a.error({message:`${s}`})}).finally(()=>{l.value="",u.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
