import { FC } from "react";
import { GlowButtonProps } from "./types";

const GlowButton: FC<GlowButtonProps> = props => {
  return (
    <button className={`${props.className && props.className !== undefined  ? props.className : 'px-8 m-2'} aycm-btn animate-pulse bg-gradient-to-r from-[${props.colorFrom ?? "green"}] to-[${props.colorTo ?? "fuscia"}] hover:from-${props.hoverFrom ?? "green-500"} hover:to-${props.hoverTo ?? "fuscia-500"}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default GlowButton
