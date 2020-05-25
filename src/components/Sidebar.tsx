import React from 'react'
import {useState} from 'react'
import Drawer from '@material-ui/core/Drawer'
import {List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
export default function Sidebar () {
    const [anchor, setAnchor] = useState(true)
    return (
        <Drawer variant="permanent">
            <List>
                <ListItem>
                    <ListItemText>图片</ListItemText>
                    <ListItemText>文档</ListItemText>
                    <ListItemText>视频</ListItemText>
                    <ListItemText>音乐</ListItemText>
                    <ListItemText>种子</ListItemText>
                </ListItem>
            </List>
        </Drawer>
    )
}