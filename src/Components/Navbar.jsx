import React, { Fragment, useEffect } from 'react';
import { navItems } from '../Data/data';

const Navbar = () => {
    const [activeSection, setActiveSection] = React.useState('home');
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = 'home';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop; 
                if (window.pageYOffset >= sectionTop - 200) {
                    currentSection = section.id;
                }
            })
            setActiveSection(currentSection)
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
       <Fragment>
            <nav className='fixed bg-transparent top-0 w-full py-2 z-50 backdrop-blur-md border-b border-white/20 px-3 transition-all'>
                <div className='container mx-auto flex items-center justify-between px-6'>
                    <div className='text-2xl text-outline font-bold'>RAY</div>
                    <ul className='hidden md:flex space-x-8 text-white text-sm font-light uppercase'>
                        {
                            navItems.map((item) => (
                                <li key={item.id} className={`hover:text-teal-500 cursor-pointer transition-colors ${activeSection === item.id?"text-teal-400":""}} `}>
                                    {item.label}
                                </li>
                            ))
                        }
                    </ul>
                    {/* <button className='ml-4 px-5 py-1 rounded-full bg-gradient-to-r from-teal-500  to-teal-700 hover:opacity-90 text-white font-normal transition-all'>Hire Me</button> */}
                </div>
            </nav>
       </Fragment>
    )
}

export default Navbar