import"./assets/common-654ab6cb.js";import{S as e}from"./assets/vendor-55e4299e.js";const g=[{preview:"../img/g-01-optimized.jpg",original:"../img/g-01-optimized.jpg",description:""},{preview:"../img/g-02-optimized.jpg",original:"../img/g-02-optimized.jpg",description:""},{preview:"../img/g-03-optimized.jpg",original:"../img/g-03-optimized.jpg",description:""},{preview:"../img/g-04-optimized.jpg",original:"../img/g-04-optimized.jpg",description:""},{preview:"../img/g-05-optimized.jpg",original:"../img/g-05-optimized.jpg",description:""},{preview:"../img/g-06-optimized.jpg",original:"../img/g-06-optimized.jpg",description:""},{preview:"../img/g-07-optimized.jpg",original:"../img/g-07-optimized.jpg",description:""},{preview:"../img/g-08-optimized.jpg",original:"../img/g-08-optimized.jpg",description:""},{preview:"../img/g-09-optimized.jpg",original:"../img/g-09-optimized.jpg",description:""}],p=document.querySelector(".gallery"),o=g.map(i=>`<li class="gallery__item">
  <a class="gallery__link" href="${i.original}">
     <img class="gallery__image" src="${i.preview}" alt="${i.description}" />
  </a>
</li>`).join("");p.insertAdjacentHTML("beforeend",o);new e(".gallery a",{captionsData:"alt",captionDelay:250,closeText:"",navText:["",""]});
//# sourceMappingURL=commonHelpers.js.map
