/*import croct from '@croct/plug';

croct.plug({
    appId: 'd37a2733-440d-4e6b-8f99-b0ba86ae2eb5'
});

croct.fetch('homepage-hero').then(({content}) => {
    const banner = document.getElementById('hero-banner');
    const title = banner.querySelector('h1');
    const subtitle = banner.querySelector('.subtitle');
    const cta = banner.querySelector('.cta');

    title.textContent = content.title;
    subtitle.textContent = content.subtitle;
    cta.textContent = content.cta.label;
    cta.href = content.cta.link;
});*/

import croct from '@croct/plug';

croct.plug({
    appId: 'd37a2733-440d-4e6b-8f99-b0ba86ae2eb5'
});

/*croct.fetch('homepage-hero').then(({ content }) => {
    const backgroundImage = document.getElementById('background-image'); 
    
    // Verifique se a URL da imagem está disponível no JSON
    if (content.backgroundImageUrl) {
      backgroundImage.style.backgroundImage = `url('${content.backgroundImageUrl}')`;
    }
    
    const banner = document.getElementById('hero-banner');
    const title = banner.querySelector('h1');
    const subtitle = banner.querySelector('.subtitle');
    const cta = banner.querySelector('.cta');
  
    title.textContent = content.title;
    subtitle.textContent = content.subtitle;
    cta.textContent = content.cta.label;
    cta.href = content.cta.link;
  });*/

  croct.fetch('homepage-hero').then(({ content }) => {
    const banner = document.getElementById('hero-banner');
    const title = banner.querySelector('h1');
    const subtitle = banner.querySelector('.subtitle');
    const cta = banner.querySelector('.cta');
    const backgroundImage = document.getElementById('background-image');
  
    // Verifique se a URL da imagem de fundo está disponível no JSON
   if (content.backgroundImageUrl) {
      // Substitua o marcador de posição pela URL real da imagem
      backgroundImage.style.backgroundImage = `url('${content.backgroundImageUrl}')`;
    }
  
    title.textContent = content.title;
    subtitle.textContent = content.subtitle;
    cta.textContent = content.cta.label;
    cta.href = content.cta.link;
  });

  
  