import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './menu.css'
import buttons from './buttons';
import Stopka from '../Stopka/Stopka';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Menu = () => {
    
    const [activeId, setActiveId] = useState(null);
    const handleClick = (id)=> ()=> {
        const activeElement = buttons.find((item)=> item.id === id )
        activeElement && setActiveId(id)
    }

    const [active, setActive] = useState(false);

    return (
        <>
        <nav className='menu__container'>
            <Link to="/">
                <h1 className='menu__logo' onClick={() => setActiveId(null)}>EzTYP</h1>
            </Link>
            <ul className={active ? "menu__list menu__reveal" : "menu__list"}>
                {buttons.map(({id, text, path}) =>{
                    return(
                        <li key={id} className={id === activeId ? 'active' : ''}>
                            <Link to={path} onClick={()=>{handleClick(id); setActive(false)}} >{text}</Link>
                        </li>
                    )
                })}
                <i><AiOutlineClose onClick={()=> setActive(!active)} /></i>
            </ul>
            <Link to="/faq" onClick={() => setActiveId(null)} className='menu__regulamin'>FAQ</Link>
            <div className="menu__toggle">
                <i><AiOutlineMenu onClick={()=> setActive(!active)} /></i>
            </div>
        </nav>

        <Outlet />
        <Stopka />
        </> 
  )
}

export default Menu