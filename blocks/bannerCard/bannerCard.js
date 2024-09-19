export default function decorate(block) {
    const[
      imageEl,
    ] = block.children

    const imageElement = imageEl.querySelector('img');
    const imageBanner = imageElement?.getAttribute('src')?.trim() || "";

  const BannerHTML = `
  <div class="main-container">

        <div class="bannerCard-title">
        <img src="${imageBanner}" alt="${imageAlt}">
        </div>
        
</div>
  `;

  block.innerHTML = BannerHTML;
}
