
import { BayaList } from "../helpers/BayaList"
import { CuerpoBayas } from "./CuerpoBayas"


export const CollapseBaya = ({hora}) => {
    const {bayas}=BayaList();
    const bayasFiltradas = (bayas) =>{
        return bayas.filter(bayas => bayas.time === hora)
    }
    const data = bayasFiltradas(bayas);
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
                        {data.map(berry =>(
                            <CuerpoBayas key={berry.id} baya={berry}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
