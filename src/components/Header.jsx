import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import signLogo from "../assets/logo.png";
import { MoonIcon, SunIcon, List, X} from '@phosphor-icons/react';

export function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "light");
  const [aberto, setAberto] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const tagHTML = document.documentElement;
    if (theme === "dark") {
      tagHTML.classList.add("dark");
    } else {
      tagHTML.classList.remove("dark");
    }
  }, [theme]);

  // fecha o menu mobile ao navegar para uma nova página
  useEffect(() => {
    setAberto(false);
  }, [location]);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) { // Fecha o menu ao rolar para baixo
      setIsVisible(false);
      setAberto(false);
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

  // Header arrumado não mecha
  return (
    <header className={`sticky top-0 z-50 w-full transition-transform duration-300 ease-in-out bg-azulEscuro dark:bg-purple ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">


        <Link to="/">
          <img className="w-auto h-auto max-w-20" src={signLogo} alt="Logo de um óculos branco" />
        </Link>


        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-30 text-white dark:text-gray-200 font-semibold">
            <li><Link to="/jogo" className="font-monteserrat hover:text-gray-300">Jogo</Link></li>
            <li><Link to="/membros" className="font-monteserrat hover:text-gray-300">Membros</Link></li>
            <li><Link to="/ajuda" className="font-monteserrat hover:text-gray-300">Instruções</Link></li>
            <li><Link to="/produtos" className="font-monteserrat hover:text-gray-300">Produtos</Link></li>
            <li><Link to="/referencias" className="font-monteserrat hover:text-gray-300">Referências</Link></li>
          </ul>

          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="cursor-pointer">
            {theme === "dark" ? <SunIcon size={28} weight="fill" className='text-white' /> : <MoonIcon size={28} weight="fill" className='text-white' />}
          </button>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setAberto(!aberto)} className="flex text-white space-x-2 items-center">
            {aberto ? <X size={32} /> : <List size={32} />} {/* Ajusta o tamanho do header mobile*/}
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex justify-end">
              {theme === "dark" ? <SunIcon size={24} weight="fill" /> : <MoonIcon size={24} weight="fill" />}
            </button>
          </button>
        </div>
      </div>

      {aberto && (
        <div className="md:hidden bg-azulEscuro dark:bg-purple absolute w-full left-0 shadow-lg h-80">
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
          </ul>
        </div>
      )}
    </header>
  );
}