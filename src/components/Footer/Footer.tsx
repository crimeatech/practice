import React, { Component } from 'react'
import { cn } from '@bem-react/classname';
import "./Footer.scss"
import img from "../../assets/krtechlogo.png"


export class Footer extends Component {
    render() {
        const cnFooter = cn("Footer");
        return (
            <footer className={cnFooter()}>
                <div className={cnFooter("Wrapper")}>
                    <div className={cnFooter("Info")}>Разработано при поддержке Министрества образования, науки и молодежи Республики Крым и Министерства внутренней политики, информации и связи Республики Крым</div>
                    <div className={cnFooter("Sign")}>
                        <img src={img} className={cnFooter("Logo")} alt="Крымтехнологии"/>
                        <div className={cnFooter("Text")}>Разработка и поддержка ГУП РК «Крымтехнологии»</div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
