import { Header } from "../Header"

export function Login() {
    return (

        <body className="bg-cyan dark:bg-purple">
            <Header />

            <h1 className="flex justify-center mb-5 text-4xl font-bold text-white font-montserrat">Faça seu Login</h1>

            <form>
                <div className="flex flex-col px-5">
                    <label className="text-white font-montserrat font-thin text-[20px]" htmlFor="email">Email</label>
                    <input className="outline-none border-4 rounded-xl border-azul h-[49px] w-[98%] font-bold text-[18px] bg-white" type="email" id="email" name="email" placeholder="Digite seu email"></input>
                </div>
                <div className="flex flex-col px-5">
                    <label className="text-white font-montserrat font-thin text-[20px]" htmlFor="senha">Senha</label>
                    <input className="outline-none border-4 rounded-xl border-azul h-[49px] w-[98%] font-bold text-[18px] bg-white" type="password" id="senha" name="senha" placeholder="Digite sua senha"></input>
                </div>

                <div className="flex flex-col px-6 py-2">
                    <label className="text-white font-montserrat font-thin text-[20px]" htmlFor="checkbox">
                        <input className="outline-none border-4 rounded-xl border-azul w-[17px] h-[16px]" type="checkbox" />
                        Me manter conectado
                    </label>
                </div>

                <div className="flex justify-center"><button className="flex justify-center items-center mt-4 border-4 rounded-full border-azul h-[57px] w-[60%] font-montserrat font-thin text-white text-[20px] bg-azul cursor-pointer hover:scale-105 transition-transform">Logar</button></div>

                <div className="flex justify-center">
                    <p className="font-montserrat text-white text-[19px]">Possui Conta? <a className="text-azul underline" href="../Login/Cadastro.jsx">Cadastre-se</a></p>
                </div>
            </form>
        </body>

    )

}