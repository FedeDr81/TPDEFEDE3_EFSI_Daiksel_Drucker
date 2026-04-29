import { useState } from 'react';
import Listado from '../Listado/Index.jsx';

import './formulario.css'

const Formulario = ({ agregarCitas }) => {

    const enviarFormulario = (e) => {
        e.preventDefault();

        const nuevaCita = {
            Mascota: e.target.mascota.value,
            Dueño: e.target.propietario.value,
            Fecha: e.target.fecha.value,
            Hora: e.target.hora.value,
            Sintomas: e.target.sintomas.value
        };

        agregarCitas((prevCitas) => [...prevCitas, nuevaCita]);
        e.target.reset();
    };


    return (
        <form onSubmit={enviarFormulario}>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"/>

            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota"/>

            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width"/>

            <label>hora</label>
            <input type="time" name="hora" className="u-full-width"/>

            <label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width"></textarea>

            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </form>
    )
}
export default Formulario;