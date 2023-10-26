import '../../components/title/Title.css'

interface Test{
    texto: string;
}

export function Title({texto}: Test){
    return (
        <div className="title">
            <h1>{texto}</h1>
        </div>
    )
}

interface Texto2{
    texto2: string;
}

export function Texto2({texto2}: Texto2){
    return (
        <div className="title">
            <h1>{texto2}</h1>
        </div>
    )
}