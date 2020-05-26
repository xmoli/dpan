import React from 'react'
import {useState} from 'react'
import Drawer from '@material-ui/core/Drawer'
import {List, ListItem, ListItemText, ListItemIcon, Hidden} from '@material-ui/core'
import styles from './sidebar.module.css'

export default function Sidebar () {
    return (
        <Hidden smDown implementation="css">
        <Drawer variant="permanent" className={styles.drawer}>
            <div style={{height:'7rem',width:'100%'}}/>
            <List className={styles.list}>
                <ListItem button>
                    <ListItemText>图片</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>文档</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>视频</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>音乐</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>种子</ListItemText>
                </ListItem>
            </List>
        </Drawer>
        </Hidden>
    )
}