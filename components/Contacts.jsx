import { useState } from "react";

function Contacts({ changeModal }) {

    // input values

    const [textValue, setTextValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [numberValue, setNumberValue] = useState("");

    // invalid input states

    const [invalidText, setInvalidText] = useState(false);
    const [invalidName, setInvalidName] = useState(false);
    const [invalidNumber, setInvalidNumber] = useState(false);

    // change values and invalids functions

    function changeNumber(item) {
        setNumberValue(item);
        setInvalidNumber(false);
    };

    function changeName(item) {
        setNameValue(item);
        setInvalidName(false);
    };

    function changeEmail(item) {
        setEmailValue(item);
        setInvalidName(false);
    };

    function changeText(item) {
        setTextValue(item);
        setInvalidText(false);
    };

    // send message to telegram bot

    let bot = {
        TOKEN: "5862863897:AAFFFwOGs_rshjDrS07WwpIKNk1KtFgGnZ4",
        chatID: "-1001716267644",
        message: `%0AIsmi: ${nameValue}; %0ATelefon raqami: ${numberValue}; %0AEmaili: ${emailValue}; %0AXabar: ${textValue}`
    };

    function sendMessage() {
        if (nameValue === "") {
            setInvalidName(true)
        } else if (numberValue === "" && emailValue === "") {
            setInvalidNumber(true)
        } else {
            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `, {
                method: "GET"
            })
                .then(success => {
                    console.log('send message')
                }, error => {
                    console.log(error)
                })

            changeModal();
            setNameValue("");
            setTextValue("");
            setEmailValue("");
            setNumberValue("");
        }
    };

    return (
        <div className="Contacts parent" id="contacts">
            <div className="wrapper">
                <div className="texts">
                    <h1 className="title">Bu yerda menga o’z xabaringizni qoldiring</h1>
                    <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda error, reiciendis nobis inventore similique obcaecati vitae cum saepe officia optio molestias alias.</p>
                    <div className="social">
                        <a href="tel:+99894-913-15-01" className="icon">
                            <i className="fa fa-phone"></i>
                            +99894 913 15 01
                        </a>
                        <a href="mailto:jumanovsafarali@gmail.com" className="icon">
                            <i className="fa fa-envelope-o"></i>
                            jumanovsafarali@gmail
                        </a>
                        <a href="https://t.me/ali_web_dev" className="icon">
                            <i className="fa fa-telegram"></i>
                            @ali_web_dev
                        </a>
                        <a href="https://www.facebook.com/safarali.jumanov.14" className="icon">
                            <i className="fa fa-facebook"></i>
                            safarali.jumanov.14
                        </a>
                        <a href="https://www.instagram.com/jumanov.safarali/" className="icon">
                            <i className="fa fa-instagram"></i>
                            jumanov.safarali
                        </a>
                        <a href="https://github.com/alijumanov" className="icon">
                            <i className="fa fa-github"></i>
                            github.com/alijumanov
                        </a>
                    </div>
                </div>
                <div className="forms">
                    <input type="text" className={`form-input ${invalidName && "red-line"}`} value={nameValue} onChange={(e) => changeName(e.target.value)} placeholder="Ismingiz" />
                    <input type="number" className={`form-input ${invalidNumber && "red-line"}`} value={numberValue} onChange={(e) => changeNumber(e.target.value)} placeholder="Telefon raqamingiz" />
                    <input type="text" className="form-input" value={emailValue} onChange={(e) => changeEmail(e.target.value)} placeholder="Emailingiz" />
                    <textarea rows="6" className='form-input' value={textValue} onChange={(e) => changeText(e.target.value)} placeholder="Xabar..."></textarea>
                    <div className="send-btn">
                        <button onClick={() => sendMessage()}>Yuborish</button>
                    </div>
                </div>
            </div>
            <div className="footer">Mualliflik huquqi | Safarali Jumanov tomonidan ishlab chiqilgan</div>
        </div>
    )
};

export default Contacts;