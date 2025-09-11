import { Header } from '../components/Header';
import miguel from '../assets/miguel.jpeg';
import guilherme from '../assets/guilherme.jpeg';
import brian from '../assets/brian.jpg';
import leonardo from '../assets/leonardo.jpeg';
import diego from '../assets/diego.jpg';
import instagram from '../assets/instagramIcon.jpg';
import linkedin from '../assets/linkedinIcon.png';

export function Membros() {
    const backgroundStyle = {
        backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(255, 255, 255, 0.03) 15px, rgba(255, 255, 255, 0.03) 16px)`
    };

    const cardShadowStyle = {
        boxShadow: '15px 0px 20px -5px rgba(0, 0, 0, 0.8)' // sombra preta forte à direita
    };

    return (
        <>
            <Header />
            <div className="bg-cyan dark:bg-purple min-h-screen w-full p-6 sm:p-8" style={backgroundStyle}>
                <h1 className="text-white font-montserrat font-bold text-5xl sm:text-7xl text-center mb-12" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.3)' }}>
                    Membros
                </h1>

                <main className="flex flex-col items-center max-w-7xl mx-auto space-y-8">

                    <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
                        
                        {/* Guilherme */}
                        <div
                            className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center w-full sm:w-80 md:w-96"
                            style={cardShadowStyle}
                        >
                            <img src={guilherme} alt="Foto de Guilherme Mendonça" className="w-24 h-24 bg-gray-200 rounded-full mb-4 border-2 border-gray-300" />
                            <p className="font-semibold font-montserrat text-xl text-gray-800 mb-4">Guilherme Mendonça</p>
                            <div className="flex space-x-5">
                                <a href="https://www.instagram.com/_guilheermesm" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                    <img src={instagram} alt="Instagram" className="w-8 h-8" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                    <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                                </a>
                            </div>
                        </div>

                        {/* Leonardo */}
                        <div
                            className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center w-full sm:w-80 md:w-96"
                            style={cardShadowStyle}
                        >
                            <img src={leonardo} alt="Foto de Leonardo Coutinho" className="w-24 h-24 bg-gray-200 rounded-full mb-4 border-2 border-gray-300" />
                            <p className="font-semibold font-montserrat text-xl text-gray-800 mb-4">Leonardo Coutinho</p>
                            <div className="flex space-x-5">
                                <a href="https://www.instagram.com/coutagem" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                    <img src={instagram} alt="Instagram" className="w-8 h-8" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                    <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">

                        {/* Brian */}
                        <div
                            className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center w-full sm:w-80 md:w-96"
                            style={cardShadowStyle}
                        >
                            <img src={brian} alt="Foto de Brian Barreto" className="w-24 h-24 bg-gray-200 rounded-full mb-4 border-2 border-gray-300" />
                            <p className="font-semibold font-montserrat text-xl text-gray-800 mb-4">Brian Barreto</p>
                            <div className="flex space-x-5">
                                <a href="https://www.instagram.com/brsl.brian" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                    <img src={instagram} alt="Instagram" className="w-8 h-8" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                    <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                                </a>
                            </div>
                        </div>

                        {/* Miguel */}
                        <div
                            className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center w-full sm:w-80 md:w-96"
                            style={cardShadowStyle}
                        >
                            <img src={miguel} alt="Foto de Miguel Santos" className="w-24 h-24 bg-gray-200 rounded-full mb-4 border-2 border-gray-300" />
                            <p className="font-semibold font-montserrat text-xl text-gray-800 mb-4">Miguel Santos</p>
                            <div className="flex space-x-5">
                                <a href="https://www.instagram.com/omiguelweed" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                    <img src={instagram} alt="Instagram" className="w-8 h-8" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                    <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Diego */}
                    <div className="flex justify-center">
                        <div
                            className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center w-full sm:w-80 md:w-96"
                            style={cardShadowStyle}
                        >
                            <img src={diego} alt="Foto de Diego Costa" className="w-24 h-24 bg-gray-200 rounded-full mb-4 border-2 border-gray-300" />
                            <p className="font-semibold font-montserrat text-xl text-gray-800 mb-4">Diego Costa</p>
                            <div className="flex space-x-5">
                                <a href="https://www.instagram.com/og.ezloki" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                    <img src={instagram} alt="Instagram" className="w-8 h-8" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                    <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
