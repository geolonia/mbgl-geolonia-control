"use strict"

class TileCloudControl {
  onAdd() {
    this.container = document.createElement('div')
    this.container.className = 'mapboxgl-ctrl'

    const img = document.createElement('img')
    img.src = 'https://tilecloud.github.io/logo/tilecloud-map-icon.png'
    img.style.maxWidth = '100%'
    img.style.display = 'block'
    img.style.cursor = 'pointer'

    this.container.appendChild(img)

    img.addEventListener('click', () => {
      window.location.href = "https://tilecloud.io/"
    })

    return this.container;
  }

  onRemove() {
    this.container.parentNode.removeChild(this.container)
  }

  getDefaultPosition() {
    return 'bottom-left'
  }
}

export default TileCloudControl;
