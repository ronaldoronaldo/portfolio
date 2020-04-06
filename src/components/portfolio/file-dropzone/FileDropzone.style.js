import styled from 'styled-components'
import { colors, fontWeights, sizes } from 'config/ui'

export const PublishersAddBookFiles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${sizes.mScreen}px) {
    flex-direction: row;
  }
`

export const PublishersAddBookFilesBox = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  background-color: ${colors.white};
  border: 2px solid ${colors.black2};
  border-radius: 3px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 16px;
  @media (min-width: ${sizes.mScreen}px) {
    width: 48.5%;
    margin-top: 0;
  }
`

export const PublishersAddBookFilesBoxDesktop = styled(
  PublishersAddBookFilesBox
)`
  display: none;
  @media (min-width: ${sizes.mScreen}px) {
    display: flex;
  }
`

export const PublishersAddBookDropzoneContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const DropzoneContentFileType = styled.div`
  font-size: 15px;
  color: ${props => (props.blocked ? colors.gray1 : colors.gray9)};
  margin-bottom: 32px;
`

export const DropzoneContentFileName = styled.div`
  color: ${colors.black2Dark};
  opacity: 1;
  font-size: 20px;
  position: absolute;
  bottom: 24px;
`

export const DragAndDropText = styled.span`
  color: ${colors.black2};
  opacity: 0.8;
  font-size: 30px;
  position: absolute;
  bottom: 24px;
`

export const DropzoneContentTitle = styled.div`
  font-size: 22px;
  color: ${props => (props.blocked ? colors.gray1 : colors.gray9)};
  font-weight: ${fontWeights.bold};
  margin-bottom: 16px;
`

export const DropzoneContentIcon = styled.i`
  font-size: 101px;
  color: ${colors.gray1};
  margin-bottom: 32px;
`

export const DropzoneContentButton = styled.button`
  cursor: ${props => (props.blocked ? 'not-allowed' : 'pointer')};
  color: ${colors.white};
  background-color: ${props => (props.blocked ? colors.gray1 : colors.arvore)};
  border: none;
  border-radius: 4px;
  height: 40px;
  width: 146px;
  font-weight: ${fontWeights.bold};
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
`
