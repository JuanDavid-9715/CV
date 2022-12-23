import React, { useState, useEffect } from "react";
import "./../assets/styles/logo.scss";

function Logo({ action }) {
    let [flagAnimacion, setflagAnimacion] = useState(false);
    let [flagStart, setflagStart] = useState(false);

    useEffect(() => {
        if (action == true) {
            setflagStart(true);
        }
    }, [action]);

    const despuesCargar = () => {
        if (flagAnimacion == true) {
        } else {
            setTimeout(() => {
                setflagAnimacion(true);
            }, 1500);
        }
    };

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="logo"
                width="1000px"
                height="1000px"
                viewBox="0 0 1000 1000"
                fill="#000000"
                stroke="#000000"
                strokeWidth="1"
                strokeLinecap="square"
                strokeLinejoin="miter"
                style={
                    flagAnimacion
                        ? action
                            ? {
                                  animation:
                                      "animacionLogoAccion 1s forwards linear",
                              }
                            : flagStart
                            ? {
                                  animation:
                                      "animacionLogoDesactivado 1s forwards linear",
                              }
                            : {}
                        : {
                              animation:
                                  "animacionLogoAccion 1s forwards linear",
                          }
                }
                onLoad={despuesCargar()}
            >
                <polygon
                    className="logo-line1"
                    points="500, 50 103, 844 179.8,844 537.5,124.9"
                    style={
                        flagAnimacion
                            ? action
                                ? {
                                      animation:
                                          "animationLinea1Activado 1.5s forwards linear",
                                  }
                                : flagStart
                                ? {
                                      animation:
                                          "animationLinea1Desactivado 1.5s forwards linear",
                                  }
                                : {}
                            : {
                                  animation:
                                      "animationLinea1Entrada 1s forwards linear",
                              }
                    }
                />
                <polygon
                    className="logo-line2"
                    points="873, 950 950,950 559.7, 169.4 522.3, 245"
                    style={
                        flagAnimacion
                            ? action
                                ? {
                                      animation:
                                          "animationLinea2Activado 1.5s forwards linear",
                                  }
                                : flagStart
                                ? {
                                      animation:
                                          "animationLinea2Desactivado 1.5s forwards linear",
                                  }
                                : {}
                            : {
                                  animation:
                                      "animationLinea2Entrada 1s forwards linear",
                              }
                    }
                />
                <polygon
                    className="logo-line3"
                    points="50, 950 828.1,950 795.3,884 83,884"
                    style={
                        flagAnimacion
                            ? action
                                ? {
                                      animation:
                                          "animationLinea3Activado 1.5s forwards linear",
                                  }
                                : flagStart
                                ? {
                                      animation:
                                          "animationLinea3Desactivado 1.5s forwards linear",
                                  }
                                : {}
                            : {
                                  animation:
                                      "animationLinea3Entrada 1s forwards linear",
                              }
                    }
                />
            </svg>
            <span
                className="logo-letter"
                style={
                    flagAnimacion
                        ? action
                            ? {
                                  animation:
                                      "animationTextActivado 1s forwards linear",
                              }
                            : flagStart
                            ? {
                                  animation:
                                      "animationTextActivado 1s forwards linear",
                              }
                            : {}
                        : {
                              animation:
                                  "animationTextEntrada 1s forwards linear",
                          }
                }
            >
                J
            </span>
        </>
    );
}

export default Logo;
