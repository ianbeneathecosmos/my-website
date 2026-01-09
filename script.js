let activeWindow = null;
let offsetX = 0;
let offsetY = 0;

// Open window
function openWindow(id) {
  const win = document.getElementById(id);
  win.style.display = "block";
  win.style.zIndex = Date.now(); // bring to front
}

// Close window
function closeWindow(id) {
  document.getElementById(id).style.display = "none";
}

// Start dragging
document.addEventListener("mousedown", function (e) {
  if (e.target.classList.contains("title-bar")) {
    activeWindow = e.target.parentElement;
    offsetX = e.clientX - activeWindow.offsetLeft;
    offsetY = e.clientY - activeWindow.offsetTop;
  }
});

// Dragging movement
document.addEventListener("mousemove", function (e) {
  if (activeWindow) {
    activeWindow.style.left = e.clientX - offsetX + "px";
    activeWindow.style.top = e.clientY - offsetY + "px";
  }
});

// Stop dragging
document.addEventListener("mouseup", function () {
  activeWindow = null;
});
