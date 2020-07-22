function notePad() {
    name = 'Notepad';
  
    theapp.src = "/apps/notepad/index.html";
  
    $(theapp).height(400 - 34);
  
    $( appwindow ).width( 700 );
    
    $( appwindow ).height( 400 );
    
    $( appwindow ).toggle("size",350);
      
    $( appname ).html(name);
    
    $( "#notepad" ).toggleClass("activeapp");

    document.getElementById("close").onclick = closeNotePad;
    document.getElementById("maxmini").onclick = maxNotePad;
}
function closeNotePad() {
  $( appwindow ).hide("size",350);
  $( "#notepad" ).removeClass("activeapp");
}
function maxNotePad() {
  $(appwindow).css("height", $(document).height());
  maxFix(appwindow);
}