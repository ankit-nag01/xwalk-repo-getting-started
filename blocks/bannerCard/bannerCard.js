export default function decorate(block) {
    const[
      imageEl,
      titleEl
    ] = block.children

    const imageElement = imageEl.querySelector('img');
    const imageBanner = imageElement?.getAttribute('src')?.trim() || "";

    const imageTitle = titleEl?.textContent?.trim() || "";

  const BannerHTML = `
  <div class="main-container">

        <div class="bannerCard-title">
        <img src="${imageBanner}" alt="${imageAlt}">
        ${imageTitle}
        </div>
        
</div>
  `;

  block.innerHTML = BannerHTML;
}
