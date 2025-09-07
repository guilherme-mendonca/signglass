import { Header } from "../components/Header";
import espCam from '../assets/espCam.png';
import esp32 from '../assets/esp32.png';
import oculosLed from '../assets/oculosLed.png';
import oculosNeon from '../assets/oculosNeon.png';
import pilha from '../assets/pilha.png';
import somCaixa from '../assets/somCaixa.png';


export function Produtos() {
    return (
        <>
            <Header />
            <div className="bg-cyan dark:bg-purple min-h-screen p-4 sm:p-8 flex justify-center">

                {/* O Card Principal */}
                <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">

                    {/* Conteúdo do Card */}
                    <div className="p-4 flex flex-col space-y-4">

                        <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Produtos
                        </button>

                        {/* Lista de Produtos (agora estática) */}
                        <div className="divide-y divide-gray-200">

                            {/* --- Item 1: Esp cam --- */}
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

                            {/* --- Item 2: Arduino nano --- */}
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

                            {/* --- Item 3: Óculos LED --- */}
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

                            {/* --- Item 4: Óculos Neon --- */}
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

                            {/* --- Item 5: Pilha --- */}
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

                            {/* --- Item 6: Caixa de Som --- */}
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}