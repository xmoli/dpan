import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import {Link} from 'react-router-dom'
import styles from './nav.module.css'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {Toolbar, AppBar} from '@material-ui/core'

const useStyles = makeStyles( theme => ({
    appbar: {
        zIndex: theme.zIndex.drawer+1
    }
}))
export default function Nav (pros: any) {
    const classes = useStyles()
    return (
            <AppBar className={clsx(styles.nav, classes.appbar)}>
                <Container maxWidth="md">
                <Toolbar>
                    <IconButton className={styles.link} color="inherit"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></IconButton>
                    <Button color="inherit" className={styles.link}>上传</Button>
                    <Button color="inherit" className={styles.link}>下载</Button>
                    <Breadcrumbs separator="">
                            <Link to='/home'><Button className={styles.link} color="inherit">返回上一级</Button></Link>
                            <Link to='/home'><Button className={styles.link} color="inherit">全部文件</Button></Link>
                    </Breadcrumbs>
                </Toolbar>
                </Container>
            </AppBar>
    )
}