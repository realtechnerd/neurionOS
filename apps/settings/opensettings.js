const settingsapp = document.getElementById("settingsapp");
const settingsicon = document.getElementById("settings");
const settingsbody = document.getElementById("settingsbody");

function openSettings() {
  $(settings).addClass("active");
  openApp(settingsapp, settingsbody, 700, 400);
}
function maxSettingsApp() {
  maximizeApp(settingsapp);
}
function closeSettingsApp() {
  $(settings).removeClass("active")
  closeApp(settingsapp);
}