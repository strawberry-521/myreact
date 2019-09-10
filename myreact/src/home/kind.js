import React, { Component } from 'react'
import "../mockjs/index.js"
import axios from "axios"
import store from "../store/index"
export default class kind extends Component {
    state={datas:[],current:0}
    componentDidMount(){
        axios.get("/list").then(({data})=>{
            this.setState({datas:data})
        })
    }
    clickkindFn(index){
       this.setState({current:index})
    }
    delclickFn(id,item){
        store.dispatch({
            type:"ADD_del",
            item:item,
            
        })
        this.props.history.push({pathname:"/deltail/"+id,query:{id:id}})
    }
    
    render() {
        return (
            <div className="kind">
               <div className="wrap">
                   {this.state.datas.list&&this.state.datas.list.map((item,index)=>
                   <p key={index} onClick={this.clickkindFn.bind(this,index)} className={this.state.current==index?"active":""}>{item.title}</p>)}
               </div>
               <div className="wrapper">
                   {this.state.datas.list&&this.state.datas.list[this.state.current].children.map((item,index)=>
                   <div className="box" key={index} onClick={this.delclickFn.bind(this,item.id,item)}>
                   <img src={item.img}/>
                   <div className="context">
                       <h4>{item.name}</h4>
                       <p>{item.context}</p>
                       <p>{item.txt}</p>
                   </div>
               </div>
                    )}
                   
               </div>
            </div>
        )
    }
}
