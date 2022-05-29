const overlay = document.getElementById("product-shape");
function changeColor(picker) {
  overlay.style.fill = picker.toHEXString();
}
const svg = document.getElementById("product-svg");
const img = document.getElementById("background-image");
const container = document.getElementById("container");
window.onresize = () => simulateCover(container, svg, img, 1920, 1280);
simulateCover(container, svg, img, 1920, 1280);
function simulateCover(parent, child, image, x, y) {
  let { width, height } = parent.getBoundingClientRect();
  let yPercentage = x / y;
  let xPercentage = y / x;
  parent.setAttribute("style", "position: relative; overflow: hidden;");
  child.setAttribute(
    "style",
    "display: block; position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%)"
  );
  image.setAttribute(
    "style",
    "display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)"
  );
  if (width < height * yPercentage) {
    child.style.width = height * yPercentage + "px";
    child.style.height = height + "px";
    image.style.width = height * yPercentage + "px";
    image.style.height = height + "px";
  } else {
    child.style.width = width + "px";
    child.style.height = width * xPercentage + "px";
    image.style.width = width + "px";
    image.style.height = width * xPercentage + "px";
  }
}
var picker = $("#color-picker"),
  path = $("#product-shape");
picker.on("change", function () {
  path.css("fill", $(this).val());
  //   console.log($(this).val());
});
