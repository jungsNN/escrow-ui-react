import { FC } from "react";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = (props) => {
  const {...rest} = props
  return (
    <button type={props.type} color={props.color} className={`${props.className ?? "btn glass px-8 m-2"}`} onClick={props.onClick} {...rest} >
      {props.children}
    </button>
  )
}

export default Button;
