
function upDate(previewPic) {
  console.log("upDate chạy");
  console.log("alt: " + previewPic.alt);
  console.log("src: " + previewPic.src);

  var preview = document.getElementById("image");
  preview.textContent = previewPic.alt;
  preview.style.backgroundImage = "url('" + previewPic.src + "')";
}


function unDo() {
  console.log("unDo chạy");

  var preview = document.getElementById("image");
  preview.style.backgroundImage = "url('')";
  preview.textContent = "Hover over an image below to display here.";
}


function addTabindex() {
  console.log("addTabindex chạy");

  var figs = document.getElementsByTagName("figure");
  for (var i = 0; i < figs.length; i++) {
    figs[i].setAttribute("tabindex", "0");
  }
}
