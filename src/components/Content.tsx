import React from 'react'
import {myFile} from './File'
import {List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import styles from './content.module.css'
import clsx from 'clsx'
export enum DISPLAY{
    block,
    bigBlock,
    smallBlock,
    list,
    bigList,
    smallList
}
export interface ContentPros {
    display: DISPLAY,
    content: Array<myFile>
}
export default function Content (pros: ContentPros) {
    document.onselectstart = function(){return false}
    switch (pros.display) {
        case DISPLAY.list :
        default:
            return (
                <Container maxWidth="md" className={clsx(styles.content)}>
                    <Grid item lg={3} md={2} xs={false}/>
                    <Grid item lg={6} sm={10} xs={12}>
                    <Paper className={styles.mypaper}>
                        <List >
                        {
                            pros.content.map((i,index)=>{
                                return  <ListItem key={index.toString()} className={styles.listItem}>
                                            <ListItemIcon className={styles.checkbox}>
                                                <Checkbox color="primary"/>
                                                <i className={clsx("fa","fa-lg","fa-folder")}></i></ListItemIcon>
                                            <ListItemText>{i.name}</ListItemText>
                                            <ListItemText>{i.size}</ListItemText>
                                            <ListItemText>{i.uploadDate}</ListItemText>
                                        </ListItem>
                            })
                        }
                        </List>
                    </Paper>
                    </Grid>
                </Container>
            )
    }
}