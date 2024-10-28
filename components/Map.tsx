"use client";

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
}

export default function Map({ center }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: 'AIzaSyDN78X5xivHqhyTpwf0VX66vIdS2FCzo4I',
        version: 'weekly',
      });

      try {
        const { Map } = await loader.importLibrary('maps');
        
        const mapOptions = {
          center,
          zoom: 15,
          disableDefaultUI: true,
          styles: [
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#a2daf2' }],
            },
            {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }],
            },
          ],
        };

        const map = new Map(mapRef.current!, mapOptions);

        // Add marker
        new google.maps.Marker({
          position: center,
          map,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#FF0000',
            fillOpacity: 1,
            strokeWeight: 0,
          },
        });
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, [center]);

  return <div ref={mapRef} className="w-full h-full" />;
}