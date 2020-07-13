import React from 'react';
import './mini-map.sass'

export default function () {
  return (
    <div className='map-container'>
      <span
        style={{
          textDecoration: 'none',
          color: '#FFFFFF',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '16px',
          lineHeight: '100%',
      }}
      >Map not available</span>
    </div>
  )
}