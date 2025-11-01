import{S as p,a as l,i as a}from"./assets/vendor-BXU5-F4Y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();let h=new p(".gallery a");const c=document.querySelector(".loader"),u=document.querySelector(".gallery");function y(){c.classList.remove("ishidden")}function g(){c.classList.add("ishidden")}function b(s){const o=s.map(({previewURL:r,largeImageURL:n,tags:e,likes:t,views:i,comments:d,downloads:m})=>`<li class="gallery-item">
                <a class="gallery-link" href="${n}">
                    <img class="gallery-image" src="${r}" alt="${e}" />
                    <div class="info">
                        <p><b>Likes:</b> ${t}</p>
                        <p><b>Views:</b> ${i}</p>
                        <p><b>Comments:</b> ${d}</p>
                        <p><b>Downloads:</b> ${m}</p>
                    </div>
                </a>
            </li>`).join("");u.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){u.innerHTML=""}const S="53036317-ecc3b65bfc32e98f0ebbd349e";l.defaults.baseURL="https://pixabay.com/api/";function q(s){return l("",{params:{key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>r)}const f=document.querySelector(".form");f.addEventListener("submit",v);function v(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(o===""){a.error({position:"topRight",message:"Please enter a search query!"});return}L(),y(),q(o).then(r=>{if(r.hits.length===0)return a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});b(r.hits),f.reset()}).catch(r=>{a.error({message:r.message,position:"topRight"})}).finally(()=>{g()})}
//# sourceMappingURL=index.js.map
