import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MapaUbicacion = () => {
  const position = [-13.061733, -76.352500];
  const zoom = 13;

  useEffect(() => {
    // Este hook asegura que el mapa solo se inicialice una vez al montar el componente
    return () => {
      // Si hay alguna limpieza que hacer, se puede hacer aquí
    };
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <h2 className="fw-bold mb-3">Ubicación de Mi Tienda</h2>
          <p className="text-muted mb-4">
            Aquí puedes encontrar nuestra tienda. ¡Ven a visitarnos!
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <MapContainer 
            center={position} 
            zoom={zoom} 
            style={{ height: "400px", width: "100%" }}
            whenReady={() => { console.log('Mapa listo!'); }}
          >
            <Marker position={position}>
              <Popup>
                Mi Tienda está aquí.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapaUbicacion;
