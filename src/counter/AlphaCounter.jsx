import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

export const AlphaCounter = () => {
    const zonaHoraria = "America/La_Paz";

    const horaActual = moment().tz(zonaHoraria).format("HH:mm:ss");
    const horaReal = parseInt(horaActual.split(":")[0]);
    const minutoReal = parseInt(horaActual.split(":")[1]);
    
    const [segundosRestantes, setSegundosRestantes] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        const fechaActual = moment.tz(zonaHoraria);
        const horaActual = fechaActual.clone().startOf("minute");
        let fechaEvento = horaActual.clone();

        if (horaActual.hours() >= 21 || horaActual.hours() < 6) {
            fechaEvento = fechaEvento.add(9, "hours").add(20, "minutes");
        } else if (horaActual.hours() >= 16) {
            fechaEvento = fechaEvento.add(5, "hours").add(20, "minutes");
        } else if (horaActual.hours() >= 12) {
            fechaEvento = fechaEvento.add(4, "hours").add(20, "minutes");
        } else {
            fechaEvento = fechaEvento.add(6, "hours").add(20, "minutes");
        }

        const segundosRestantes = fechaEvento.diff(fechaActual, "seconds");
        setSegundosRestantes(segundosRestantes);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const horas = Math.floor(segundosRestantes / 3600);
    const minutos = Math.floor((segundosRestantes % 3600) / 60);
    const segundos = segundosRestantes % 60;
    
    return (
        <div>
        {
            ((horaReal === 6 || horaReal === 7) && (minutoReal<=59)) ||
            ((horaReal === 12 || horaReal === 13) && (minutoReal<=59)) ||
            ((horaReal === 16 || horaReal === 17) && (minutoReal<=59)) ||
            ((horaReal === 21 || horaReal === 22) && (minutoReal<=59))
        ? (
            <p className="alert alert-danger text-center">
                <b>Podria estar un pokemon Alpha rondando ahora mismo!!</b>
            </p>
            ) 
        : (
            <p className="alert alert-primary text-center">
            {`Tiempo aproximado hasta el proximo Alpha 
            ${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`}
            </p>
            )
        }
        </div>
    );
};