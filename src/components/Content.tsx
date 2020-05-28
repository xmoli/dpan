import React from 'react'
import {useState} from 'react'
import {myFile} from './File'
import {List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import {Link} from 'react-router-dom'
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
    document.title = "云文件"
    document.onselectstart = function(){return false}
    document.onkeypress = (e) => {
        e.preventDefault()
        switch (e.key) {
            case 'a':
            case 'A':
                toggleAllChecked()
                break
            }
        }
    const [checked, setChecked] = useState(new Array(pros.content.length).fill(false))
    const [allChecked, setAllChecked] = useState(false)
    /* const [shiftKey, setShiftKey] = useState(false) */
    const toggleChecked = (i : number) => {
            checked[i] = !checked[i]
            let count = checked.filter(i => i)
            if (count.length === pros.content.length) {
                setAllChecked(true)
            } else {
                setAllChecked(false)
                setChecked(checked.slice(0,checked.length))
            }
    }
    const toggleAllChecked = () => {
        let hasChecked = checked.reduce( (pre,cur) => pre||cur)
        let newChecked = new Array(pros.content.length).fill(!hasChecked)
        setAllChecked(!hasChecked)
        setChecked(newChecked)
    }
    switch (pros.display) {
        case DISPLAY.list :
        default:
            return (
                <Container maxWidth="md" className={clsx(styles.content)}>
                    <Grid item lg={3} md={2} xs={false}/>
                    <Grid item lg={6} sm={10} xs={12}>
                    <Paper className={styles.mypaper}>
                        <List className={clsx(styles.listAll,allChecked && styles.listAllChecked)} >
                        {
                            pros.content.map((i,index)=>{
                                return  <ListItem key={index.toString()}
                                            className={clsx(styles.listItem,
                                                !allChecked && checked[index] && styles.listItemChecked,
                                            )}
                                        >
                                            <ListItemIcon className={styles.checkbox}>
                                                <Checkbox color="primary"
                                                    checked={checked[index]}
                                                    onClick={(e)=> { e.preventDefault();toggleChecked(index)}}
                                                />
                                            </ListItemIcon>
                                            <Link to="" className={styles.link}>
                                                <i className={clsx("fa","fa-lg","fa-folder")}></i>
                                                <ListItemText>{i.name}</ListItemText>
                                                <ListItemText>{i.size}</ListItemText>
                                                <ListItemText>{i.uploadDate}</ListItemText>
                                            </Link>
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