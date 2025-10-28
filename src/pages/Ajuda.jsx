import { Header } from "../components/Header.jsx"

export function Ajuda() {
  return (
    <>
      <Header />
      <div className="min-h-dvh bg-[#1D70DE] dark:bg-purple text-white flex flex-col items-center px-6 py-8 space-y-6">

        <h1 className="text-center font-montserrat font-semibold text-lg text-[23px]">
          Instruções para usar o óculos <br /> Não é complicado! 
        </h1>
        {/* Passos */}
        <div className="space-y-4 text-center text-sm font-medium max-w-xs">
          <p className="text-[18px]">
            <span className="font-bold text-[20px] text-cyan-300">Primeiro passo:</span> Coloque o SignGlass em seu rosto e abra o aplicativo em seu smartphone
          </p>
          <p className="text-[18px]">
            <span className="font-bold text-[20px] text-cyan-300">Segundo passo:</span> Ligue o SignGlass e
            espere ele fazer os ajustes iniciais.
          </p>
          <p className="text-[18px]">
            <span className="font-bold text-[20px] text-cyan-300">Terceiro passo:</span> Olhe para o falante
            de libras e entenda tudo com tradução em tempo real!
          </p>
        </div>
        
        <p className="text-center text-sm font-semibold max-w-xs text-[18px]">
          Saiba melhor no vídeo abaixo ou no link abaixo!
        </p>
        
        <div className="w-full max-w-xs">
          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://youtu.be/7nMsw5twDLs?si=s-rIpTSchL7B-yJ4"
            title="Vídeo passo a passo do SignGlass"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <a
          href="https://youtu.be/7nMsw5twDLs?si=s-rIpTSchL7B-yJ4"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white text-sm text-[16px]"
        >
          Vídeo passo a passo do SignGlass
        </a>
      </div>
    </>
  );
}
