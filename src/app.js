"use strict"

const TileCloudControl = function() {}

TileCloudControl.prototype.onAdd = () => {
  this.container = document.createElement('div')
  this.container.className = 'mapboxgl-ctrl'

  const styles = {
    width: "96px",
    height: "auto",
    cursor: "pointer",
    marginLeft: "10px",
    marginBottom: "10px",
  }

  for (const style in styles) {
    this.container.style[style] = styles[style]
  }

  const img = document.createElement('img')
  img.src = 'https://tilecloud.github.io/logo/tilecloud-256x60.png'
  img.style.maxWidth = '100%'
  img.style.display = 'block'

  this.container.appendChild(img)

  img.addEventListener('click', () => {
    window.location.href = "https://tilecloud.io/"
  })

  return this.container;
}

TileCloudControl.prototype.onRemove = () => {
  this.container.parentNode.removeChild(this.container)
}

TileCloudControl.prototype.getDefaultPosition = () => 'bottom-left'

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = TileCloudControl;
} else {
  window.TileCloudControl = TileCloudControl;
}
