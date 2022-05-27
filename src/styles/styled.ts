import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

export const Container = styled(Box)`
  width: 494px;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  background: rgb(0,0,0, 0.3);
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
`;

export const Wrap = styled.div`
  display: grid;
  grid-auto-flow: row;
  padding: 1rem;
  align-items: start;
  grid-gap: 1rem;
`;

export const Label = styled.p`
  font-family: var(--font-family-montserrat-semibold);
  color: var(--white);
  margin: .1rem 0 .5rem .5rem;
`;

export const InputBox = styled(Input)<{hasError?: boolean}>`
  // border: 1px solid var(--mountain-meadow);
  border-radius: 4px;
  background: #f5f5f517;
  border: 2px solid ${props => props.hasError ? "#EF2C2CD5" : "transparent"};
  text-decoration: none;
  outline: none;
  height: 50px;
  color: #FFFFFF94;
  padding-left: 1rem;
`;


export const Row = styled.div<{
  gap?: string,
  align?: string,
  justify?: string,
  items?: string,
  w?: string,
  h?: string
}>`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${props => props.gap ?? "0"};
  align-items: ${props => props.align ?? "center"};
  justify-items: ${props => props.justify ?? "null"};
  justify-content: ${props => props.justify ?? "center"};
  width: ${props => props.w ?? "100%"};
  height: ${props => props.h ?? "100%"};
`;

export const Col = styled.div<{
  gap?: string,
  align?: string,
  justify?: string,
  items?: string,
  w?: string,
  h?: string
}>`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.gap ?? "0"};
  align-items: ${props => props.align ?? "center"};
  justify-items: ${props => props.justify ?? "null"};
  justify-content: ${props => props.justify ?? "center"};
  width: ${props => props.w ?? "100%"};
  height: ${props => props.h ?? "100%"};
`;