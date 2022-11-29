export default function maskValue(value){
        
    if(value<10){
        return `0,0${value}`
    }
    else if(value<100){
        return `0,${value}`
    }
    
    const teste = String(value)   
    return teste.substring(0, teste.length - 2) + ',' + teste.substring(teste.length - 2)
}