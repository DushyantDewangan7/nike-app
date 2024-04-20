import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Nav = () => {
  return (
    
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="  font-bold flex justify-between items-center max-container ">
            
        <a href="/">
            <img 
            src={headerLogo} alt="Logo" 
             width={130} height={30 }/>
        </a>
        <ul className=' flex-1 flex
         justify-center items-center gap-16 max-lg:hidden '>
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href}
                    className="font-monts errat leading-normal 
                     text-lg text-slate-500">
                        {item.label}
                     </a>
                </li>
            ))}
        </ul>
        <div className="hidden max-lg:block">
            <img src={hamburger} alt="Hamburger"
            width={25}
            height={25} />
        </div>
        </nav>
    </header>
  )
}

export default Nav