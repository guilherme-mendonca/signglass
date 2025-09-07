import { Header } from "./components/Header";
import oculosNeon from "./assets/oculosNeon.png";
import maoPaz from "./assets/maoPaz.png";
// Removi o 'botaoHome' pois recriamos o estilo com Tailwind
// import { Link } from "react-router-dom"; // Use 'react-router-dom' para versões mais recentes

export function Home() {
    //fundo com traços de 45 graus no fundo das paginas (Ficou legal sim! Ass: Gemini)
    const backgroundStyle = {
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 25px,
          rgba(255, 255, 255, 0.04) 20px,
          rgba(255, 255, 255, 0.08) 26px
        )`
    };

    return (
        // Um fundo mais escuro para combinar com a imagem. Ajuste conforme sua paleta.
        <main className="bg-cyan dark:bg-purple text-white" style={backgroundStyle}>
            <Header />

            {/* SEÇÃO 1: Óculos */}
            <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-8 lg:p-16 gap-12">
                
                {/* Coluna Esquerda: Texto e Botão */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
                    <h1 className="font-montserrat font-bold text-5xl md:text-6xl leading-tight">
                        Aqui você verá o mundo por outro ângulo
                    </h1>
                    <div className="mt-10">
                        {/* Botão estilizado para parecer com a imagem */}
                        <a href="/download" className="bg-violet-600 font-montserrat font-bold text-2xl py-6 px-12 rounded-full shadow-lg shadow-violet-500/50 hover:bg-violet-700 hover:scale-105 transition-all duration-300">
                            Baixe Agora o App
                        </a>
                    </div>
                </div>

                {/* Coluna Direita: Imagem do Óculos */}
                <div className="flex justify-center lg:w-1/2 mt-10 lg:mt-0">
                    <div className="bg-violet-900/40 p-5 rounded-[60px] shadow-2xl shadow-violet-600/30">
                        <img src={oculosNeon} alt="Óculos inteligente SignGlass com neon ao redor" className="w-full max-w-md" />
                    </div>
                </div>
            </section>

            {/* SEÇÃO 2: Libras */}
            <section className="flex flex-col-reverse lg:flex-row items-center justify-center p-8 lg:p-16 gap-12 bg-blue-900/20">

                {/* Coluna Esquerda: Imagem da Mão */}
                <div className="flex justify-center lg:w-1/2 mt-10 lg:mt-0">
                    <img src={maoPaz} alt="Mão fazendo sinal de paz e amor representando a comunicação" className="w-3/4 max-w-sm" />
                </div>
                
                {/* Coluna Direita: Textos Explicativos */}
                <div className="flex flex-col text-center lg:text-left lg:w-1/2 space-y-6">
                    <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight">
                        Quebre as barreiras da comunicação com a tecnologia que traduz Libras em <span className="text-cyan-300">tempo real.</span>
                    </h1>
                    <p className="font-montserrat font-semibold text-lg text-gray-200">
                        O SignGlass é um óculos inteligente com câmera integrada que interpreta automaticamente os sinais em Libras (Língua Brasileira de Sinais) e os traduz em áudio ou texto para ouvintes e não fluentes.
                    </p>
                    <p className="font-montserrat font-semibold text-lg text-gray-200">
                        Com design leve e futurista, o Sign Glass revoluciona a forma como surdos e ouvintes se comunicam — de maneira natural, rápida e eficiente.
                    </p>
                     <p className="font-montserrat font-semibold text-lg text-gray-200">
                        Com apenas o ligar de um botão você pode entender libras mesmo sem tê-la aprendido, com uma tradução em tempo real, não existem barreiras entre aqueles considerados “especiais”, pois não existem barreiras com: SignGlass
                    </p>
                </div>

            </section>
        </main>
    );
}