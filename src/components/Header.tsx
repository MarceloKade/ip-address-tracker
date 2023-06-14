import Info from "./Info"

const infoData = [
    { title: "IP ADDRESS", text: "192.212.174.101" },
    { title: "LOCATION", text: "Brooklyn, NY 1001" },
    { title: "TIMEZONE", text: "UTC-05:00" },
    { title: "ISP", text: "SpaceX Starlink" }
];

export default function Header() {
    return (
        <header className="absolute flex flex-col justify-center items-center top-0">
            <h1 className="absolute top-0 mt-8 font-medium text-3xl text-slate-50">IP Address Tracker</h1>
            <form className="relative flex flex-col items-center xl:w-[38%] xs:w-5/6">
                <button className="absolute flex items-center justify-center w-14 h-14 top-0 mt-24 right-0 rounded-r-2xl cursor-pointer bg-black z-10 hover:bg-[#3f3f3f]">
                    <img className="w-1/5" src="assets/img/icon-arrow.svg" alt="" />
                </button>
                <input className="absolute w-full h-14 p-6 top-0 mt-24 text-lg cursor-pointer text-[#2B2B2B] rounded-2xl outline-none placeholder-[hsl(0, 0%, 59%)]" type="text" placeholder="Search for any address or domain" />
            </form>
            <img className="w-screen xl:h-72 xs:h-80 object-cover" src="assets/img/pattern-bg-desktop.png" alt="" />
            <div className="relative flex xl:flex-row sm:flex-row xs:flex-col flex-wrap justify-around xl:text-left sm:text-left xs:text-center xl:w-3/4 xs:w-5/6 xl:h-40 xs:h-auto xl:-mt-20 xs:-mt-36 rounded-2xl bg-slate-50 pt-8 pb-8">
                {infoData.map((info, index) => (
                    <Info
                        key={index}
                        title={info.title}
                        text={info.text}
                        className={index === infoData.length - 1 ? "xl:border-l-hidden" : "xl:border-l-2 sm:border-l-hidden xs:border-l-hidden"}
                    />
                ))}
                <div className="absolute sm:h-3/4 xl:h-0 sm:border-l-2 xl:border-l-hidden border-[#dcdcdc]"></div>
            </div>


        </header>
    );
}