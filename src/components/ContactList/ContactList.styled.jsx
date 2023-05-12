import styled from "styled-components";

export const List = styled.ul`
  margin-left: 20px;
  padding: 8px;

`

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`