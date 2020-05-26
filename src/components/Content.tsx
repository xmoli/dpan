import React from 'react'
import {myFile} from './File'
import {List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'
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
                <Grid container className={clsx(styles.content)}>
                    <Grid item lg={3} md={2} xs={false}/>
                    <Grid item lg={6} md={7} sm={10} xs={12}>
                    <List >
                    {
                        pros.content.map((i,index)=>{
                            return  <ListItem key={index.toString()}>
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
                    </Grid>
                </Grid>
            )
    }
}