
import { Link } from "react-router-dom"
import {Container, FormDefault, LinkDefault} from "../assets/style/DefaultStyle"

export default function Cadastro(){
    return(
        <Container>
        <FormDefault>
            <p>MyWallet</p>
            <form>
                <input type="text" placeholder="Nome"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirme a senha"/>
                <button>Cadastrar</button>
            </form>
        </FormDefault>
        <Link to="/">
            <LinkDefault>Já tem uma conta? Entre agora!</LinkDefault>
        </Link>
     </Container>
    )
}

