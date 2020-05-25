import React from 'react'
import {myFile} from './File'
import {List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import 'font-awesome/css/font-awesome.min.css'

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
    switch (pros.display) {
        case DISPLAY.list :
        default:
            return (
                <List >
                {
                    pros.content.map((i)=>{
                        return  <ListItem>
                                    <Checkbox/>
                                    <ListItemIcon><i className="fas fa-folder"></i></ListItemIcon>
                                    <ListItemText>{i.name}</ListItemText>
                                    <ListItemText>{i.type}</ListItemText>
                                    <ListItemText>{i.uploadDate}</ListItemText>
                                </ListItem>
                    })
                }
                </List>
            )
    }
}