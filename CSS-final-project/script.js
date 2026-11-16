// Hover chuột hoặc focus bàn phím: hiển thị ảnh lên khung lớn
function upDate(previewPic) {
  console.log("upDate chạy");
  console.log("alt: " + previewPic.alt);
  console.log("src: " + previewPic.src);

  var preview = document.getElementById("image");
  preview.textContent = previewPic.alt;
  preview.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Rời chuột hoặc blur: trả khung về trạng thái ban đầu
function unDo() {
  console.log("unDo chạy");

  var preview = document.getElementById("image");
  preview.style.backgroundImage = "url('')";
  preview.textContent = "Hover over an image below to display here.";
}

// Chạy khi trang tải xong: thêm tabindex cho mọi figure để Tab vào được
function addTabindex() {
  console.log("addTabindex chạy");

  var figs = document.getElementsByTagName("figure");
  for (var i = 0; i < figs.length; i++) {
    figs[i].setAttribute("tabindex", "0");
  }
}
