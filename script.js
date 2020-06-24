'use strict';

const DomElement = function (height, width, bg, position) {
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.position = position;
};

DomElement.prototype.createBlock = function () {
  let block = document.createElement('div');
  let thisMy = this;

  this.left = 0;
  this.top = 0;

  const changeStyle = function () {
    block.style.cssText = `
    height: ${thisMy.height};
    width: ${thisMy.width};
    background: ${thisMy.bg};
    font-size: ${thisMy.fontSize};
    position: ${thisMy.position};
    left: ${thisMy.left}px;
    top: ${thisMy.top}px;
  `;
  };

  document.addEventListener('keydown', (event) => {

    const bodyWidth = document.body.scrollWidth;
    const bodyHeight = document.body.scrollHeight;

    if (event.key === 'ArrowLeft') {
      if (this.left !== 0) this.left -= 10;
      changeStyle();
    }

    if (event.key === 'ArrowRight') {
      if (this.left < bodyWidth - 100) this.left += 10;
      changeStyle();
    }

    if (event.key === 'ArrowUp') {
      if (this.top !== 0) this.top -= 10;
      changeStyle();
    }

    if (event.key === 'ArrowDown') {
      if (this.top < bodyHeight - 110) this.top += 10;
      changeStyle();
    }
  });

  changeStyle();

  document.body.prepend(block);
};

const domElement = new DomElement('100px', '100px', '#78eb8a', 'absolute');
document.addEventListener('DOMContentLoaded', domElement.createBlock());


