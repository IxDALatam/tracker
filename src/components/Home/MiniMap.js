import React, { useEffect } from 'react';

import 'ol/ol.css'
import {Map, View} from 'ol'
import { fromLonLat } from 'ol/proj'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

import './mini-map.sass'

/**
 * API docs: 
 * 
 * https://openlayers.org/en/latest/apidoc/
 * 
 * https://openlayers.org/en/latest/doc/quickstart.html
 */

export default function () {
  
  useEffect(() => {
    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([-51.92528, -14.235004]),
        zoom: 4
      })
    })
  }, [])

  return (
    <div id='map' className='map-container'>
      
    </div>
  )
}