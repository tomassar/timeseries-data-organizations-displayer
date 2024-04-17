// src/components/Map.tsx
import L, { LatLngExpression } from "leaflet";
import React from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
 polygon: string; // GeoJSON string representing the polygon
}

interface GeoJsonPolygon {
  type: "Polygon";
  coordinates: number[][][];
}

const Map: React.FC<MapProps> = ({ polygon }) => {
  function createGeoJsonPolygon(polygonString: string): GeoJsonPolygon {
    const cleanedString = polygonString.replace('|', ';');

    const coordinatePairs = cleanedString.split(';');
    const coordinates = coordinatePairs.map(pair => {
       const [lon, lat] = pair.split(',').map(Number);
       if (isNaN(lon) || isNaN(lat)) {
          console.log("lon", lon, "lat", lat)
         throw new Error('Invalid coordinate pair');
       }
       return [lon, lat];
    });
   
    const geoJson: GeoJsonPolygon = {
       type: "Polygon",
       coordinates: [[...coordinates, coordinates[0]]] // Close the polygon by repeating the first coordinate
    };

    console.log(geoJson)
   
    return geoJson;
   }

 const geoJson = createGeoJsonPolygon(polygon);
 //first coordinate
 const position: LatLngExpression = [geoJson.coordinates[0][0][1], geoJson.coordinates[0][0][0]];
 const positions: LatLngExpression[] = geoJson.coordinates[0].map(coord => [coord[1], coord[0]]);
  
 return (
    <MapContainer center={position} zoom={13} style={{ height: "70vh", width: "70%", marginBottom: "2rem" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polygon positions={positions} />
    </MapContainer>
 );
};

export default Map;
