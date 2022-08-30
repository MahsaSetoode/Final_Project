import Button from "../button/Button";
import './ErrorModal.css'

const ErrorModal = props => {
    return (
        <div className="backdrop" onClick={props.onConform}>
            <div className="modal">
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    <p>{props.message}</p>
                </div>
                <footer className="actions">
                    <Button onClick={props.onConform}>I Understand</Button>
                </footer>
            </div>
        </div>
    );  
}

export default ErrorModal;