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
  padding: 8px 16px 8px 0;
  justify-content: space-between;
  border-bottom: 2px solid ${colors.black2};
  cursor: pointer;
`

export const ExampleBodyContainer = styled.div`
  ${({ show }) => `
    height: auto;
    overflow: hidden;
    max-height: ${show ? '500px' : '0'};
    transition: max-height 0.4s ease-in-out
  `}
`

export const ExampleBody = styled.div`
    display: flex;
    overflow: hidden;
    flex: 1;
    flex-direction: column;
    padding: 56px 0;
    justify-content: center;
    border-bottom: 2px solid ${colors.black2};
`


export const Title = styled.div`
  ${({ show }) => `
    font-size: 16px;
    color: ${show ? colors.black5 : colors.black4};
    ${ExampleHeader}:hover & {
      color: ${colors.black5};
    }
  `}
`