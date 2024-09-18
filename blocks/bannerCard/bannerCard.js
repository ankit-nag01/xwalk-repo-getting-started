export default function decorate(block) {
  function getBannerCard(){
    const[
      imageEl,
      imageAltEl,
      titleEl,
      descriptionEl
    ] = block.children

    const imageElement = imageEl.querySelector('img');
    const imageBanner = imageElement?.getAttribute('src')?.trim() || "";

    const imageAlt = imageAltEl?.textContent?.trim() || "";
    const imageTitle = titleEl?.textContent?.trim() || "";
    const imageDescription = descriptionEl?.textContent?.trim() || "";

    return{
      imageBanner,
      imageAlt,
      imageTitle,
      imageDescription
    };

  }

  const BannerContent = getBannerCard();

  const BannerHTML = `
  <div class="main-container">
  <div class="banner-container">
    <div class="banner-image">
    <img src="${BannerContent.imageBanner}" alt="${BannerContent.imageAlt}">
      <div class="banner-content">
        <div class="bannerCard-title">
        ${BannerContent.imageTitle}
        </div>
        <div class="bannerCard-description">
        ${BannerContent.imageDescription}
        </div>
      </div>
    </div>
  </div>
</div>
  `;

  block.innerHTML = BannerHTML;
}
