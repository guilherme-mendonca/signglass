import { useState, useEffect } from 'react';
import signLogo from "../assets/logo.png"
import menu from "../assets/menu.png"
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@phosphor-icons/react'

export function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")

  useEffect(() => {
    localStorage.setItem("theme", theme)
    const tagHTML = document.documentElement
    tagHTML.classList.remove("dark")

    if (theme === "dark") {
      tagHTML.classList.add("dark")
    }
  }, [theme])
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [aberto, setAberto] = useState(false);

  const mostrarMenu = () => {
    setAberto(!aberto);
  };

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);


  return (
    <header className={`p-4 bg-cyan dark:bg-purple sticky top-0 z-50 w-full transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${aberto ? 'bg-menu' : 'bg-cyan'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
            <img className="w-auto h-auto max-w-20" src={signLogo} alt="Logo de um óculos branco" />
        </Link>
        
        <div className="flex items-center space-x-4">
            <button onClick={() => setTheme(prevTheme => prevTheme === "dark" ? "" : "dark")} className="cursor-pointer">
              {theme === "dark" ? (
                <SunIcon size={32} weight="fill" className='dark:text-white' />
              ) : (
                <MoonIcon size={32} weight="fill" />
              )}
            </button>
    
            <nav>
              <button onClick={mostrarMenu} className="cursor-pointer">
                <img src={menu} alt="Menu" className="w-auto h-auto max-h-8" />
              </button>
            </nav>
        </div>
      </div>
      <div>
        {aberto && (
          <ul>
            <button className="w-[88%] pl-30 mt-2">
              <Link to="/jogo"><li className="text-middle text-black text-2xl p-2 font-bold bg-white rounded-4xl shadow-black">Jogo</li></Link>
            </button>

            <button className="w-[88%] pl-30 mt-2">
              <Link to="/membros"><li className="text-middle text-black text-2xl p-2 font-bold bg-white rounded-4xl shadow-black">Membros</li></Link>
            </button>

            <button className="w-[88%] pl-30 mt-2">
              <Link to="/referencias"><li className="text-middle text-black text-2xl p-2 font-bold bg-white rounded-4xl shadow-black">Referências</li></Link>
            </button>

            <button className="w-[88%] pl-30 mt-2">
              <Link to="/ajuda"><li className="text-middle text-black text-2xl p-2 font-bold bg-white rounded-4xl shadow-black">Ajuda</li></Link>
            </button>

            <button className="w-[88%] pl-30 mt-2">
              <Link to="/produtos"><li className="text-middle text-black text-2xl p-2 font-bold bg-white rounded-4xl shadow-black">Produtos</li></Link>
            </button>

            <button className="w-[88%] pl-30 mt-2">
              <Link to="/"><li className="text-middle text-red-700 text-2xl p-2 font-bold bg-white rounded-4xl shadow-black">Home</li></Link>
            </button>
          </ul>
        )}
      </div>
    </header>
  )
}
