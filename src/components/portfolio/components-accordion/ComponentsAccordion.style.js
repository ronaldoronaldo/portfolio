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
  padding: 8px 16px;
  justify-content: space-between;
  border-bottom: 2px solid ${colors.black2};
  cursor: pointer;
  @media (min-width: 804px) {
    padding: 8px 16px 8px 0;
  }
`

export const ExampleBodyContainer = styled.div`
  ${({ show }) => `
    height: auto;
    overflow: hidden;
    max-height: ${show ? '920px' : '0'};
    transition: max-height 0.4s ease-in-out;
  `}
`

export const ExampleBody = styled.div`
  ${({ column, drag }) => `
    display: flex;
    overflow: hidden;
    flex: 1;
    flex-direction: ${column ? 'column' : 'row'};
    justify-content: center;
    border-bottom: 2px solid ${colors.black2};
    padding: ${drag ? '0' : '56px 0'};    
    @media (min-width: 804px) {
      padding: ${drag ? '32px 0' : '56px 0'};
    }
  `}
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