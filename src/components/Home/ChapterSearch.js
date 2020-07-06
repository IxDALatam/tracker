import React from 'react'

import './chapter-search.sass'

const ChapterList = [
  { id: '1', chapterName: 'Vitória/ES' },
  { id: '2', chapterName: 'São Paulo/SP' },
]

export default function () {
  return (
    <div className='chapter-search container'>
      <input type='text' className='search-input' placeholder='Input chapter name' />
      {
        ChapterList.map(chapter => <div className='chapter-search item' key={chapter.id}>{chapter.chapterName}</div>)
      }
    </div>
  )
}