'use client'
import { useEffect, useState } from 'react';
import Info from "./Info";
import { fetchLocationData, LocationData } from "../utils/api";

interface HeaderProps {
    onSearch: (ipAddress?: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
    const [locationData, setLocationData] = useState<LocationData | null>(null);
    const [ipAddress, setIpAddress] = useState('');

    useEffect(() => {
        const getLocationData = async () => {
            const data = await fetchLocationData();
            setLocationData(data);
        };

        getLocationData();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIpAddress(e.target.value);
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = await fetchLocationData(ipAddress);
        setLocationData(data);
        onSearch(ipAddress);
    };


    const infoData = locationData
        ? [
            { title: "IP ADDRESS", text: locationData.ip },
            { title: "LOCATION", text: `${locationData.location.city}, ${locationData.location.region} - ${locationData.location.country}` },
            { title: "TIMEZONE", text: locationData.location.timezone },
            { title: "ISP", text: locationData.isp }
        ]
        : [];

    return (
        <header className="flex flex-col justify-center items-center">
            <h1 className="absolute top-0 mt-8 font-medium text-3xl text-slate-50">IP Address Tracker</h1>
            <form className="relative flex flex-col items-center xl:w-[38%] xs:w-5/6" onSubmit={handleFormSubmit}>
                <button className="absolute flex items-center justify-center w-14 h-14 top-0 mt-24 right-0 rounded-r-2xl cursor-pointer bg-black z-10 hover:bg-[#3f3f3f]">
                    <img className="w-1/5" src="assets/img/icon-arrow.svg" alt="" />
                </button>
                <input
                    className="absolute w-full h-14 p-6 top-0 mt-24 text-lg cursor-pointer text-[#2B2B2B] rounded-2xl outline-none placeholder-[hsl(0, 0%, 59%)]"
                    type="text"
                    placeholder="Search for IP"
                    value={ipAddress}
                    onChange={handleInputChange}
                />
            </form>
            <img className="w-screen xl:h-80 xs:h-80 object-cover" src="assets/img/pattern-bg-desktop.png" alt="" />
            <div className="absolute top-0 flex xl:flex-row sm:flex-row xs:flex-col flex-wrap justify-around xl:text-left sm:text-left xs:text-center xl:w-3/4 xs:w-5/6 xl:h-40 xs:h-96 xl:mt-60 xs:mt-40 rounded-2xl bg-slate-50 xl:pt-8 xl:pb-8 xs:pt-4 xs:pb-4  z-10">
                {locationData ? (
                    infoData.map((info, index) => (
                        <Info
                            key={index}
                            title={info.title}
                            text={info.text}
                            className={index === infoData.length - 1 ? "xl:border-l-hidden" : "xl:border-l-2 sm:border-l-hidden xs:border-l-hidden"}
                        />
                    ))
                ) : (
                    <p>
                        Enter an IP number between 1.0.0.0 and 223.255.255.255.
                    </p>
                )}
            </div>
        </header>
    );
}