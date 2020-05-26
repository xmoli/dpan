import React  from 'react'
import {Link} from 'react-router-dom'
import styles from './logo.module.css'
export default function Logo () {
    return (
        <Link to='/home' className={styles.logo}>
            <img src="" alt="主页"/>
        </Link>
    )
}