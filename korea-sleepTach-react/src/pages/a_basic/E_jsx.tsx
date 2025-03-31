// E_JSX.tsx

import React from 'react'

function E_jsx() {
  // https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png

  const cat = {
    catUrl: 'https://cdn.pixabay.com/photo/',
    description: '2016/03/28/12/35/',
    imageId: 'cat-1285634_1280.png',
    name: '아기고양이',
    imageTheme: {
      width: '200px',
      height: '150x'
    },
    theme: {
      backgroundColor: 'black',
      color: 'white'
    }
  }


  return (
    <>
      <div style={cat.theme}>
        <p>{cat.name}'s Picture</p>
        <img src={cat.catUrl + cat.description + cat.imageId} alt={cat.name} width={cat.imageTheme.width} height={cat.imageTheme.height}/>
      </div>
    </>
  )
}

export default E_jsx