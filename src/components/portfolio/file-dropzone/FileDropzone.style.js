import styled from 'styled-components'
import { colors, fontWeights } from 'config/ui'

export const PublishersAddBookFiles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PublishersAddBookFilesBox = styled.div`
  margin-top: 30px;
  width: 49.1%;
  height: 400px;
  display: flex;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray1};
  border-radius: 3px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 19px;
`

export const DropzoneContentFileName = styled.div`
  color: ${props => (props.blocked ? colors.gray1 : colors.gray4)};
`

export const DropzoneContentTitle = styled.div`
  font-size: 22px;
  color: ${props => (props.blocked ? colors.gray1 : colors.gray9)};
  font-weight: ${fontWeights.bold};
  margin-bottom: 8px;
`

export const DropzoneContentIcon = styled.i`
  font-size: 101px;
  color: ${colors.gray1};
  margin-bottom: 13px;
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