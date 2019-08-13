"use strict"

class GeoloniaControl {
  onAdd() {
    this.container = document.createElement('div')
    this.container.className = 'mapboxgl-ctrl'

    const img = document.createElement('img')
    img.src = 'https://geolonia.github.io/logo/geolonia-symbol_1.png'
    img.style.width = '16px'
    img.style.height = '16px'
    img.style.display = 'block'
    img.style.cursor = 'pointer'
    img.alt = "Geolonia"

    const link = document.createElement('a')
    link.href = "https://geolonia.com/"
    link.appendChild(img)
    link.title = "柔軟で自由度の高い位置情報ホスティング"

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
