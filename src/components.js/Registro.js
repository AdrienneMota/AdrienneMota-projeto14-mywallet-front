import styled from "styled-components"

export default function Registro({status}){
    
    if(!status){
        return(
            <SemRegistro>
                Não há registros de entrada ou saída!
            </SemRegistro>
                
        )
    }

    return(
        <>
            <RegistroDefault>
                <InformacoesdoRegisto>
                    <p className="data">30/11</p>
                    <p className="descricao"> Almoço Mãe</p>
                </InformacoesdoRegisto>
                <Valor>
                    39,90
                </Valor>
            </RegistroDefault>
        </>       
    )
}

const SemRegistro = styled.p`
    font-weight: 400;
    color: #868686;
`
const RegistroDefault = styled.div`
    margin-top: 13px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    display: flex;
    justify-content: space-between;
`
const InformacoesdoRegisto = styled.div`
    .data{
        color: #C6C6C6;
        margin-right: 15px;
    }
    .descricao{
        color: #000000;
    }
    display: flex;
    width: 193px;

`
const Valor = styled.p`
    color: #03AC00;
`

