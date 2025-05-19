"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia3Jpc3RvZmY5OSIsImEiOiJjamdkZ3B5ZDAwN3oyMndtcnhuaDgxMHRtIn0._N2kBdzCJbZeokTcddWqDQ";

export default function MapOnly() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return; // zabráni duplikovaniu mapy

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/kristoff99/ckzr7qbah00j814nygy7s3b6j",
      center: [17.214357440596945, 48.13627023190635],
      zoom: 14,
    });

    mapRef.current = map;

    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
      "Dudvážska 2, 821 07 Bratislava"
    );

    new mapboxgl.Marker()
      .setLngLat([17.214357440596945, 48.13627023190635])
      .setPopup(popup)
      .addTo(map);

    map.scrollZoom.disable();

    return () => {
      map.remove(); // správne čistenie
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="map-container overflow-hidden relative w-full h-screen z-20"
    />
  );
}
