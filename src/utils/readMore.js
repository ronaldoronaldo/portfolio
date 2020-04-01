export const readMore = (text, qtd) => {
  const textFormatted =
    text.length > qtd && qtd ? `${text.slice(0, qtd)}...` : text

  return textFormatted
}
