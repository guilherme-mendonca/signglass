import { Header } from "../components/Header";
import espCam from '../assets/espCam.png';
import esp32 from '../assets/esp32.png';
import oculosLed from '../assets/oculosLed.png';
import oculosNeon from '../assets/oculosNeon.png';
import pilha from '../assets/pilha.png';
import somCaixa from '../assets/somCaixa.png';

export function Produtos() {
    const cardShadowStyle = {
        boxShadow: '15px 0px 20px -5px rgba(0, 0, 0, 0.8)'
    };

    return (
        <>
            <Header />
            <div className="bg-cyan dark:bg-purple min-h-screen p-4 sm:p-8 flex justify-center">
                <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden" style={cardShadowStyle}>
                    <div className="p-4 flex flex-col space-y-4">
                        <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Produtos
                        </button>

                        <div className="divide-y divide-gray-200">
                            <div className="flex items-center py-4">
                                <img src={espCam} alt="Esp cam" className="w-16 h-16 object-contain rounded-md" />
                                <div className="ml-4 flex-grow">
                                    <p className="font-semibold text-gray-800">Esp cam</p>
                                    <p className="text-blue-600 font-bold">R$49,50
                                        <span className="ml-2 text-gray-400 line-through font-normal text-sm">
                                            a R$78,00
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center py-4">
                                <img src={esp32} alt="Arduino nano" className="w-16 h-16 object-contain rounded-md" />
                                <div className="ml-4 flex-grow">
                                    <p className="font-semibold text-gray-800">Esp32</p>
                                    <p className="text-blue-600 font-bold">R$22,32
                                        <span className="ml-2 text-gray-400 line-through font-normal text-sm">
                                            a R$30,00
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center py-4">
                                <img src={oculosLed} alt="Óculos LED" className="w-16 h-16 object-contain rounded-md" />
                                <div className="ml-4 flex-grow">
                                    <p className="font-semibold text-gray-800">Óculos LED</p>
                                    <p className="text-blue-600 font-bold">R$29,90
                                        <span className="ml-2 text-gray-400 line-through font-normal text-sm">
                                            a R$45,00
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center py-4">
                                <img src={pilha} alt="Pilha" className="w-16 h-16 object-contain rounded-md" />
                                <div className="ml-4 flex-grow">
                                    <p className="font-semibold text-gray-800">Pilha</p>
                                    <p className="text-blue-600 font-bold">R$10,00
                                        <span className="ml-2 text-gray-400 line-through font-normal text-sm">
                                            a R$15,00
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center py-4">
                                <img src={somCaixa} alt="Caixa de Som" className="w-16 h-16 object-contain rounded-md" />
                                <div className="ml-4 flex-grow">
                                    <p className="font-semibold text-gray-800">Caixa de Som</p>
                                    <p className="text-blue-600 font-bold">R$35,00
                                        <span className="ml-2 text-gray-400 line-through font-normal text-sm">
                                            a R$50,00
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center py-4">
                                <img src={oculosNeon} alt="Óculos Neon" className="w-16 h-16 object-contain rounded-md" />
                                <div className="ml-4 flex-grow">
                                    <p className="font-semibold text-gray-800">Óculos Neon</p>
                                    <p className="text-blue-600 font-bold">R$18,50
                                        <span className="ml-2 text-gray-400 line-through font-normal text-sm">
                                            a R$25,00
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
