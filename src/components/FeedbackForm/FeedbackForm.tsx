import React, { Component } from 'react'
import { cn } from '@bem-react/classname';
import "./FeedbackForm.scss"

interface FormProps {
    close : () => void
}

export class FeedbackForm extends Component<FormProps, {}> { 
    render() {
        const cnFeedbackContainer = cn("FeedbackContainer");
        return (
            <div className={cnFeedbackContainer()}>
                <div className={cnFeedbackContainer("Header")}>
                    <div className={cnFeedbackContainer("Title")}>Обратная связь</div>
                    <div className={cnFeedbackContainer("Close")} onClick={this.props.close}></div>
                </div>
                <form className={cnFeedbackContainer("Form")}>
                    <div className={cnFeedbackContainer("Name")}>
                        <label htmlFor="name">Имя *</label>  
                        <input type="text" id="name" required/> 
                    </div>
                    <div className={cnFeedbackContainer("Email")}>
                        <label htmlFor="email">Электронная почта *</label>     
                        <input type="email" id="email" required/> 
                    </div>
                    <div className={cnFeedbackContainer("Select")}>
                        <label htmlFor="select">Муниципальное образование *</label> 
                            <select id="select" required>
                                <option value="" disabled selected hidden>Выбрать муниципалитет</option>
                                <option value="simf">Симферополь</option>
                                <option value="yalta">Ялта</option>
                                <option value="kerch">Керчь</option>
                                <option value="sev">Севастополь</option>
                            </select>
                    </div>    
                    <div className={cnFeedbackContainer("Textarea")}>
                        <label htmlFor="textarea">Текст сообщения *</label>     
                        <input type="textarea" id="textarea"/> 
                    </div>
                    <button type="submit" className={cnFeedbackContainer("Button")}>Отправить</button>
                </form>
            </div>
        )
    }
}

export default FeedbackForm;
