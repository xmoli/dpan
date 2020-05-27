import React, { useContext } from 'react'
import {useState} from 'react'
import { Redirect } from 'react-router-dom'
import Nav from './Nav'
import Tool from './Tool'
import Content from './Content'
import {TYPE} from './File'
import { myRequest } from '../Request'
import {DISPLAY} from './Content'
import styles from './home.module.css'

async function fetchHome (){
    const res = await fetch(new myRequest().request())
    const json = await res.json()
    const result = json
    return result
}
async function fetchPath (path: string){
    const res = await fetch(new myRequest().request())
    const json = await res.json()
    const result = json
    return result
}
export default function Home (pros: any) {

    const [display,setDisplay] = useState(DISPLAY.list)
    const [content, setContent] = useState([
        {name:'not found1',type: TYPE.direct, uploadDate: new Date().getTime(), size: 0},
        {name:'not found2',type: TYPE.direct, uploadDate: new Date().getTime(), size: 0},
        {name:'not found3',type: TYPE.direct, uploadDate: new Date().getTime(), size: 0},
        {name:'not found4',type: TYPE.direct, uploadDate: new Date().getTime(), size: 0},
        {name:'not found5',type: TYPE.direct, uploadDate: new Date().getTime(), size: 0},
        {name:'not found6',type: TYPE.direct, uploadDate: new Date().getTime(), size: 0},
        {name:'not found7',type: TYPE.direct, uploadDate: new Date().getTime(), size: 0}
    ])
    const online = useContext(React.createContext(true))

    if (!online) {
        return <Redirect to='login'/>
    }
    if (pros.routeParams) {
        fetchHome()
            .then(c => setContent(c))
    } /* else {
        fetchPath(pros.routeParams.path)
            .then( c => setContent(c))
    } */
    return (
        <React.Fragment>
        <Nav />
        {/* <Sidebar/> */}
        <Content display={display} content={content}/>
        <Tool/>
        </React.Fragment>
    )
}