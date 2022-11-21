import styled from "styled-components"

export default function Registro({status, registros}){
       
    if(!status){
        return(
            <SemRegistro>
                Não há registros de entrada ou saída!
            </SemRegistro>
                
        )
    }

    return(
        <>
            {registros.map( 
                (registro) => 
                <RegistroDefault>
                    <InformacoesdoRegistro>
                        <p className="data">{registro.date}</p>
                        <p className="descricao">{registro.description}</p>
                        </InformacoesdoRegistro>
                        <Valor tipo={registro.type}>{registro.value}</Valor>
                 </RegistroDefault>
            )}            
        </>       
    )
}

const SemRegistro = styled.p`
    font-weight: 400;
    color: #868686;
    margin: 15px;
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
const InformacoesdoRegistro = styled.div`
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
    color: ${ prop => (prop.tipo === 'entrada')? "#03AC00" : "#C70000"};
`
