import { Header } from "../components/Header.jsx"

export function Referencias() {
  return (
    <div>
      <Header />

      <main className="min-h-screen bg-cyan dark:bg-purple flex flex-col items-center justify-center p-8">

        <h1 className="text-5xl font-bold text-white mb-10">Artigos Relacionados</h1>


        <div className="w-full max-w-3xl min-h-[400px] bg-white rounded-2xl shadow-lg p-8 ">

          <ul className="space-y-5 text-blue-600">
            <li>
              <a href=" https://educacaopublica.cecierj.edu.br/artigos/23/26/contribuicoes-das-tecnologias-da-informacao-e-comunicacao-nos-processos-de-ensino-e-aprendizagem-de-estudantes-surdos" target="_blank" rel="noopener noreferrer">
                <u>Contribuicoes das tecnologias da informacao e comunicacao nos processos de ensino e aprendizagem de estudantes surdos</u>
              </a>
            </li>

            <hr className="border-black"/>

            <li>
              <a href="https://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1413-03942015000100017" target="_blank" rel="noopener noreferrer">
                <u>Libras e o desenvolvimento de pessoas surdas</u>
              </a>
            </li>

            <hr className="border-black" />

            <li>
              <a className="" href="https://www.figma.com/exit?url=http%3A%2F%2Fmilanesa.ime.usp.br%2Frbie%2Findex.php%2Frbie%2Farticle%2Fview%2F7140" target="_blank" rel="noopener noreferrer">
                <u>Tecnologias para o ensino da Língua Brasileira de Sinais (LIBRAS): Uma revisão sistemática da literatura</u>
              </a>
            </li>

            <hr className="border-black" />

            <li>
              <a href="https://www.nucleodoconhecimento.com.br/educacao/atuacao-de-tils" target="_blank" rel="noopener noreferrer">
                <u>O processo de criação de sinais-termo em libras: a representação de conceitos na área da educação a partir da atuação de TILS no ensino superior</u>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}