const notepadapp = document.getElementById("notepadapp");
const notepadframe = document.getElementById("notepadframe");

function toggleNotePad() {
  openApp(notepadapp, 400, 700, notepadframe);
  document.getElementById("#notepad").classList.toggle("active");
}
function maxNotePadApp() {
  maximizeApp(notepadapp);
}