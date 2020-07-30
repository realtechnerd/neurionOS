const notepadapp = document.getElementById("notepadapp");
const notepadframe = document.getElementById("notepadframe");
const notepadicon = document.getElementById("notepad");

function openNotePad() {
  $(notepad).addClass("active");
  openFrameApp(notepadapp, 400, 700, notepadframe);
}
function maxNotePadApp() {
  maximizeFrameApp(notepadapp, notepadframe);
}
function closeNotePadApp() {
  $(notepad).removeClass("active")
  closeApp(notepadapp);
}