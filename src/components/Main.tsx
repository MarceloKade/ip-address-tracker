import React from 'react';
import Leaflet from './Leaflet';

interface MainProps {
    location?: {
        lat: number;
        lng: number;
    };
}

export default function Main({ location }: MainProps) {
    if (!location || !location.lat || !location.lng) {
        return <div>Localização inválida</div>;
    }

    return (
        <main>
            <Leaflet location={location} />
        </main>
    );
}
