'use strict';

const DomElement = function () {
  this.selector = '.block';
  this.height = '200px';
  this.width = '200px';
  this.bg = '#78eb8a';
  this.fontSize = '15px';
};

DomElement.prototype.createBlock = function () {
  let block = '';
  let wrapper = document.querySelector('.wrapper');

  if (this.selector[0] === '.') {
    block = document.createElement('div');
    block.classList.add(this.selector.slice(1));
  }

  if (this.selector[0] === '#') {
    block = document.createElement('p');
    block.id = this.selector.slice(1);
  }

  block.style.cssText = `
    height: ${this.height};
    width: ${this.width};
    background: ${this.bg};
    font-size: ${this.fontSize};
  `;

  block.textContent = 'внутрь созданного блока записывать любой текст. Метод записи может быть любым.';
  wrapper.prepend(block);
};


const domElement = new DomElement();

domElement.createBlock();
