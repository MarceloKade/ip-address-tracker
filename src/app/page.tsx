'use client'
import { useState } from 'react';
import Header from "@/components/Header";
import Main from "@/components/Main";
import { fetchLocationData, LocationData } from "../utils/api";

export default function Home() {
  const [locationData, setLocationData] = useState<LocationData | null>(null);

  const handleLocationData = async (ipAddress?: string) => {
    const data = await fetchLocationData(ipAddress);
    setLocationData(data);
  };

  return (
    <div className="bg-black text-slate-50">
      <Header onSearch={handleLocationData} />
      {locationData && (
        <Main
          location={{
            lat: locationData.location.lat,
            lng: locationData.location.lng
          }}
        />
      )}
    </div>
  );
}
