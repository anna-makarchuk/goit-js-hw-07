import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);
const markup = markupImg(galleryItems);


gallery.addEventListener('click',onImgContainerClick)

function markupImg(galleryItems) {
    return galleryItems.map(({ preview,original, description }) => {
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt=" ${description}"
    />
  </a>
</li>
        `;
    }).join('');
};
gallery.insertAdjacentHTML('beforeend', markup);


// function onImgContainerClick(event) {
//     event.preventDefault();
//     for (let i = 0; i < galleryItems.length; i++) {
//        if (event.target.getAttribute('src') === galleryItems[i].preview) {
//             const instance = basicLightbox.create(
//             ` <img src="${galleryItems[i].original}" width="800" height="600"> `
//         );
//            instance.show();
//            document.body.addEventListener('keydown',(e)=> {
//     if (e.code === 'Escape') {
//       instance.close();
  
//     }

//   });

//        }
//     }
// };



function onImgContainerClick(event) {
    event.preventDefault();
    for (let i = 0; i < galleryItems.length; i++) {
       if (event.target.getAttribute('src') === galleryItems[i].preview) {
            const instance = basicLightbox.create(
            ` <img src="${galleryItems[i].original}" width="800" height="600"> `
        );
           instance.show();
           document.body.addEventListener('keydown',(e)=> {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
        document.body.removeEventListener('keydown',(e)=> {
    if (e.code === 'Escape') {
      instance.close();
    }

  });
         
       }
    }
};

