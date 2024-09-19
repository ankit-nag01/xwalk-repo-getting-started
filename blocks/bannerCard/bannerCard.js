export default function decorate(block) {
    const[
      imageEl,
      titleEl,
      descriptionEl
    ] = block.children

    const imageElement = imageEl.querySelector('img');
    const imageBanner = imageElement?.getAttribute('src')?.trim() || "";

    const imageTitle = titleEl?.textContent?.trim() || "";
    const descriptionElement = descriptionEl?.trim() || "";

  const BannerHTML = `
  <div class="bannerCard-container">

        <div class="bannerCard-title">
        <img src="${imageBanner}" alt="${imageAlt}">
        ${imageTitle}
        ${descriptionElement}
        </div>
        
</div>
  `;

  block.innerHTML = BannerHTML;
}
