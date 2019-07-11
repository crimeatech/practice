import React, { Component } from 'react'
import { cn } from '@bem-react/classname';
import "./FeedbackForm.scss"

interface FormProps {
    close : () => void
}

interface FormState {
    valid: boolean
}

export class FeedbackModal extends Component<FormProps, FormState> { 
    constructor(props: FormProps) {
        super(props);
        this.state = {
            valid: true
        };
    }

    submit = (e:any) => {e.preventDefault();this.setState({valid: false});}

    render() {
        const cnFeedbackModal = cn("FeedbackModal");
        return ( 
            <div className={cnFeedbackModal()}>
                <div className={cnFeedbackModal("Overlay")}></div>
                <div className={cnFeedbackModal("Window")}>
                    <div className={cnFeedbackModal("Header")}>
                        <div className={cnFeedbackModal("Title")}>Обратная связь</div>
                        <div className={cnFeedbackModal("Close")} onClick={this.props.close}></div>
                    </div>
                    <form className={cnFeedbackModal("Form")}>
                        <div className={cnFeedbackModal("Name")}>
                            <label htmlFor="name">Имя *</label>  
                            <input type="text" id="name" required/> 
                            <div className={cnFeedbackModal("Error", {notvalid: !this.state.valid})}>Поле является обязательным для заполнения</div>
                        </div>
                        <div className={cnFeedbackModal("Email")}>
                            <label htmlFor="email">Электронная почта *</label>     
                            <input type="email" id="email" required/> 
                            <div className={cnFeedbackModal("Error", {notvalid: !this.state.valid})}>Поле является обязательным для заполнения</div>
                        </div>
                        <div className={cnFeedbackModal("Select")}>
                            <label htmlFor="select">Муниципальное образование *</label> 
                            <select id="select" required>
                                <option value="" disabled hidden>Выбрать муниципалитет</option>
                                <option value="simf">Симферополь</option>
                                <option value="yalta">Ялта</option>
                                <option value="kerch">Керчь</option>
                                <option value="sev">Севастополь</option>
                            </select>
                            <div className={cnFeedbackModal("Error", {notvalid: !this.state.valid})}>Поле является обязательным для заполнения</div>
                        </div>    
                        <div className={cnFeedbackModal("Textarea")}>
                            <label htmlFor="textarea">Текст сообщения *</label>     
                            <input type="textarea" id="textarea" required/> 
                            <div className={cnFeedbackModal("Error", {notvalid: !this.state.valid})}>Поле является обязательным для заполнения</div>
                        </div>
                        <button type="submit" className={cnFeedbackModal("Button")} onClick={this.submit}>Отправить</button>
                    </form>
                </div> 
            </div>
        )
    }
}

export default FeedbackModal;
