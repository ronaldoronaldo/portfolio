import React, { useState } from 'react'
import {
  PublishersAddBookFiles,
  PublishersAddBookFilesBox,
  PublishersAddBookDropzoneContent,
  DropzoneContentIcon,
  DropzoneContentButton,
  DropzoneContentFileType,
  DropzoneContentTitle,
  DropzoneContentFileName,
  DragAndDropText,
  PublishersAddBookFilesBoxDesktop
} from './FileDropzone.style'
import UploadDropzone from './upload-dropzone'
import Input from '../../lib/inputs/Input'

const FileDropzone = () => {
  const [bookFile, setBookFile] = useState('')
  const [bookFileName, setBookFileName] = useState('')
  const [coverFileName, setCoverFileName] = useState('')

  const handleBookFile = files => {
    if (files.length > 1) {
      alert('Only one file for the book content, PDF or EPUB.')
    } else {
      const file = files[0]
      if (file.type.includes('application/epub')) {
        setFileReceived(file)
      } else if (file.type.includes('application/pdf')) {
        setFileReceived(file)
      } else {
        alert(
          'For the book content file, please insert a PDF or EPUB file type.'
        )
      }
    }
  }

  const handleCoverFile = files => {
    if (files.length > 1) {
      alert('Only one file for the book content, JPG or PNG.')
    } else {
      const file = files[0]
      if (file.type.includes('image/jpeg') || file.type.includes('image/png')) {
        setCoverFileName(file.name)
      } else {
        alert(
          'For the book cover image file, please insert a JPG or PNG file type.'
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
              Choose file
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
        {bookFileName ? (
          <DropzoneContentFileName blocked={bookFile === 'block'}>
            {bookFileName}
          </DropzoneContentFileName>
        ) : (
          <DragAndDropText> or drag and drop</DragAndDropText>
        )}
      </PublishersAddBookFilesBox>
      <PublishersAddBookFilesBoxDesktop>
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
              Choose file
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
        {coverFileName ? (
          <DropzoneContentFileName>{coverFileName}</DropzoneContentFileName>
        ) : (
          <DragAndDropText> or drag and drop</DragAndDropText>
        )}
      </PublishersAddBookFilesBoxDesktop>
    </PublishersAddBookFiles>
  )
}

export default FileDropzone
