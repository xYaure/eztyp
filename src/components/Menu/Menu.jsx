import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './menu.css'
import buttons from './buttons';
import Stopka from '../Stopka/Stopka';

const Menu = () => {
    
    const [activeId, setActiveId] = useState(null);
    const handleClick = (id)=> ()=> {
        const activeElement = buttons.find((item)=> item.id === id )
        activeElement && setActiveId(id)
    }

    return (
        <>
        <nav className='menu__container'>
            <Link to="/">
                <h1 className='menu__logo' onClick={() => setActiveId(null)}>EzTYP</h1>
            </Link>
            <ul className='menu__list'>
                {buttons.map(({id, text, path}) =>{
                    return(
                        <li key={id} className={id === activeId ? 'active' : ''}>
                            <Link to={path} onClick={handleClick(id)} >{text}</Link>
                        </li>
                    )
                })}
            </ul>
            <Link to="/regulamin" onClick={() => setActiveId(null)} className='menu__regulamin'>Regulamin</Link>
        </nav>

        <Outlet />
        <Stopka />
        </>
  )
}

export default Menu