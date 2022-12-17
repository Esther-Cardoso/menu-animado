const links = document.querySelectorAll('li');
const circle = document.querySelector('#circle');

for (link of links) {
  link.onclick = function () {
    for (link of links) {
      link.style.opacity = '1';
    }

    circle.style.left = 80 * this.value + 'px';
    circle.innerHTML = this.innerHTML;
    this.style.opacity = '0';
  };
}
