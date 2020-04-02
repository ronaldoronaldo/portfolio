import styled from 'styled-components'
import { IconButton } from 'components/lib/buttons'
import { colors } from 'config/ui'

export const StyledButton = styled(IconButton)`
  position: absolute;
  ${props =>
    props.reposition ? 'left: -10px;' : 'left: -19px;'} outline: none;
  z-index: 2;
  ${props =>
    props.reposition ? 'top: 36%;' : 'top: 50%;'} transform: translateY(-50%);
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  padding: 5px;
  border: 1px solid ${colors.gray1};
  width: 40px;
  height: 40px;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.gray};
  }
`

export const StyledIcon = styled.i`
  font-size: 26px;
  color: ${colors.gray7};
}
`
