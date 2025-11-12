// Jul
function nåErDetJul() {
  const today = new Date();

  // Jul er hele november for testing -> month 10 (0-indeksert)
  if (today.getDate() === 13 && today.getMonth() === 10) {

    const bgvideo = document.getElementById('bgvideo');
    const teamSwitch = document.getElementById('teamSwitch');
    
    // Vis hele julenisseDiv containeren først
    const julenisseDiv = document.querySelector('.julenisseDiv');
    if (julenisseDiv) {
      julenisseDiv.style.setProperty('display', 'flex', 'important');
    }
    
    // Vis alle julebilder
    const julenisseImgs = document.querySelectorAll('.julenisse, .pressanger, .juleTre');
    julenisseImgs.forEach(img => img.style.setProperty('display', 'block', 'important'));
    
    console.log('Jul aktivert! teamSwitch element:', teamSwitch);

    // Legg til/ta bort klasser for jul
    document.body.classList.add('jul');
    document.body.classList.remove('moon', 'moonHaloween', 'gråbakgrunn');
    document.body.classList.remove('julenisse');
    if (teamSwitch) {
      teamSwitch.style.setProperty('display', 'none', 'important');
      teamSwitch.classList.add('hidden');
      console.log('teamSwitch skulle være skjult nå');
    } else {
      console.log('FEIL: teamSwitch element ikke funnet!');
    }
    
    if (bgvideo) bgvideo.classList.add('Jul');

    // Skjul ikoner som ikke skal vises
    const icons = document.getElementsByClassName('iconzize');
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.display = 'none !important';
    }

    // Skjul Halloween-bilder
    const moonHaloweenImgs = document.querySelectorAll('.moonHaloweenImg');
    moonHaloweenImgs.forEach(img => (img.style.display = 'none'));

    console.log('Det er jul!');
  }
}

export { nåErDetJul };