import React, { useContext } from 'react'
import {useState} from 'react'
import styles from './login.module.css'
import {OnlineContext} from '../App'
import { Redirect, Link} from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox'
import FormLabel from '@material-ui/core/FormLabel'

export function Login () {
    const online = useContext(OnlineContext)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [keep, setKeep] = useState(false)
    const submitHandle = (e:any) => {
        e.preventDefault()
    }
    document.title = '登录'
    if (online) {
        return <Redirect to='/home'/>
    }
    return (
        <div className={styles.container}>
            {/* <h1 className={styles.h1}>登录</h1> */}
            <form onSubmit={submitHandle} className={styles.form}>
                <label>
                    <input placeholder="用户名/邮箱" 
                    className={styles.input}
                    onChange={(e) => setName(e.target.value)}></input></label>
                <label>
                    <input type="password" placeholder="密码" 
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                <input type="submit" className={styles.submit} value="登录"></input>
                <div className={styles.tips}>
                    <label>
                        <Checkbox color="primary"
                            onChange={(e) => setKeep(e.target.checked)}/>
                        保持登录
                    </label>
                    <label>
                    <Link to="/register" color="primary">没有账户？注册</Link>
                    </label>
                </div>
            </form>
        </div>
    )
}