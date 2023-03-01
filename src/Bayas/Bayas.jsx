import { CollapseBaya,TituloBayas } from "./components";

const horas = [16,20,42,44,67];
export const Bayas = () => {
    
    return (
        <>
        <div className='container mt-2 text-center animate__animated animate__fadeIn'>
            <h3 className='general_color'>
                <b>Bayas</b>
            </h3>
            <p className='general_color'>
                En esta sección, se muestran todas las bayas de Pokémon clasificadas por tiempo de crecimiento. Las bayas se ordenan en filas por tiempo de crecimiento, desde la baya más rápida hasta la más lenta, y se muestran el nombre, la imagen, el tiempo de crecimiento y una descripción breve. 
                Esto permite a los usuarios encontrar rápidamente las bayas que tardan menos tiempo en crecer y planificar su cosecha en función del tiempo de crecimiento.
            </p>
        </div>
        <div className="container text-center mb-4 pt-4 animate__animated animate__fadeIn">
            <div className="row">
                <p>
                    {horas.map(hora =>(
                        <TituloBayas
                            key={hora}
                            hora={hora}/>
                    ))}
                </p>
                {horas.map(hora => (
                    <CollapseBaya
                        key={hora}
                        hora={hora}/>
                ))}
            </div>
        </div>
        </>
    )
}