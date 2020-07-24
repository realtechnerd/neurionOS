const notepadapp = document.getElementById("notepadapp");
const notepadframe = document.getElementById("notepadframe");

function toggleNotePad() {
  openApp(notepadapp, 400, 700, notepadframe);
}
function maxNotePadApp() {
  document.getElementById("#notepad").classList.toggle("active");
  maximizeApp(notepadapp);
}