
function shutDownDialog() {
    document.getElementById("exampleModalLongTitle").innerHTML = "System";
    document.getElementById("dialog").innerHTML = "Are you sure you want to shut down your computer?";
    document.getElementById("option1msg").innerHTML = "No";
    document.getElementById("option2msg").innerHTML = "Yes";
    document.getElementById("option2").onclick = shutDown;
}
function shutDown() {
    window.close();
}
function restartDialog() {
    document.getElementById("dialog").innerHTML = "Are you sure you want to restart your computer?"
    document.getElementById("exampleModalLongTitle").innerHTML = "System";
    document.getElementById("option1msg").innerHTML = "No";
    document.getElementById("option2msg").innerHTML = "Yes";
    document.getElementById("option2").onclick = resTart;
}
function resTart() {
    document.getElementById("dialog").innerHTML = "Restarting..";
    window.location.replace("/loadingwebpage/");
}