import React, { useState } from "react";
import "./../assets/styles/navigationBar.scss";
import NavegationButton from "./NavegationBarButton";
import Logo from "./Logo";

function NavigationBar() {
    const [flagMenuMobil, setFlag] = useState(false);

    return (
        <header className="conteiner-navigationBar">
            <div className="conteiner-logo">
                <button
                    className="button-logo"
                    onClick={() => {
                        screen.width < 600
                            ? flagMenuMobil
                                ? setFlag(false)
                                : setFlag(true)
                            : setFlag(false);
                    }}
                >
                    <Logo action={flagMenuMobil} />
                </button>
            </div>
            <nav
                className="conteiner-menu"
                style={
                    screen.width < 600
                        ? flagMenuMobil
                            ? { top: "69px" }
                            : { top: "-220px" }
                        : { top: "0px" }
                }
            >
                <ul className="menu">
                    <NavegationButton
                        type={"yellow"}
                        name={"INICIO"}
                        link={1}
                    />
                    <NavegationButton
                        type={"green"}
                        name={"COMPETENCIAS"}
                        link={2}
                    />
                    <NavegationButton
                        type={"blue"}
                        name={"EXPERIENCIA"}
                        link={3}
                    />
                    <NavegationButton
                        type={"purple"}
                        name={"PORTAFOLIO"}
                        link={4}
                    />
                    <NavegationButton
                        type={"pink"}
                        name={"CONTACTO"}
                        link={5}
                    />
                </ul>
            </nav>
        </header>
    );
}

export default NavigationBar;
