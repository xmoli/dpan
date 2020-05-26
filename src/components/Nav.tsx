import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Grid from '@material-ui/core/Grid'
import Hidden from  '@material-ui/core/Hidden'
import {Link} from 'react-router-dom'
import Logo from './Logo'
import styles from './nav.module.css'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles( theme => ({
    appbar: {
        zIndex: theme.zIndex.drawer+1
    }
}))
export default function Nav (pros: any) {
    const classes = useStyles()
    return (
        <AppBar position='fixed' className={clsx([classes.appbar,styles.nav])}>
            <Grid container>
                <Grid item md={3}>
                    <Logo/>
                </Grid>
                <Grid item>
                    <Breadcrumbs>
                        <Link to='/home' style={{color: 'white'}}><Button color="inherit">返回上一级</Button></Link>
                        <Link to='/home' style={{color: 'white'}}><Button color="inherit">全部文件</Button></Link>
                    </Breadcrumbs>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={3} md= {2} sm={2} xs={false}/>
                <Grid item lg={6} md={7} sm={8} className={styles.operationBar}>
                    <ButtonGroup>
                        <Button  color="primary" variant="contained" style={{minWidth: '56px'}}>上传</Button>
                        <Button  variant="contained">新建文件夹</Button>
                        <Button variant="contained">离线下载</Button>
                    </ButtonGroup>
                    <Hidden smDown implementation="css">
                        <ButtonGroup>
                            <Button variant="contained">下载</Button>
                            <Button variant="contained">重命名</Button>
                            <Button variant="contained">复制到</Button>
                            <Button variant="contained">移动到</Button>
                        </ButtonGroup>
                    </Hidden>
                </Grid>
            </Grid>
        </AppBar>
    )
}