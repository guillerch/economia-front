import { useFetch } from "../../hooks"
import { CuerpoBayas } from "./CuerpoBayas"

export const CollapseBaya = ({hora}) => {
    const url = 'https://msgmanager.tk/api/bayapokemmo123456/';
    const {data}=useFetch(url);
    const dataFiltradas = (data) =>{
        return data.filter(data => data.time === hora)
    }
    const bayas = dataFiltradas(data);
    return (
        <div className="collapse" id={`time-${hora}`}>
            <div className="card card-body">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Semillas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bayas.map(berry =>(
                            <CuerpoBayas key={berry.id} baya={berry}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
