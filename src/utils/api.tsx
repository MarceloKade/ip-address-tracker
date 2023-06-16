import axios from 'axios';

const API_KEY = 'at_BXnwhaRxeh9sZencNg2AsnVtFtoWp';

export interface LocationData {
    ip: string;
    location: {
        city: string;
        region: string;
        country: string;
        lat: number;
        lng: number;
        timezone: string;
    };
    isp: string;
}

export const fetchLocationData = async (
    ipAddress?: string
): Promise<LocationData | null> => {
    try {
        const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ipAddress || ''}`;
        const response = await axios.get(url);
        const data = response.data as LocationData;
        return data;
    } catch (error) {
        console.log('Error fetching location data:', error);
        return null;
    }
};
