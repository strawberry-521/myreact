import React, { Component } from 'react'
import {HashRouter,Route,Switch,Redirect,NavLink} from "react-router-dom"
import My from "../home/my"
import Hot from "../home/hot"
import Kind from "../home/kind"
import Good from "../home/good"

export default class componentName extends Component {
    render() {
        return (
            <div className="home">
                <div className="header">
                    <p><img src="./images/erji.png"/>想听FM</p>
                    <input type="text" className="iconfont" placeholder="&#xe65c;抖音"/>
              
                </div>
                <div className="lists">
                    <NavLink to="/home/my">我的</NavLink>
                    <NavLink to="/home/hot">热门</NavLink>
                    <NavLink to="/home/kind">分类</NavLink>
                    <NavLink to="/home/good">精品</NavLink>
                </div>
                <div className="main">
                <HashRouter>
                    <Route path="/home/my" component={My}></Route>
                    <Route path="/home/hot" component={Hot}></Route>
                    <Route path="/home/kind" component={Kind}></Route>
                    <Route path="/home/good" component={Good}></Route>
                    {/* <Redirect to="/home/my"></Redirect> */}
                </HashRouter>
                </div>
                <div className="footer">
                    <span className="iconfont">&#xe679;</span>
                    <div className="start">
                        <span>鹿晗想听FM，全...</span>
                        <p>鹿晗</p>
                    </div>
                    <p className="math">3</p>
                </div>
            </div>
        )
    }
}
