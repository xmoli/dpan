import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'
import Logo from './Logo'

export default function Nav (pros: any) {
    return (
        <AppBar position='static'>
            <Grid container>
                <Grid item>
                    <Logo/>
                </Grid>
                <Grid item>
                    <Breadcrumbs>
                        <Link to='/home'><Button>返回上一级</Button></Link>
                        <Link to='/home'><Button>全部文件</Button></Link>
                        
                    </Breadcrumbs>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item/>
                <Grid item>
                    <ButtonGroup>
                        <Button>上传</Button>
                        <Button>新建文件夹</Button>
                        <Button>离线下载</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>下载</Button>
                        <Button>重命名</Button>
                        <Button>复制到</Button>
                        <Button>移动到</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </AppBar>
    )
}