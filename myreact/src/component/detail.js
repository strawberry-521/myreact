import React, { Component } from 'react'
import "../mockjs/index"
import axios from "axios"
import store from "../store/index"
export default class componentName extends Component {
    componentDidMount(){
        // axios.get("/list").then(({data})=>{
        //     console.log(data)
        // })
    }
    render() {
        let list=store.getState()
        return (
            <div className="del">
                <img src={list.img}/> <span>{list.name}</span>
            </div>
        )
    }
}
