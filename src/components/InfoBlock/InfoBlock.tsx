import React from "react"
import { cn } from '@bem-react/classname';
import "./InfoBlock.scss"

class InfoBlock extends React.Component {
    render() {
        const cnInfoBlock = cn("InfoBlock");
        return (
            <div className={cnInfoBlock()}>
                <div >
                        <p className={cnInfoBlock("Title", { h2: true })}>Электронная очередь в детские сады Республики Крым</p>
                        <p className={cnInfoBlock("Content")}>Официальный сайт электронной услуги «Прием заявлений, постановка на учет и зачисление детей в образовательные учреждения, реализующие основную образовательную программу дошкольного образования (детские сады) Республики Крым»</p>
                </div>
                <div>
                        <p className={cnInfoBlock("Title", { h1: true })}>13 258</p>
                        <p className={cnInfoBlock("Content")}>Общее количество свободных мест во всех детских садах Республики Крым </p>
                </div>
            </div>
        );
    }
}

export default InfoBlock;