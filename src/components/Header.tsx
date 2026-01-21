import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos o Link
import { Menu, X } from 'lucide-react'; // Ícones de menu
import { useUI } from '../context/UIContext';

const Header:React.FC = () =>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openModal } = useUI(); // Obtém a função para abrir o modal

    // Lista de Links
    const navItems = [
        {name: 'Home', path: '/'},
        {name: 'Certificados', path: '/#certificados'}, // Link âncora interno, usaremso <a>
        {name: 'Contato', path: '/contato'}, // Link para a nova página
    ]

    return(
        <header className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center h-20'>
                    {/* Logo Home Link */}
                    <Link to='/' className='text-xl font-bold text-purple-600 hover:text-purple-80 transition duration-300'>
                        IDECert Certificados Digitais
                    </Link>

                    {/* Menu Desktop */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                        // Usamos Link para rotas internas da app (Home, Contato)
                        // Usamos <a> para âncoras dentro da mesma página
                        item.path.startsWith('/#') ? (
                            <a 
                                key={item.name}
                                href={item.path.substring(1)} // Remove a barra inicial para a âncora
                                className="text-gray-700 hover:text-purple-800 transition duration-300 font-medium"
                            >
                                {item.name}
                            </a>
                        ) : (
                            <Link 
                                key={item.name} 
                                to={item.path} 
                                className="text-gray-700 hover:text-purple-800 transition duration-300 font-medium"
                            >
                                {item.name}
                            </Link>
                        )
                        ))}
                    </nav>

                    {/* Botão que aciona o Modal */}
                    <button
                        onClick={openModal}
                        className='hidden md:block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold shadow-md'
                    >Orçamento Rápido</button>

                    {/* Bottão Whatsapp */}
                    <a 
                        href="https://wa.me/5521968045339"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hidden md:block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 font-semibold shadow-md'
                    >Fale no Whatsapp</a>

                    {/* Botão de Menu Mobile */}
                    <button
                        className='md:hidden text-gray-700'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label='Toggle menu'
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Menu Mobile (Dropdown) */}
            {isMenuOpen && (
                <div className='md:hidden bg-white shadow-lg border-t border-gray-100 pb-4'>
                    <nav className='flex flex-col space-y-2 px-4 pt-2'>
                        {navItems.map((item) => (
                            item.path.startsWith('/#') ?(
                                <a
                                    key={item.name}
                                    href={item.path.substring(1)}
                                    onClick={() => setIsMenuOpen(false)}
                                    className='text-gray-700 hover:bg-gray-100 p-2 rounded-md transition duration-300 font-medium'
                                >{item.name}</a>
                            ):(
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className='text-gray-700 hover:bg-gray-100 rounded-md transition duration-300 font-medium'
                                >{item.name}</Link>
                            )
                        ))}
                        <a 
                            href="https://wa.me/5521968045339"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mt-4 bg-green-500 text-white px-4 py-2 rounded-lg text-center hover:bg-green-600 transition duration-300 font-semibold shadow-md'
                            
                        >Fale no Whatsapp</a>
                    </nav>
                </div>
            )}
        </header>
    );
}
export default Header;