import React, {Fragment, useState} from 'react'
import {
  PublishersAddBookFiles,
  PublishersAddBookFilesBox,
  PublishersAddBookDropzoneContent,
  DropzoneContentIcon,
  DropzoneContentButton,
  DropzoneContentFileType,
  DropzoneContentTitle,
  DropzoneContentFileName
} from './FileDropzone.style'
import UploadDropzone from "./upload-dropzone"
import Input from "../../lib/inputs/Input"

const FileDropzone = () => {
  const [bookFile, setBookFile] = useState('')
  const [bookFileName, setBookFileName] = useState('')
  const [coverFileName, setCoverFileName] = useState('')

  const handleBookFile = files => {
    if (files.length > 1) {
      alert('Apenas um arquivo (EPUB ou PDF) por livro por favor.')
    } else {
      const file = files[0]
      if (file.type.includes('application/epub')) {
        setFileReceived(file)
      } else if (file.type.includes('application/pdf')) {
        setFileReceived(file)
      } else {
        alert(
          'Para o arquivo do livro, por favor insira um arquivo do tipo EPUB ou PDF'
        )
      }
    }
  }

  const handleCoverFile = files => {
    if (files.length > 1) {
      alert('Apenas um arquivo (JPG ou PNG) por livro por favor.')
    } else {
      const file = files[0]
      if (file.type.includes('image/jpeg') || file.type.includes('image/png')) {
        setCoverFileName(file.name)
      } else {
        alert(
          'Para capa do livro, por favor insira um arquivo de imagem do tipo PNG ou JPG'
        )
      }
    }
  }


  const setFileReceived = file => {
    setBookFileName(file.name)
    setBookFile(file)
  }

  return (
    <PublishersAddBookFiles>
      <PublishersAddBookFilesBox>
        <UploadDropzone handleDrop={handleBookFile}>
          <PublishersAddBookDropzoneContent>
            <DropzoneContentIcon className={'icon-file-pdf'} />
            <DropzoneContentTitle blocked={bookFile === 'block'}>
              Arquivo do livro
            </DropzoneContentTitle>
            <DropzoneContentFileType blocked={bookFile === 'block'}>
              EPUB ou PDF
            </DropzoneContentFileType>
            <DropzoneContentButton
              onClick={() => {
                if (bookFile === 'block') return
                document.getElementById('bookInput').click()
              }}
              blocked={bookFile === 'block'}
            >
              Escolher arquivo
            </DropzoneContentButton>
            <Input
              id="bookInput"
              name="bookInput"
              type="file"
              value={''}
              onChange={e => {
                handleBookFile(e.target.files)
              }}
              style={{ visibility: 'hidden', height: 0 }}
            />
          </PublishersAddBookDropzoneContent>
        </UploadDropzone>
        <DropzoneContentFileName blocked={bookFile === 'block'}>
          {bookFileName}
        </DropzoneContentFileName>
      </PublishersAddBookFilesBox>
      <PublishersAddBookFilesBox>
        <UploadDropzone handleDrop={handleCoverFile}>
          <PublishersAddBookDropzoneContent>
            <DropzoneContentIcon className={'icon-file-png'} />
            <DropzoneContentTitle>Capa do livro</DropzoneContentTitle>
            <DropzoneContentFileType>JPG ou PNG</DropzoneContentFileType>
            <DropzoneContentButton
              onClick={() => {
                document.getElementById('coverInput').click()
              }}
            >
              Escolher arquivo
            </DropzoneContentButton>
            <Input
              id="coverInput"
              name="coverInput"
              type="file"
              value={''}
              onChange={e => {
                handleCoverFile(e.target.files)
              }}
              style={{ visibility: 'hidden', height: 0 }}
            />
          </PublishersAddBookDropzoneContent>
        </UploadDropzone>
        <DropzoneContentFileName>
          {coverFileName}
        </DropzoneContentFileName>
      </PublishersAddBookFilesBox>
    </PublishersAddBookFiles>
  )
}

export default FileDropzone





