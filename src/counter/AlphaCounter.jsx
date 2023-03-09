import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

export const AlphaCounter = () => {
    const zonaHoraria = "America/La_Paz";
    const [segundosRestantes, setSegundosRestantes] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        const fechaActual = moment.tz(zonaHoraria);
        const horaActual = fechaActual.hour();

        const horaProximoEvento = (() => {
            if (horaActual >= 21 || horaActual < 6) {
            return { hora: 6, minuto: 20 };
            } else if (horaActual >= 16) {
            return { hora: 21, minuto: 20 };
            } else if (horaActual >= 12) {
            return { hora: 16, minuto: 20 };
            } else {
            return { hora: 12, minuto: 20 };
            }
        })();

        const fechaProximoEvento = fechaActual
            .clone()
            .hour(horaProximoEvento.hora)
            .minute(horaProximoEvento.minuto)
            .second(0);

        const segundosRestantes = fechaProximoEvento.diff(fechaActual, "seconds");
        setSegundosRestantes(segundosRestantes);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [segundosRestantes]);

    const horas = Math.floor(segundosRestantes / 3600);
    const minutos = Math.floor((segundosRestantes % 3600) / 60);
    const segundos = segundosRestantes % 60;

    const horaActual = moment.tz(zonaHoraria).hour();
    const minutoReal = moment.tz(zonaHoraria).minute();
    return (
        <div>
        {((horaActual === 6 || horaActual === 7) && minutoReal <= 59) ||
        ((horaActual === 12 || horaActual === 13) && minutoReal <= 59) ||
        ((horaActual === 16 || horaActual === 17) && minutoReal <= 59) ||
        ((horaActual === 21 || horaActual === 22) && minutoReal <= 59)
        ? (
            <p className="alert alert-danger text-center">
            <b>Podria estar un pokemon Alpha rondando ahora mismo!!</b>
            </p>
        )
        : (
            <p className="alert alert-primary text-center">
            {`Tiempo aproximado hasta el proximo Alpha 
                ${horas.toString().padStart(2, "0")}:${minutos
                .toString()
                .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`}
            </p>
                )
            }
            </div>
        );
    };