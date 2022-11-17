import { useLocation } from "react-router-dom"
import { Container, FormDefault, TituloPage } from "../assets/style/DefaultStyle"

export default function NovoRegistro(){
    const {tipo} = useLocation().state

    return(        
        <Container>
            <TituloPage>
                <p>Nova {tipo}</p>
            </TituloPage>
            <FormDefault>
               <input type="number" placeholder="Valor"/>
               <input type="text" placeholder="Descricao"/>
               <button>Salvar {tipo}</button> 
            </FormDefault>
        </Container>
    )
}