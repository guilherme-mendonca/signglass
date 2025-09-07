import { Header } from '../components/Header';
import miguel from '../assets/miguel.jpeg';
import guilherme from '../assets/guilherme.jpeg';
import brian from '../assets/brian.jpg';
import leonardo from '../assets/leonardo.jpeg';
import diego from '../assets/diego.jpg';


export function Membros() {
    // Efeito de fundo com linhas
    const backgroundStyle = {
        backgroundImage: `repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      rgba(255, 255, 255, 0.03) 15px,
      rgba(255, 255, 255, 0.03) 16px
    )`
    };

    return (
        <>
            <Header />
            <div className="bg-cyan dark:bg-purple min-h-screen w-full p-6 sm:p-8" style={backgroundStyle}>
                {/* Título Principal */}
                <h1 className="text-white font-montserrat font-bold text-5xl sm:text-7xl text-center mb-12" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.3)' }}>
                    Membros
                </h1>

                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
                    {/* Card 1*/}
                    <div className="bg-white rounded-[2rem] shadow-xl p-8 flex flex-col items-center text-center">
                        <img src={miguel} alt="Foto de Miguel Santos" className="w-24 h-24 bg-gray-200 rounded-full mb-4 border-2 border-gray-300" />
                        <p className="font-semibold font-montserrat text-xl text-gray-800 mb-4">Miguel Santos</p>
                        <div className="flex space-x-5">
                            <a href="https://www.instagram.com/omiguelweed" target="_blank" className="text-[#E1306C] hover:scale-110 transition-transform">Instagram</a>
                            <a href="#" target="_blank" className="text-[#0077B5] hover:scale-110 transition-transform">Linkedin</a>
                        </div>
                    </div>

                    {/* Card 2*/}
                    <div className="bg-white rounded-[2rem] shadow-xl p-8 flex flex-col items-center text-center">
                        <img src={guilherme} alt="Foto de Guilherme Mendonça" className="w-24 h-24 bg-gray-200 rounded-full mb-4 border-2 border-gray-300" />
                        <p className="font-semibold font-montserrat text-xl text-gray-800 mb-4">Guilherme Mendonça</p>
                        <div className="flex space-x-5">
                            <a href="https://www.instagram.com/_guilheermesm" target="_blank" className="text-[#E1306C] hover:scale-110 transition-transform">Instagram</a>
                            <a href="#" target="_blank" className="text-[#0077B5] hover:scale-110 transition-transform">Linkedin</a>
                        </div>
                    </div>

                    {/* Card 3*/}
                    <div className="bg-white rounded-[2rem] shadow-xl p-8 flex flex-col items-center text-center">
                        <img src={brian} alt="Foto de Brian Barreto" className="w-24 h-24 bg-gray-200 rounded-full mb-4 border-2 border-gray-300" />
                        <p className="font-semibold font-montserrat text-xl text-gray-800 mb-4">Brian Brasil</p>
                        <div className="flex space-x-5">
                            <a href="https://www.instagram.com/brsl.brian" target="_blank" className="text-[#E1306C] hover:scale-110 transition-transform">Instagram</a>
                            <a href="#" target="_blank" className="text-[#0077B5] hover:scale-110 transition-transform">Linkedin</a>
                        </div>
                    </div>

                    {/* Card 4*/}
                    <div className="bg-white rounded-[2rem] shadow-xl p-8 flex flex-col items-center text-center">
                        <img src={leonardo} alt="Foto de Leonardo Coutinho" className="w-24 h-24 bg-gray-200 rounded-full mb-4 border-2 border-gray-300" />
                        <p className="font-semibold font-montserrat text-xl text-gray-800 mb-4">Leonardo Coutinho</p>
                        <div className="flex space-x-5">
                            <a href="https://www.instagram.com/coutagem" target="_blank" className="text-[#E1306C] hover:scale-110 transition-transform">Instagram</a>
                            <a href="#" target="_blank" className="text-[#0077B5] hover:scale-110 transition-transform">Linkedin</a>
                        </div>
                    </div>

                    {/* Card 5*/}
                    <div className="bg-white rounded-[2rem] shadow-xl p-8 flex flex-col items-center text-center">
                        <img src={diego} alt="Foto de Diego Costa" className="w-24 h-24 bg-gray-200 rounded-full mb-4 border-2 border-gray-300" />
                        <p className="font-semibold font-montserrat text-xl text-gray-800 mb-4">Diego Costa</p>
                        <div className="flex space-x-5">
                            <a href="https://www.instagram.com/og.ezloki" target="_blank" className="text-[#E1306C] hover:scale-110 transition-transform">Instagram</a>
                            <a href="#" target="_blank" className="text-[#0077B5] hover:scale-110 transition-transform">Linkedin</a>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}