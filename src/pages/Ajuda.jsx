import { Header } from "../components/Header.jsx"

export function Ajuda() {
  return (
    <>
      <Header />
      <div className="min-h-dvh bg-[#1D70DE] dark:bg-purple text-white flex flex-col items-center px-6 py-8 space-y-6">

        <h1 className="font-montserrat font-semibold text-lg ">
        Instruções para usar o óculos <br/> Não é complicado!
        </h1>
        {/* Passos */}
        <div className="space-y-4 text-center text-sm font-medium max-w-xs">
          <p>
            <span className="font-bold">Primeiro passo:</span> Coloque o SignGlass e
            envolva o equipamento extra na cintura.
          </p>
          <p>
            <span className="font-bold">Segundo passo:</span> Ligue o SignGlass e
            espere ele fazer os ajustes iniciais.
          </p>
          <p>
            <span className="font-bold">Terceiro passo:</span> Olhe para o falante
            de libras e entenda tudo com tradução em tempo real!
          </p>
        </div>
        {/* Chamada extra */}
        <p className="text-center text-sm font-semibold max-w-xs">
          Saiba melhor no vídeo abaixo ou no link abaixo!
        </p>
        {/* Vídeo simples */}
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
        {/* Link simples */}
        <a
          href="https://youtu.be/7nMsw5twDLs?si=s-rIpTSchL7B-yJ4"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white text-sm"
        >
          Vídeo passo a passo do SignGlass
        </a>
      </div>
    </>
  );
}
