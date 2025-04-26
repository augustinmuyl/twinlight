import Archive from "../archive/archive";
import Navbar from "../navbar/navbar";

export default function ArchivePage() {
    return (
        <div className="bg-[url('/assets/earth.png')] bg-cover bg-center w-full h-screen flex flex-col">
            <Navbar/>
            <div className="w-full flex-1 flex items-center justify-center z-0 px-4 md:px-10">
                <Archive/>
            </div>
        </div>
    )
}

