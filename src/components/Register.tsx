import React, { useContext } from 'react'
import {useState} from 'react'
import styles from './login.module.css'
import {OnlineContext} from '../App'
import { Redirect, Link} from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox'

export function Register () {
    const online = useContext(OnlineContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [keep, setKeep] = useState(false)
    const submitHandle = (e:any) => {
        e.preventDefault()
    }
    document.title = '注册'
    if (online) {
        return <Redirect to='/home'/>
    }
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandle} className={styles.form}>
                <label>
                    <input placeholder="用户名"
                    className={styles.input} 
                        onChange={(e) => setName(e.target.value)}></input></label>
                <label>
                    <input placeholder="邮箱"
                        className={styles.input}
                        onChange={(e) => setEmail(e.target.value)}></input>
                </label>
                <label>
                    <input type="password" placeholder="密码" 
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                <input type="submit" className={styles.submit} value="注册"></input>
                <div className={styles.tips}>
                    <label className={styles.checkbox}>
                        <Checkbox color="primary"
                            onChange={(e) => setKeep(e.target.checked)}/>
                        保持登录
                    </label>
                    <Link to="/login"> 已有账户？登录 </Link>
                </div>
            </form>
        </div>
    )
}