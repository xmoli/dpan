import React, { useContext } from 'react'
import {useState} from 'react'
import { Redirect } from 'react-router-dom'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Tool from './Tool'
import Content from './Content'
import {myFile, TYPE} from './File'
import { myRequest } from '../Request'
import {DISPLAY} from './Content'

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
export function Home (pros: any) {

    const [display,setDisplay] = useState(DISPLAY.list)
    const [content, setContent] = useState([
        {name:'not found',type: TYPE.direct, uploadDate: new Date(), size: 0}
    ])
    const online = useContext(pros.OnlineContext)
    if (!online) {
        <Redirect to='login'/>
    }
    if (pros.routeParams) {
        fetchHome()
            .then(c => setContent(c))
    } else {
        fetchPath(pros.routeParams.path)
            .then( c => setContent(c))
    }
    return (
        <>
        <Nav />
        <Sidebar/>
        <Content display={display} content={content}/>
        <Tool/>
        </>
    )
}