import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Container, FormDefault, TituloPage } from "../assets/style/DefaultStyle"
import axios from "axios"
import BASEURL from "../constants/url"

export default function NovoRegistro() {
    const { tipo } = useParams()
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    function addRegistro(e) {
        e.preventDefault()

        const body = { 
            description, 
            type: tipo,
            value: Number(value.replace(',','.')).toFixed(2)
        }

        axios.post(`${BASEURL}/registries`, body, { headers : { "Authorization" : `Bearer ${JSON.parse(token)}`}})
            .then(res => navigate('/registros'))
            .catch((error) => console.log(error.response.data))
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
                        value={value}
                        onChange={(e) => setValue(e.target.value)} />
                    <button type="submit">Nova {tipo}</button>
                </form>
            </FormDefault>
        </Container>
    )
}