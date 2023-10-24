import { PropsWithChildren } from "react";
import '../../components/title/Title.css'

type TitleProps = {
    
}

export function Title(props: PropsWithChildren<TitleProps>){
    return <h1 className="teste2">{props.children}</h1>
}