"use strict"

const TileCloudControl = function() {}

TileCloudControl.prototype.onAdd = (map) => {
  this.container = document.createElement('div')

  const link = document.createElement('a')
  link.href = 'https://tilecloud.io/'

  const img = document.createElement('img')
  img.src = 'https://tilecloud.github.io/logo/tilecloud-256x60.png'

  this.container.appendChild(link)
  link.appendChild(img)

  return this.container;
}

TileCloudControl.prototype.onRemove = () => {
  this.container.parentNode.removeChild(this.container)
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = TileCloudControl;
} else {
  window.TileCloudControl = TileCloudControl;
}
