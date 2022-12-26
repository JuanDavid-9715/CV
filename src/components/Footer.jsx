import "./../assets/styles/footer.scss";
import Logo from "./Logo";

function Footer() {
    return (
        <footer className="footer">
            <div className="conteiner-logo conteiner-logo-footer">
                <a className="button-logo">
                    <Logo action={false} />
                </a>
            </div>
            <div className="conteiner-text-footer">
                <p className="text-footer">
                    <span className="">fecha</span> Creado por Juan David
                    Medellin Calderon
                </p>
            </div>
        </footer>
    );
}

export default Footer;
