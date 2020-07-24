function notePad() {
    name = 'Notepad';
  
    $( appwindow ).width( 700 );
    
    $( appwindow ).height( 400 );
    
    $(theapp).css("height", $(appwindow).height());

    $( appwindow ).toggle(0);
      
    $( appname ).html(name);
    
    $( "#notepad" ).toggleClass("activeapp");

    document.getElementById("close").onclick = closeNotePad;

    document.getElementById("maxmini").onclick = maxNotePad;
}
function closeNotePad() {
  $( appwindow ).hide();
  $( "#notepad" ).removeClass("activeapp");
}
function maxNotePad() {
  $(appwindow).css("height", $(appwindow).height());
  appwindow.style.width = "100%";
  $(theapp).css("height", $(document).height());
  maxFix(appwindow);
}