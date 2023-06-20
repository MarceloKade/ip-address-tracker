'use client'
import React from 'react';
const LeafletComponent = React.lazy(() => import('./Leaflet'));

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
            {typeof window !== 'undefined' && (
                <React.Suspense fallback={<div>Loading...</div>}>
                    <LeafletComponent location={location} />
                </React.Suspense>
            )}
        </main>
    );
}
