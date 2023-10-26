import '../button/Button.css'

interface Button{
    text: string;
}

export function Button({text}: Button){
    return (
        <button className="button">
            {text}
        </button>
    ) 
}

interface Button2{
    text: string;
}

export function Button2({text}: Button){
    return (
        <button className="button2">
            {text}
        </button>
    ) 
}