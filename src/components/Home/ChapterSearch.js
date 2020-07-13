import React from 'react'

import './chapter-search.sass'

const ChapterList = [
  { id: '1', chapterName: 'Florianópolis, Brazil' },
  { id: '2', chapterName: 'Belo Horizonte, Brazil' },
  { id: '3', chapterName: 'Brasília, Brazil' },
  { id: '4', chapterName: 'Criciúma, Brazil' },
  { id: '5', chapterName: 'Porto Alegre, Brazil' },
  { id: '6', chapterName: 'Vitória, Brazil' },
  { id: '7', chapterName: 'São Paulo, Brazil' },
  { id: '8', chapterName: 'Rio de Janeiro, Brazil' },
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