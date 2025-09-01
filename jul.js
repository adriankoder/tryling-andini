
function jul() {
const today = new Date(); // Legg til denne linjen før du bruker today

const bgvideo = document.getElementById('bgvideo');
if (today.getDate() === 1 && today.getMonth() === 8) {
  document.body.classList.add('jul');
  document.body.classList.remove('moon');
  bgvideo.classList.remove('ikkeJul'); // Vis videoen
  // Ikke fjern bgvideo-klassen!
  console.log("Det er julaften!");
} else {
  document.body.classList.add('moon');
  document.body.classList.remove('jul');
  bgvideo.classList.add('ikkeJul'); // Skjul videoen
  // Ikke fjern bgvideo-klassen!
}}
export { jul };