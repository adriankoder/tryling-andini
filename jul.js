function nåErDetJul() {
  // return true;

const today = new Date();
const bgvideo = document.getElementById('bgvideo');

if (today.getDate() === 3 && today.getMonth() === 8) {
  // Julaften
  document.body.classList.add('jul');
  document.body.classList.remove('moon');
  document.body.classList.remove('moonHaloween');
  bgvideo.classList.add('ikkeJul');
console.log("Det er julaften!");
// } else if (today.getDate() === 1 && today.getMonth() === 8) {

} else {
  // Standard: Moon-utgaven
  document.body.classList.remove('moonHaloween');
 // ...existing code...

}}
export { nåErDetJul }; 