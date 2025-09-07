import { Header } from '../components/Header.jsx';
import logoJogo from '../assets/logoJogo.png';
import mrblu from '../assets/mrblu.png';
import ezdrak from '../assets/ezdrak.png';
import amir from '../assets/amir.png';
import jack from '../assets/jack.png';


export function Jogo() {
    // Estilo para o fundo com a grade roxa
    const backgroundStyle = {
        backgroundImage: `
      linear-gradient(rgba(128, 0, 128, 0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(128, 0, 128, 0.15) 1px, transparent 1px)
    `,
        backgroundSize: '20px 20px', // Tamanho da grade
    };

    return (
        <>
            <Header />
            <div className="bg-[#3A1E55] min-h-screen w-full font-mono text-white" style={backgroundStyle}>
                <div className="container mx-auto px-4 py-6 flex flex-col h-full">
                    {/* Título do Jogo */}
                    <div className="text-center my-6">
                        <img src={logoJogo} alt="SignBlast Logo" className="mx-auto w-64 h-auto" />
                    </div>
                    {/* --- ÁREA PRINCIPAL (VÍDEO E PERSONAGENS) --- */}
                    <main className="flex-grow flex flex-col justify-center items-center">
                        <div className="relative w-full max-w-2xl aspect-video my-8">

                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://youtu.be/atTJpwWeON0?si=Rha_a5UUXfzKUtTv"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            <img src={ezdrak} alt="Personagem 1" className="absolute -top-30 -left-10 w-32 h-auto sm:block"/>
                            <img src={mrblu} alt="Personagem 2" className="absolute -top-30 -right-6 w-32 h-auto sm:block"/> {/* hidden sm:block */}
                            <img src={amir} alt="Personagem 3" className="absolute -bottom-30 -left-14 w-32 h-auto sm:block"/>
                            <img src={jack} alt="Personagem 4" className="absolute -bottom-30 -right-8 w-32 h-auto sm:block"/>
                        </div>
                    </main>


                    <footer className="w-full flex justify-center py-8">
                        <button className="bg-[#29D3A3] text-white font-bold text-2xl uppercase px-16 py-4 rounded-lg border-b-8 border-[#1E9E7A] hover:bg-[#34E0B3] active:border-b-0 active:translate-y-2 transition-all duration-150">
                            Baixe Agora
                        </button>
                    </footer>
                </div>
            </div>

        </>
    );
}