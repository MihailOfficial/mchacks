window.onload = function displayList() {
  let entries = JSON.parse(localStorage.getItem("saved-sticker"));
  let html = "";
  var num = 0;
  for (i = 0; i < 9; i++) {
    const src = "/images/" + num;
    if (num % 3 == 0 && num != 0) {
      html +=
        '<tr><td><div class="polaroid"> <a href="#" title="Santorini"><img src="' +
        src +
        '.png" width="80px" title="Santorini"/></a></div></td>';
    } else if (num % 3 == 2 && num != 2) {
      html +=
        '<td><div class="polaroid"> <a href="#" title="Santorini"><img src="' +
        src +
        '.png" width="80px" title="Santorini"/></a></div></td></tr>';
    } else {
      html +=
        '<td><div class="polaroid"> <a href="#" title="Santorini"><img src="' +
        src +
        '.png" width="80px" title="Santorini"/></a></div></td>';
    }

    num += 1;
  }
  document.getElementById("guestview").innerHTML = html;
};