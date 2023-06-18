'use client'
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Location {
    lat: number;
    lng: number;
}

interface LeafletProps {
    location: Location;
}

export default function Leaflet({ location }: LeafletProps) {
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([location.lat, location.lng], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current);
        }

        const customIcon = L.icon({
            iconUrl: 'assets/img/icon-location.svg',
            iconSize: [26, 32],
            popupAnchor: [0, -16],
        });

        const marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(mapRef.current);

        const popupContent = `
            <div style="text-align: center;">
                <h2>Você está aqui!</h2>
            </div>
        `;

        marker.bindPopup(popupContent).openPopup();

        return () => {
            mapRef.current?.remove();
            mapRef.current = null;
        };
    }, [location]);

    return (
        <div id="map" className='absolute top-0 w-full h-screen -z-10' />
    );
}
