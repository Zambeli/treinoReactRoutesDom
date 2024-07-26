/* eslint-disable react/prop-types */
import styles from './MenuLink.module.css'
import { NavLink } from 'react-router-dom'


export default function MenuLink ({ children, to }) {

    return (
        <nav>
             <NavLink className={({isActive}) => `${styles.link} ${isActive ? styles.linkDestacado : ''}`}
                to={to} end>
                    {children}
            </NavLink>

        </nav>
    )
}