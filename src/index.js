"use strict"

class TileCloudControl {
  onAdd() {
    this.container = document.createElement('div')
    this.container.className = 'mapboxgl-ctrl'

    const img = document.createElement('img')
    img.src = 'https://tilecloud.github.io/logo/tilecloud-256x256.png'
    img.style.width = '16px'
    img.style.height = '16px'
    img.style.display = 'block'
    img.style.cursor = 'pointer'
    img.alt = "TileCloud"

    const link = document.createElement('a')
    link.href = "https://tilecloud.io/"
    link.appendChild(img)
    link.title = "自由な地図のための地図専用ホスティングサービス"

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

export default TileCloudControl;
