import React, { useContext } from 'react'
import styles from './login.module.css'
import {OnlineContext} from '../App'
import { Redirect } from 'react-router-dom'

export function Login () {
    const online = useContext(OnlineContext)
    const submitHandle = (e:any) => {
        e.preventDefault()
    }
    document.title = '登录'
    if (online) {
        return <Redirect to='/home'/>
    }
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandle} className={styles.form}>
                <label><input placeholder="用户名"></input></label>
                <label><input type="password" placeholder="密码"></input></label>
                <input type="submit" className={styles.submit}></input>
            </form>
        </div>
    )
}