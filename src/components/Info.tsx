'use client'
interface InfoProps {
    title: string;
    text: string;
    className?: string;
}
export default function Info({ title, text, className }: InfoProps) {
    return (
        <div className="relative xl:pl-0 xl:pr-0 sm:pl-5 sm:pr-5 xs:pl-0 xs:pr-0 flex justify-center">
            <div className="flex flex-col w-44">
                <p className="xl:mt-0 sm:mt-4 text-sm font-semibold text-[#969696]">{title}</p>
                <p className="mt-2 font-medium text-2xl text-[#2B2B2B]">{text}</p>
            </div>
            <div className={`absolute -mt-2 h-full left-0 ml-60 ${className} border-[#dcdcdc]`}></div>
        </div>
    );
}
