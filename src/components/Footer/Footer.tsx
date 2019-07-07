import React, { Component } from 'react'
import "./Footer.scss"
import img from "../../assets/Лого кр течь.png"


export class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <div className="Footer-Wrapper">
                    <div className="Footer-Info">Разработано при поддержке Министрества образования, науки и молодежи Республики Крым и Министерства внутренней политики, информации и связи Республики Крым</div>
                    <div className="Footer-Sign">
                        <img src={img} className="Footer-Logo" alt="Крымтехнологии"/>
                        <div className="Footer-Text">Разработка и поддержка ГУП РК «Крымтехнологии»</div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
