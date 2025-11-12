// Halloween
function aktiverHaloween() {
  const today = new Date();

  // Halloween er 31. oktober -> month 9 (0-indeksert)
  if (today.getDate() === 31 && today.getMonth() === 9) {
    const bgvideo = document.getElementById('bgvideo'); // <video id="bgvideo" class="bgvideo">
    const teamSwitch = document.getElementById('teamSwitch');

    // Skjul alle juleelementer
    const julImgs = document.querySelectorAll('.julenisse, .pressanger, .juleTre');
    julImgs.forEach(img => img.style.setProperty('display', 'none', 'important'));
    const julContainer = document.querySelector('.julenisseDiv');
    if (julContainer) julContainer.style.setProperty('display', 'none', 'important');

    // Skjul bakgrunnsvideoen på halloween
    if (bgvideo) {
      bgvideo.classList.remove('jul');
      bgvideo.style.setProperty('display', 'none', 'important');
      console.log('HALLOWEEN: bgvideo skjult');
    }

    // Legg til/ta bort klasser for Haloween
    document.body.classList.add('moonHaloween', 'gråbakgrunn');
    document.body.classList.remove('jul', 'moon');
    if (teamSwitch) teamSwitch.style.display = 'none';

    // Skjul ikoner som ikke skal vises
    const icons = document.getElementsByClassName('iconzize');
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.display = 'none';
    }

    // Vis eventuelle Haloween-bilder
    const moonHaloweenImgs = document.querySelectorAll('.moonHaloweenImg');
    moonHaloweenImgs.forEach(img => img.style.setProperty('display', 'block', 'important'));

    console.log('Det er Haloween!');
  }
}

export { aktiverHaloween };