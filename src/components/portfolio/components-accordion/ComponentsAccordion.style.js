import styled  from 'styled-components'
import { colors } from 'config/ui'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const ExampleHeader = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 8px;
  justify-content: space-between;
  border-top: 2px solid ${colors.black2};
`

export const ExampleBody = styled.div`
  ${({ show }) => `
    display: flex;
    overflow: hidden;
    height: ${show ? 'auto' : '0px'};
    flex: 1;
    flex-direction: column;
    padding: 8px;
    justify-content: center;;
    border: 2px solid ${colors.black2};
    border-bottom: none;
  `}
`


export const Title = styled.div`
  font-size: 16px;
  color: ${colors.black4};
`
