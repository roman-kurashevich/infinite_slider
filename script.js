const slider = document.querySelector('.partners-container');

slider.scrollLeft = 1;

const element = document.querySelector('.partner-preview');
const elementWidth = parseInt(window.getComputedStyle(element,null).getPropertyValue("width"));

slider.addEventListener('scroll', function(ev) {
  let items = this.querySelectorAll('.partner-preview');

  if (parseInt(this.scrollLeft) == 0) {
    this.scrollLeft = items[items.length - 1].clientWidth;
    this.prepend(items[items.length - 1]);
    this.scrollLeft = elementWidth;
    
  } else if (this.scrollLeft > this.scrollWidth - this.clientWidth - 1) {
    this.append(items[0]);
    this.scrollLeft -= elementWidth;
  }

  return false;
});
