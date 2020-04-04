import styled from 'styled-components'
import { colors, spacing } from 'config/ui'
import IconButton from 'components/lib/buttons/IconButton'

export const AccordionMenuContainer = styled.div`
  width: 100%;
  display: block;
  height: auto;
  overflow: hidden;
  max-height: ${props => (props.open ? '1000px' : '0')};
  transition: max-height 0.4s ease-in-out;
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
  padding: 0;
  padding-right: 16px;
  font-size: 20px;
  margin-bottom: ${props =>
  props.open ? 16 : 0}px;
`
