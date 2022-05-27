import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

export const Container = styled(Box)`
  width: 494px;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  background: rgb(0,0,0, 0.3);
  border-radius: 16px;
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
  color: var(--text-primary);
  margin: .1rem 0 .2rem .1rem;
  font-weight: 500;
`;

export const InputBox = styled(Input)<{haserror?: boolean}>`
  border-radius: 8px;
  background: var(--tertiary-color);
  border: 2px solid ${props => props.haserror ? "var(--error-color)" : "transparent"};
  text-decoration: none;
  outline: none;
  height: 50px;
  color: var(--text-primary);
  padding-left: 1rem;
`;


export const Row = styled.div<{
  gap?: string;
  align?: string;
  justify?: string;
  items?: string;
}>`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${props => props.gap ?? '0'};
  align-items: ${props => props.align ?? 'start'};
  justfy-content: ${props => props.justify ?? 'start'};
  justify-items: ${props => props.items ?? 'none'};
`;

export const Col = styled.div<{gap?: string, pl?: string, pr?: string, items?: string, justify?: string,align?: string}>`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.gap ?? '1rem'};
  align-items: center;
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pl};
  justify-content: ${props => props.justify ?? 'start'};
  justify-items: ${props => props.items ?? 'none'};
`