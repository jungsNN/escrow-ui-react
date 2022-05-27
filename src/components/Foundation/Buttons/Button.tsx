import { FC } from "react";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = (props) => {
  const {...rest} = props
  return (
    <button type={props.type} className={`${props.className ?? "btn glass px-8 m-2"}`} onClick={props.onClick} {...rest} style={{background: props.color??'var(--accent-light)', padding: '.5rem 2rem'}}>
      {props.children}
    </button>
  )
}

export default Button;
