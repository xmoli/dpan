import React from 'react'
import styles from './login.module.css'

export function Login () {
    const submitHandle = (e:any) => {
        e.preventDefault()
    }
    document.title = '登录'
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