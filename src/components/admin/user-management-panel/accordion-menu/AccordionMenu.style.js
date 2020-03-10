import styled from 'styled-components'
import { colors, spacing } from 'config/ui'
import IconButton from 'components/lib/buttons/IconButton'

export const AccordionMenuContainer = styled.div`
  width: 100%;
  display: ${props => (props.open ? 'block' : 'none')};
`

export const IconButtonStyle = styled(IconButton)`
  width: 100%;
  border-top: 1px solid ${colors.black2};
  border-bottom: ${props =>
    !props.open && props.haveBorderBottom
      ? `1px solid ${colors.black2}`
      : 'none'};
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: ${spacing.large}px;
  border-radius: 0;
  font-size: 20px;
`
