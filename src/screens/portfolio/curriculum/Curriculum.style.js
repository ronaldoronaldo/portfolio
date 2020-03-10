import styled from 'styled-components'
import {sizes} from "../../../config/ui";

export const CurriculumContainer = styled.div`
  color: white;
  background-color: red;
  position: relative;
  width: 100%;
  top: 134px;
  @media (min-width: ${sizes.mdScreen}px) {
    top: 212px;
  } 
`
