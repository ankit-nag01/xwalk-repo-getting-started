export default function decorate(block) {
    const[
      imageEl,
      altTextEl,
      titleEl,
      descriptionEl
    ] = block.children

    const imageElement = imageEl.querySelector('img');
    const imageBanner = imageElement?.getAttribute('src')?.trim() || "";

    const imageAlt = altTextEl?.textContent?.trim() || "";
    const imageTitle = titleEl?.textContent?.trim() || "";
    const imageDescription = descriptionEl?.textContent?.trim() || "";


  const BannerHTML = `
  <div class="main-container">

        <div class="bannerCard-title">
        ${imageTitle}
        </div>
        
</div>
  `;

  block.innerHTML = BannerHTML;
}
