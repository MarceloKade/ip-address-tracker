export default function Header() {
    return (
        <header className="absolute flex flex-col justify-center items-center top-0">
            <h1 className="absolute top-0 mt-4 font-medium text-lg text-slate-50">IP Address Tracker</h1>
            <div className="relative flex flex-col items-center w-3/12">
                <div className="absolute flex items-center justify-center w-8 h-8 top-0 mt-14 right-0 rounded-r-lg cursor-pointer bg-black z-10 hover:bg-[#3f3f3f]">
                    <img className="w-1.5" src="assets/img/icon-arrow.svg" alt="" />
                </div>
                <input className="absolute w-full h-8 p-4 top-0 mt-14 text-xs cursor-pointer text-[#2B2B2B] rounded-lg outline-none placeholder-[hsl(0, 0%, 59%)]" type="text" placeholder="Search for any address or domain" />
            </div>
            <img src="assets/img/pattern-bg-desktop.png" alt="" />
        </header>
    );
}