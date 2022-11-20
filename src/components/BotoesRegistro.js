import { Link} from "react-router-dom";
import styled from "styled-components";

export default function BotoesRegistro() {
    const tiposRegistro = ['entrada', 'saida']

    return (
        <ContainerBtn>
            <Link to={`/novoregistro/${tiposRegistro[0]}`}>
                <button>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova Entrada</p>
                </button>
            </Link>

            <Link to={`/novoregistro/${tiposRegistro[1]}`}>
                <button>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova Saida</p>
                </button>
            </Link>
        </ContainerBtn>
    )

}

const ContainerBtn = styled.div`
    
    width: 326px;
    display: flex;
    justify-content: space-between;

    button{
        height: 144px;  
        width: 155px;
        border: none;
        border-radius: 5px;
        background-color: #A328D6;
        margin-bottom: 16px;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p{
            font-size: 17px;
            font-weight: 700;
            text-align: left;
            width: 64px;
            height: 40px;
        }
        ion-icon{
            width: 22px;
            height: 22px;
            font-weight: bolder;
        }
    }
`