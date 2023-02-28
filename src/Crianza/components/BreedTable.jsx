
export const BreedTable = ({padre,costo,tipo}) => {
    // variables fijas
    const precioCintas=10000;
    const precioPokeballs=200;
    const crianzaComun=5000;
    const crianzaRara = 16000;
    // formulas
    const cantidadPadres = 2**(padre-1);
    const precioPadres = cantidadPadres*costo;
    const cantidadCrianza = cantidadPadres/2;
    const crianzaNormal = cantidadCrianza*crianzaComun;
    const crianzaFosil = crianzaNormal+(crianzaRara*(padre-1));
    const cantidadCintas = (cantidadPadres*2)-2;
    const precioTotalCintas = cantidadCintas*precioCintas;
    const cantidadPokebolas = cantidadCintas+1;
    const precioTotalPokebolas = cantidadPokebolas * precioPokeballs;
    const totalNormal = precioPadres+precioTotalCintas+precioTotalPokebolas+ ((tipo==='1')?crianzaComun : crianzaFosil);
    return (
        <table className="container table table-hover w-50">
            <thead>
                <tr>
                    <th scope="col">Requisitos</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Costo</th>
                </tr>
            </thead>
            <tbody className="container">
            <tr>
                <th scope="col">Padres</th>
                <th scope="col">{(cantidadPadres<1)? 0: cantidadPadres}</th>
                <th scope="col">{(precioPadres<1)? 0 : precioPadres}</th>
            </tr>
            <tr>
                <th scope="col">Crianza</th>
                <th scope="col">{(cantidadCrianza<1) ? 0: cantidadCrianza}</th>
                {
                    (cantidadPadres<1 || cantidadCrianza<1)
                    ? <th scope="col">0</th>
                    :<th scope="col">{(tipo === '1') ? (crianzaNormal) : crianzaFosil}</th>
                }
                
            </tr>
            <tr>
                <th scope="col">Brazaletes</th>
                {
                    (cantidadPadres<1)
                    ?<th scope="col">0</th>
                    :<th scope="col">{cantidadCintas}</th>
                }
                {
                    (cantidadPadres<1)
                    ?<th scope="col">0</th>
                    :<th scope="col">{precioTotalCintas}</th>
                }
            </tr>
            <tr>
                <th scope="col">Pokeballs</th>
                {
                    (cantidadPadres<1)
                    ?<th scope="col">0</th>
                    :<th scope="col">{cantidadPokebolas}</th>
                }
                {
                    (cantidadPadres<1)
                    ?<th scope="col">0</th>
                    :<th scope="col">{precioTotalPokebolas}</th>
                }
            </tr>
            <tr>
                <th scope="col">Total</th>
                {
                    (padre<2)
                    ?<th colSpan='2' scope="col">{(cantidadPadres*precioPadres)+precioTotalPokebolas}</th>
                    :<th colSpan='2' scope="col">{totalNormal}</th>
                }
            </tr>
            </tbody>
        </table>
    )
}