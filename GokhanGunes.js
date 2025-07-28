(() => {
  const currentPath = window.location.pathname;
  if (currentPath !== '/') {
      console.log('Wrong Page.');
      return;
  }

  const PRODUCTS_URL = 'https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json';

  // Retrieve product data
  async function loadProductData() {
      const storedData = localStorage.getItem('productCache');
      // Check for cached data
      if (storedData) {
          return JSON.parse(storedData);
      }

      const apiResponse = await fetch(PRODUCTS_URL);
      const productList = await apiResponse.json();
      localStorage.setItem('productCache', JSON.stringify(productList));
      return productList;
  }

  // Manage favorites items (heart icon)
  function retrieveFavoritesFromStorage() {
      return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  function updateFavoritesStorage(favoritesItems) {
      localStorage.setItem('favorites', JSON.stringify(favoritesItems));
  }

  function updateFavoritesStatus(productIdentifier) {
      const favoritesItems = retrieveFavoritesFromStorage();
      const itemIndex = favoritesItems.indexOf(productIdentifier);

      if (itemIndex > -1) {
          favoritesItems.splice(itemIndex, 1); // Remove from favorites
      } else {
          favoritesItems.push(productIdentifier); // Add to favorites
      }

      updateFavoritesStorage(favoritesItems);
      return favoritesItems;
  }

  // CSS
  const buildCSS = () => {
      const css = `
    
    /* Mobile */
@media (max-width: 767px) {

  .carousel-title {
    font-size: 2.5rem !important;
    line-height: 2.7rem !important;
    font-weight: bold !important;
  }

  .carousel-wrapper {
      margin: 0px auto 0 auto !important;
    }

    .carousel-container {
      padding: 16px 0 20px 0 !important;
      max-width: 380px !important;
      margin: 0 auto !important;
      border-radius: 0 0 16px 16px !important;
      overflow-x: auto !important;
      overflow-y: hidden !important;

    }

    .carousel-track {
      gap: 12px !important;
      width: max-content !important;
      min-width: 100% !important;
      overflow-x: auto !important;
      overflow-y: hidden !important;
      margin: 0 !important;
      justify-content: flex-start !important;
      scroll-behavior: smooth !important;
      -webkit-overflow-scrolling: touch !important;
    }

    .carousel-card {
      min-width: 180px !important;
      max-width: 180px !important;
      flex: 0 0 180px !important;
      flex-shrink: 0 !important;
      border-radius: 8px !important;
      padding: 3rem !important;
    }

    .carousel-card img {
      width: 120px !important;
      height: 120px !important;
      margin-bottom: 6px !important;
    }

    .product-title {
      font-size: 9px !important;
      line-height: 11px !important;
      margin-bottom: 3px !important;
    }

    span.discount {
      font-size: 1.2rem !important;
      line-height: 1.6rem !important;
    }

    .add-to-cart {
      margin-top: 8px !important;
      padding: 6px 16px !important;
      font-size: 10px !important;
      line-height: 14px !important;
      border-radius: 20px !important;
    }
}

/* Tablet */
@media (min-width: 768px) {
  .banner-title {
    width: 720px !important;
  }

    .carousel-wrapper {
      width: 720px !important;
    }

    .carousel-container {
      width: 720px !important;
    }

    .carousel-track {
      gap: 12px !important;
      width: 720px !important;
    }

    .carousel-card {
      min-width: 354px !important;
      max-width: 354px !important;
      flex: 0 0 354px !important;
    }

    .carousel-card img {
      width: 170px !important;
      height: 170px !important;
      margin-bottom: 8px !important;
    }

    .carousel-arrow {
      display: flex !important;
      width: 36px !important;
      height: 36px !important;
    }
}



/* Desktop */
@media (min-width: 1280px) {
  .banner-title {
    width: 1180px !important;
  }


    .carousel-wrapper {
      width: 1180px !important;
    }

    .carousel-container {
      padding: 24px 0 32px 0 !important;
      width: 1180px !important;
    }

    .carousel-track {
      gap: 16px !important;
      width: 1180px !important;
    }

    .carousel-card {
      min-width: 283px !important;
      max-width: 283px !important;
      flex: 0 0 283px !important;
      padding: 4rem !important;
      }
}


/* Remaining CSS */      
    .banner-title {
      background: #FEF7EB;
      padding: 3rem 6rem;
      margin: 16px auto 0 auto;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      box-sizing: border-box;
    }
    
    
    .carousel-title {
      font-family: 'Quicksand', sans-serif;
      font-weight: bold;
      font-size: 3rem;
      line-height: 22px;
      color: #F28E00;
      margin: 0;
    }
    
    .carousel-wrapper {
      margin: 0 auto;
      position: relative;
      max-width: 1180px;
    }
   
    .main-carousel-wrapper {
      max-width: 100%;
      margin: 50px auto;
      z-index: -1; // ebebek'in 'Başa Dön' butonunu ezmemesi için
    }
    
    .carousel-container {
      background: #fff;
      border-radius: 0 0 16px 16px;
      box-shadow: 0 2px 16px #0001;
      padding: 16px 0 20px 0;
      box-sizing: border-box;
    }
    

      .carousel-track {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          scroll-behavior: smooth;
          align-items: stretch;
          scrollbar-width: none;
          -ms-overflow-style: none;
      }

      .carousel-track::-webkit-scrollbar {
          display: none;
      }
                          .carousel-card {
      background: #fff;
      border: 1px solid #ededed;
      border-radius: 8px;
      min-width: 140px;
      max-width: 140px;
      flex: 0 0 140px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding: 4rem;
      box-sizing: border-box;
    }
    

     .carousel-card:hover {
       box-shadow: 0 0 0 0 #00000030,
       inset 0 0 0 3px #f28e00;
       cursor: pointer;
     }

      .fav-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background: none;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease;
      }
      .fav-btn img {
          width: 40px !important;
          height: 40px !important;
          max-width: 40px !important;
          max-height: 40px !important;
          object-fit: contain;
      }
      .fav-btn:hover {
          transform: scale(1.1);
      }
      .carousel-card img {
          width: 100px;
          height: 100px;
          object-fit: contain;
          margin-bottom: 6px;
      }

      .product-title {
      font-family: 'Poppins', sans-serif;
      font-size: 1.2rem;
      line-height: 1.6rem;
      color: #7d7d7d;
      margin-bottom: 3px;
      text-align: left;
    }
    

    .product-title .brand {
      font-weight: bold;
    }
    .product-title .name {
      font-weight: 500;
    }
    .product-price {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      margin-bottom: 3px;
      text-align: left;
      width: 100%;
      min-height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .product-price .price-top {
      margin-bottom: 4px;
    }
    .product-price .original {
      text-decoration: line-through;
      color: #888;
      font-size: 13px;
      font-weight: 500;
    }
    .product-price .discount {
      color: #00a365 !important;
      font-size: 18px;
      font-weight: bold;
    }
    .product-price .interest {
      color: #ff0000 !important;
      font-size: 18px;
      font-weight: bold;
    }
    .product-price .price-main {
      font-size: 2.4rem;
      font-weight: 600;
      color: #7d7d7d;
    }
    
    .product-price .price-main.discount-price {
      color: #00a365 !important;
    }

    .product-price .price-main.interest-price {
      color: #ff0000 !important;
    }
    

  .add-to-cart {
      margin-top: 8px;
      background: #fff7ec;
      color: #f29209;
      border: none;
      border-radius: 20px;
      padding: 15px 20px;
      width: 100%;
      font-family: 'Poppins', sans-serif;
      font-weight: bold;
      font-size: 1.4rem !important;
      line-height: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .add-to-cart:hover {
      background: #f29209;
      color: #fff;
    }
      
    
    .carousel-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: #fef6eb;
      border: none;
      border-radius: 50%;
      box-shadow: 0 2px 8px #0001;
      width: 32px;
      height: 32px;
      cursor: pointer;
      z-index: 10;
      display: none;
      align-items: center;
      justify-content: center;
    }

    .carousel-arrow img {
      width: 20px;
      height: 20px;
    }
    .carousel-arrow.left {
      left: -55px;
    }
    .carousel-arrow.right {
      right: -55px;
    }

      `;

      const style = document.createElement('style');
      style.className = 'carousel-style';
      style.innerHTML = css;
      document.head.appendChild(style);
  };

  // Build carousel and product cards
  function buildCarousel(productData, favoritesItems) {
      buildCSS();

      // Main container structure
      const mainWrapper = document.createElement('div');
      const bannerTitle = document.createElement('div');
      const title = document.createElement('div');
      const wrapper = document.createElement('div');
      const container = document.createElement('div');
      const track = document.createElement('div');

      mainWrapper.className = 'main-carousel-wrapper';
      bannerTitle.className = 'banner-title';
      title.className = 'carousel-title';
      wrapper.className = 'carousel-wrapper';
      container.className = 'carousel-container';
      track.className = 'carousel-track';

      title.textContent = 'Beğenebileceğinizi düşündüklerimiz';
      bannerTitle.appendChild(title);

      // Product cards
      productData.forEach((product) => {
          const card = document.createElement('div');
          const favBtn = document.createElement('button');
          const img = document.createElement('img');
          const title = document.createElement('div');
          const price = document.createElement('div');
          const addBtn = document.createElement('button');

          card.className = 'carousel-card';
          favBtn.className = 'fav-btn';
          title.className = 'product-title';
          price.className = 'product-price';
          addBtn.className = 'add-to-cart';

          favBtn.innerHTML = `<img src="https://www.e-bebek.com/assets/svg/default-favorite.svg" alt="Favori" style="width: 24px; height: 24px;" />`;
          title.innerHTML = `<span class="brand">${product.brand}</span> - <span class="name">${product.name}</span>`;

          // Update button state based on favorites
          const updateButtonState = () => {
              if (favoritesItems.includes(product.id)) {
                  favBtn.innerHTML = `<img src="https://www.e-bebek.com/assets/svg/added-favorite.svg" alt="Favori" style="width: 40px; height: 40px;" />`;
                  favBtn.classList.add('filled');
              } else {
                  favBtn.innerHTML = `<img src="https://www.e-bebek.com/assets/svg/default-favorite.svg" alt="Favori" style="width: 24px; height: 24px;" />`;
                  favBtn.classList.remove('filled');
              }
          };
          
          // Set initial state
          updateButtonState();
          
          // Hover effects
          favBtn.addEventListener('mouseenter', () => {
              if (!favoritesItems.includes(product.id)) {
                  favBtn.innerHTML = `<img src="https://www.e-bebek.com/assets/svg/default-hover-favorite.svg" alt="Favori" style="width: 24px; height: 24px;" />`;
              }
          });
          
          favBtn.addEventListener('mouseleave', () => {
              updateButtonState();
          });
          
          // Favorites button
          favBtn.onclick = (e) => {
              e.stopPropagation();
              const updatedFavorites = updateFavoritesStatus(product.id);
              favoritesItems.length = 0;
              favoritesItems.push(...updatedFavorites);
              updateButtonState();
          };

          // Product image
          img.src = product.img;
          img.alt = product.name;

          // Price section
          if (product.price !== product.original_price) {
            if (product.price < product.original_price) {
              price.innerHTML = `
                  <div class="price-top">
                      <span class="original">${product.original_price.toFixed(2)} TL</span>
                      <span class="discount">${Math.round((1 - product.price / product.original_price) * 100)}%</span>
                  </div>
                  <div class="price-main discount-price">${product.price.toFixed(2)} TL</div>
              `;
            } else {
              price.innerHTML = `
                  <div class="price-top">
                      <span class="original">${product.original_price.toFixed(2)} TL</span>
                      <span class="interest">${Math.round((1 - product.price / product.original_price) * 100)}%</span>
                  </div>
                  <div class="price-main interest-price">${product.price.toFixed(2)} TL</div>
              `;
            }
          } else {
              price.innerHTML = `
                  <div class="price-main">${product.price.toFixed(2)} TL</div>
              `;
          }

          // Add to cart button
          addBtn.textContent = 'Sepete Ekle';
          addBtn.onclick = (e) => {
              e.stopPropagation();
              alert('Sepete eklendi!');
          };

          // Navigate to product detail
          card.onclick = () => {
              window.open(product.url, '_blank');
          };

          // Add elements to card then add to track
          card.appendChild(favBtn);
          card.appendChild(img);
          card.appendChild(title);
          card.appendChild(price);
          card.appendChild(addBtn);
          track.appendChild(card);
      });

      // Navigation buttons - responsive scroll distance
      const calculateScrollDistance = () => {
          const viewportWidth = window.innerWidth;
          if (viewportWidth < 768) return 264 + 12; // mobile: 2 items visible
          if (viewportWidth < 1280) return 310 + 16; // desktop: 3 items visible
          return 283 + 16; // large desktop: 4 items visible
      };

      const leftArrow = document.createElement('button');
      const rightArrow = document.createElement('button');

      leftArrow.className = 'carousel-arrow left';
      rightArrow.className = 'carousel-arrow right';

      leftArrow.innerHTML = '<img src="https://cdn06.e-bebek.com/assets/svg/prev.svg" alt="Önceki" />';
      rightArrow.innerHTML = '<img src="https://cdn06.e-bebek.com/assets/svg/next.svg" alt="Sonraki" />';

      leftArrow.onclick = () => {
          track.scrollBy({ left: -calculateScrollDistance(), behavior: 'smooth' });
      };
      rightArrow.onclick = () => {
          track.scrollBy({ left: calculateScrollDistance(), behavior: 'smooth' });
      };

      container.appendChild(track);
      wrapper.appendChild(container);
      wrapper.appendChild(leftArrow);
      wrapper.appendChild(rightArrow);
    
      const targetContainer = document.querySelector(
        'cx-page-slot[position="Section2A"] eb-product-carousel > div.banner > div.container'
      );
      
      if (targetContainer) {
        mainWrapper.appendChild(bannerTitle);
        mainWrapper.appendChild(wrapper);
      
        targetContainer.insertBefore(mainWrapper, targetContainer.firstChild);
      } else {
        console.log("Failed to find the target container.");
      }
      
      console.log('Product slider successfully added.');
  }

  // Initialize application
  async function init() {
      // Check for existing carousel and remove if present
      const existingCarousel = document.querySelector('.carousel-inserted');
      if (existingCarousel) {
          existingCarousel.remove();
      }

      const productData = await loadProductData();
      const favoritesItems = retrieveFavoritesFromStorage();
      buildCarousel(productData, favoritesItems);
  }

  init();
})();
