  // Halloween
  document.body.classList.add('moonHaloween');
    document.body.classList.add('gråbakgrunn');
  document.body.classList.add('moon');
  document.body.classList.remove('moon');
  document.body.classList.remove('jul');
  bgvideo.classList.remove('jul');
   const iconzize = document.getElementById('iconzize');
 const icons = document.getElementsByClassName('iconzize');
for (let i = 0; i < icons.length; i++) {
  icons[i].style.display = "none";
}
  document.style.iconzize = "display: none";
  console.log("Det er Haloween!");