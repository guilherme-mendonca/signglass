import { Header } from "./components/Header";
import oculosNeon from "./assets/oculosNeon.png";
import maoPaz from "./assets/maoPaz.png";
  

export function Home() {
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
        <>
                    <Header />
        <main className="bg-cyan dark:bg-purple text-white font-montserrat font-bold" style={backgroundStyle}>

            
            <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-8 lg:p-16 gap-12">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
                    <h1 className="text-5xl md:text-6xl leading-tight">
                        Aqui você verá o mundo por outro ângulo
                    </h1>

                    <div className="mt-10">
                        <a 
                            href="/download"
                            className="relative inline-block px-12 py-6 text-white font-bold text-lg rounded-full
                            bg-violet-600 shadow-[0_0_25px_8px_rgba(137,207,240,0.6)]
                            hover:scale-105 transition-transform duration-300"
                        >
                            Baixe Agora o App
                        </a>
                    </div>
                </div>

                <div className="flex justify-center lg:w-1/2 mt-10 lg:mt-0">
                    <img src={oculosNeon} alt="Óculos inteligente SignGlass com neon ao redor" className="w-full max-w-md" />
                </div>
            </section>

            <section className="flex flex-col-reverse lg:flex-row items-center justify-center p-8 lg:p-16 gap-12">
                <div className="flex justify-center lg:w-1/2 mt-10 lg:mt-0">
                    <img src={maoPaz} alt="Mão fazendo sinal de paz e amor representando a comunicação" className="w-3/4 max-w-sm" />
                </div>

                <div className="flex flex-col text-center lg:text-left lg:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl leading-tight">
                        Quebre as barreiras da comunicação com a tecnologia que traduz Libras em <span className="text-cyan-300">tempo real.</span>
                    </h1>
                    <p className="text-lg text-gray-200">
                        O SignGlass é um óculos inteligente com câmera integrada que interpreta automaticamente os sinais em Libras (Língua Brasileira de Sinais) e os traduz em áudio ou texto para ouvintes e não fluentes.
                    </p>
                    <p className="text-lg text-gray-200">
                        Com design leve e futurista, o Sign Glass revoluciona a forma como surdos e ouvintes se comunicam — de maneira natural, rápida e eficiente.
                    </p>
                    <p className="text-lg text-gray-200">
                        Com apenas o ligar de um botão você pode entender libras mesmo sem tê-la aprendido, com uma tradução em tempo real, não existem barreiras entre aqueles considerados “especiais”, pois não existem barreiras com: SignGlass
                    </p>
                </div>
            </section>
        </main>
        </>
    );
}
