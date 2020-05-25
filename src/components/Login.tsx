import React from 'react'
import makeStyles from '@material-ui/styles'

export function Login () {
    return (
        <form>
            <input placeholder="用户名"></input>
            <input type="password" placeholder="密码"></input>
        </form>
    )
}