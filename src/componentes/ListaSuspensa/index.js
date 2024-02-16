import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento=> props.alterado(evento.target.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map((item,index)=>{
                    return<option key={item}>{item}</option>
                }

                )}
            </select>
        </div>
    )
    

}
export default ListaSuspensa;