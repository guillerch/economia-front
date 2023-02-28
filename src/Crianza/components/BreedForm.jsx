import { useForm } from "../../hooks/useForm"
import { BreedTable } from "./BreedTable"

export const BreedForm = () => {
    const {formState,onInputChange} = useForm({
        ivs:'',
        cost:'',
        pokemontype:'1'
    });
    const {ivs,cost,pokemontype} =formState;

    return (
        <form className="general_color d-flex align-items-center flex-column justify-content-center">
            <label 
                htmlFor="ivs"
                className="form-label">
                ¿Que cantidad de ivs quieres colocar en x31?
            </label>
            <input 
                type="number"
                name="ivs"
                className="form-control w-25"
                placeholder="ej.: 6"
                value={ivs}
                onChange = {onInputChange}
                max = {6}
                min = {0} />

            <label 
                htmlFor="cost"
                className="form-label">
                ¿Cual es el costo promedio de los padres?
            </label>
            <input 
                type="number"
                name="cost"
                className="form-control w-25"
                placeholder="ej.: 5000"
                value={cost}
                onChange = {onInputChange}
                min = {0} />
            <label 
                className="form-label" 
                htmlFor="pokemon-type">
                    ¿Estas criando un pokemon inicial o fosil?
            </label>
            <select 
                className="form-select w-25 general_color align-self-center" 
                aria-label="pokemonRarity"
                value={pokemontype}
                onChange={onInputChange}
                name = 'pokemontype'>
                <option value="1">No</option>
                <option value="2">Si</option>
            </select>
            <BreedTable 
                padre={ivs} 
                costo={cost}
                tipo = {pokemontype}/>
        </form>
    )
}
