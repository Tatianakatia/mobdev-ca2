import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Choose an Orphanage on the Map</h2>
          <p>Many children are waiting for your visit.</p>
        </header>

        <footer>
          <strong>Dublin</strong>
          <span>Ireland</span>
        </footer>
      </aside>

      <Map 
        center={[53.3443478,-6.2821507]}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />  */}
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
        } 
        /> 

        <Marker 
          icon={mapIcon}
          position={[53.3443478,-6.2821507]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Giraffe Childcare
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#FFF"/>
            </Link>
          </Popup> 
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage"> 
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;