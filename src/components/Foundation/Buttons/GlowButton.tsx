import { FC } from "react";
import Button from "./Button";
import { GlowButtonProps } from "./types";

const GlowButton: FC<GlowButtonProps> = props => {
  const { ...rest} = props;
  return (
    <Button className={`${props.className && props.className !== undefined  ? props.className : 'px-8 m-2'} animate-pulse bg-gradient-to-r from-[${props.colorFrom ?? "green"}] to-[${props.colorTo ?? "fuscia"}] hover:from-${props.hoverFrom ?? "green-500"} hover:to-${props.hoverTo ?? "fuscia-500"}`}
      onClick={props.onClick}
      {...rest}
    >
      {props.children}
    </Button>
  )
}

export default GlowButton
