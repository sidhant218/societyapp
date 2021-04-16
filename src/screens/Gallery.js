import React from 'react'
// import 'react-image-gallery/styles/scss/image-gallery.scss'

// import 'react-image-gallery/styles/css/image-gallery.css'

import ImageGallery from 'react-image-gallery'
import Navbar from '../components/Navbar'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

// const Gallery = () => {
//   return <ImageGallery items={images} />
// }

// class Gallery extends React.Component {
//   render() {
//     return <ImageGallery items={images} />
//   }
// }

function Gallery() {
  return (
    <div>
      <Navbar />
      return <ImageGallery items={images} />
    </div>
  )
}
export default Gallery
