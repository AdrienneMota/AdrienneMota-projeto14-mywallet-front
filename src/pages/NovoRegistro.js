import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Container, FormDefault, TituloPage } from "../assets/style/DefaultStyle"
import axios from "axios"
import BASEURL from "../constants/url"
import maskValue from "../helpers/maskValue";

export default function NovoRegistro() {
    const { tipo } = useParams()
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    function addRegistro(e) {
        e.preventDefault()

        const body = { 
            description, 
            type: tipo,
            value
        }

        console.log(typeof(body.value))

        axios.post(`${BASEURL}/registries`, body, { headers : { "Authorization" : `Bearer ${JSON.parse(token)}`}})
            .then(res => navigate('/registros'))
            .catch((error) => alert(error.response.data))
    }

    function formatValue(e){
        const lastElement = e?.nativeEvent?.data
        const validCharactere = "0123456789"
        let result = "0"
        
        if(!validCharactere.includes(lastElement)){
            result = e.target.value.replace(lastElement, '')
        }

        result = e.target.value.replace(",","")
        
        console.log(result)
        setValue(Number(result))                
    }

    return (
        <Container>
            <TituloPage>
                <p>Nova {tipo}</p>
            </TituloPage>
            <FormDefault>
                <form onSubmit={addRegistro}>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                    <input
                        type="text"
                        placeholder="Valor"
                        name="value"
                        value={maskValue(value)}
                        onChange={formatValue} />
                    <button type="submit">Nova {tipo}</button>
                </form>
            </FormDefault>
        </Container>
    )
}