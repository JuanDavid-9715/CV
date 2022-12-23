import "./../assets/styles/navigationBarButton.scss";

function NavegationButton({ type, name, link }) {
    const classtype = type !== "" ? type : "";

    return (
        <li className="option">
            <div className={`button-link ${classtype}`}></div>
            <a className={`link ${classtype}`} href={link}>
                {name}
            </a>
        </li>
    );
}

export default NavegationButton;
