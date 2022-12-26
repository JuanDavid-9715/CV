import "./../assets/styles/contact.scss";
import emailjs from "emailjs-com";
import AlertSuccess, { AlertError } from "./AlertGroup";

function Contact() {
    const sendmMail = (e) => {
        e.preventDefault();

        const userID = "aDvU77emq91jxnLS2";
        const serviceID = "service_724sikh";
        const templateID = "template_pqtjssf";

        emailjs.sendForm(serviceID, templateID, e.target, userID).then(
            () => {
                AlertSuccess("Se ha enviado correctamente.");
            },
            (res) => {
                AlertError(res.status, res.text);
            }
        );
    };

    return (
        <div className="conteiner-contact">
            <div className="container-contact-color">
                <div className="container-description">
                    <div className="container-title container-title-contact">
                        <h3 className="title">CONTACTO</h3>
                    </div>
                    <div className="container-text">
                        <p className="text-description">
                            Me puedes contactar mediante el siguiente
                            formulario, tambien a mi correo o numero de celular
                        </p>
                        <p className="text-emal">
                            <span>Correo: </span>
                            medellincalderonjuandavid@gmail.com
                        </p>
                        <p className="text-tel">
                            <span>Tel: </span>3003272002
                        </p>
                    </div>
                </div>
                <div className="container-form">
                    <form
                        className="form"
                        onSubmit={sendmMail}
                        autoComplete="on"
                    >
                        <input
                            className="input input-name"
                            type="text"
                            name="name"
                            placeholder="nombre"
                            required
                        />
                        <input
                            className="input input-email"
                            type="email"
                            name="email"
                            placeholder="correo"
                            required
                        />
                        <input
                            className="input input-tel"
                            type="tel"
                            name="tel"
                            placeholder="telefono"
                            required
                        />
                        <textarea
                            className="input-message"
                            type="text"
                            name="message"
                        />
                        <input
                            className="input-button"
                            type="submit"
                            value="Enviar"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
