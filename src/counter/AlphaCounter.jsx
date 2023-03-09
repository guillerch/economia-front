import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

export const AlphaCounter = () => {
    const zonaHoraria = "America/La_Paz";

    const obtenerFechaReferencia = () => {
        return moment.tz("2023-03-08T21:00:00", zonaHoraria);
    };

    const [fechaReferencia, setFechaReferencia] = useState(
        obtenerFechaReferencia()
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
        setFechaReferencia(obtenerFechaReferencia());
        }, 60 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    const [ultimoEvento, setUltimoEvento] = useState(
        fechaReferencia.toDate()
    );

    const fechaInicio = moment(fechaReferencia)
        .add(5, "hours")
        .toDate();

    const [segundosRestantes, setSegundosRestantes] = useState(
        Math.floor((fechaInicio - new Date()) / 1000)
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
        setSegundosRestantes((prevSegundos) => prevSegundos - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (segundosRestantes <= 0) {
        setUltimoEvento(new Date());
        setSegundosRestantes(5 * 60 * 60);
        }
    }, [segundosRestantes]);

    const horas = Math.floor(segundosRestantes / 3600);
    const minutos = Math.floor((segundosRestantes % 3600) / 60);
    const segundos = segundosRestantes % 60;

    return (
        <div>
        {horas <= 1 || horas >= 4 ? (
            <p className="alert alert-danger text-center">
            <b>Podria estar un pokemon Alpha rondando ahora mismo!!</b>
            </p>
        ) : (
            <p className="alert alert-primary text-center">
            {`Tiempo aproximado hasta el proximo Alpha ${horas
                .toString()
                .padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos
                .toString()
                .padStart(2, "0")}`}
            </p>
        )}
        </div>
    );
};