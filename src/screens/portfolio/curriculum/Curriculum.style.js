import styled from 'styled-components'
import {sizes} from "../../../config/ui";

export const CurriculumContainer = styled.div`
  color: white;
  height: 90px;
  background-color: red;
  position: relative;
  top: 212px;
  @media (max-width: ${sizes.mdScreen}px) {
    top: 134px;
  } 
`
