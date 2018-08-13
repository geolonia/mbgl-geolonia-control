"use strict"

const TileCloudControl = function() {}

TileCloudControl.prototype.onAdd = (map) => {
  this.container = document.createElement('div')

  const styles = {
    width: "128px",
    height: "auto",
    cursor: "pointer",
    marginLeft: "10px",
  }

  for (var style in styles) {
    this.container.style[style] = styles[style]
  }

  const img = document.createElement('img')
  img.src = 'https://tilecloud.github.io/logo/tilecloud-256x60.png'

  this.container.appendChild(img)

  this.container.on('click', () => {
    location.href = "https://tilecloud.io/"
  })

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
