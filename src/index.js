"use strict"

class GeoloniaControl {
  onAdd() {
    this.container = document.createElement('div')
    this.container.className = 'maplibregl-ctrl'

    const img = document.createElement('img')
    img.src = 'https://cdn.geolonia.com/logo/geolonia-symbol_1.png'
    img.style.width = '16px'
    img.style.height = '16px'
    img.style.display = 'block'
    img.style.cursor = 'pointer'
    img.style.padding = '0'
    img.style.margin = '0'
    img.style.border = 'none'
    img.alt = "Geolonia"

    const link = document.createElement('a')
    link.href = "https://geolonia.com/"
    link.appendChild(img)
    link.title = "Powered by Geolonia"

    this.container.appendChild(link)

    return this.container;
  }

  onRemove() {
    this.container.parentNode.removeChild(this.container)
  }

  getDefaultPosition() {
    return 'bottom-left'
  }
}

export default GeoloniaControl;
