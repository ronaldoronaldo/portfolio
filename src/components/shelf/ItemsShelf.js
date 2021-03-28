import React, { useState } from 'react'
import { Book } from 'components/shelf-itens/book'
import { NewsItem } from 'components/shelf-itens/news-item'
import { CollectionsItem } from 'components/shelf-itens/collections-item'
import { ProjectsItem } from 'components/shelf-itens/projects-item'
import { DidacticCard } from 'components/shelf-itens/didactics-card'
import ExploreMore from 'components/shelf-itens/ExploreMore'
import Shelf from './Shelf'
import { sizes } from 'config/ui'
import fakeShelf from './fake'
import { ModalItemsShelfDetails } from '../lib/modals'

const ItemsShelf = ({
  title,
  titleMobile,
  onClickItemShelf,
  booksShelf,
  newsShelf,
  collectionsShelf,
  projectsShelf,
  didacticsShelf,
  data,
  settings,
  client,
  exploreMore,
  loading,
  openNewModal,
  typeModal,
  ...props
}) => {
  const [showShelfItemDetails, setShowShelfItemDetails] = useState(false)
  const [itemDetails, setItemDetails] = useState({})
  const [type, setType] = useState('')

  const handleShowShelfItemDetails = (item, type) => {
    if (openNewModal) {
      openNewModal(item, typeModal)
      return
    }
    setItemDetails(item)
    setShowShelfItemDetails(true)
    setType(type)
  }

  const openNew = (newItem, newType) => {
    setItemDetails(newItem)
    setType(newType)
  }

  const renderBooksShelf = () => {
    const books = data

    const booksCarouselConfig = settings
      ? settings
      : {
          slidesToScroll: 7,
          slidesToShow: 7,
          responsive: [
            {
              breakpoint: sizes.xxlgScreen,
              settings: {
                slidesToScroll: 6,
                slidesToShow: 6
              }
            },
            {
              breakpoint: sizes.xlgScreen,
              settings: {
                slidesToScroll: 5,
                slidesToShow: 5
              }
            },
            {
              breakpoint: sizes.lgScreen,
              settings: {
                slidesToScroll: 3,
                slidesToShow: 3
              }
            },
            {
              breakpoint: sizes.mdScreen,
              settings: {
                slidesToScroll: 3,
                slidesToShow: 3
              }
            },
            {
              breakpoint: sizes.smScreen,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
                arrows: false
              }
            }
          ]
        }

    if (!loading && !books) return

    if (loading) {
      return (
        <Shelf
          title={title}
          titleMobile={titleMobile}
          settings={booksCarouselConfig}
        >
          {fakeShelf.map((item, index) => (
            <Book loading={loading} key={index} />
          ))}
        </Shelf>
      )
    }

    if (books && books.length) {
      return (
        <Shelf
          title={title}
          titleMobile={titleMobile}
          settings={booksCarouselConfig}
          {...props}
        >
          {books.map((book, index) => (
            <Book
              key={index}
              book={book}
              percentage={book.percentage}
              onClickCover={() => handleShowShelfItemDetails(book, 'book')}
              loading={false}
            />
          ))}
          {exploreMore && <ExploreMore arvore />}
        </Shelf>
      )
    }
  }

  const renderNewsShelf = () => {
    const news = data

    const newsCarouselConfig = settings
      ? settings
      : {
          slidesToScroll: 4,
          slidesToShow: 4,
          responsive: [
            {
              breakpoint: sizes.xxlgScreen,
              settings: {
                slidesToScroll: 4,
                slidesToShow: 4
              }
            },
            {
              breakpoint: sizes.xlgScreen,
              settings: {
                slidesToScroll: 3,
                slidesToShow: 3
              }
            },
            {
              breakpoint: sizes.lgScreen,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2
              }
            },
            {
              breakpoint: sizes.mdScreen,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2
              }
            },
            {
              breakpoint: sizes.smScreen,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
                arrows: false
              }
            }
          ]
        }

    if (!loading && !news) return

    if (loading) {
      return (
        <Shelf
          title={title}
          titleMobile={titleMobile}
          settings={newsCarouselConfig}
          newsShelf={newsShelf}
        >
          {fakeShelf.map((item, index) => (
            <NewsItem loading={loading} key={index} />
          ))}
        </Shelf>
      )
    }

    if (news && news.length) {
      return (
        <Shelf
          title={title}
          titleMobile={titleMobile}
          newsShelf={newsShelf}
          settings={newsCarouselConfig}
          {...props}
        >
          {news.map((newsItem, index) => (
            <NewsItem
              key={index}
              newsItem={newsItem}
              percentage={newsItem.percentage}
              loading={false}
              onClickCover={() =>
                handleShowShelfItemDetails(newsItem, 'newsItem')
              }
            />
          ))}
          {exploreMore && <ExploreMore />}
        </Shelf>
      )
    }
  }

  const renderCollectionsShelf = () => {
    return (
      <Shelf
        title={title}
        titleMobile={titleMobile}
        settings={{
          slidesToScroll: 5,
          slidesToShow: 5,
          responsive: [
            {
              breakpoint: sizes.xxlgScreen,
              settings: {
                slidesToScroll: 5,
                slidesToShow: 5
              }
            },
            {
              breakpoint: sizes.xlgScreen,
              settings: {
                slidesToScroll: 4,
                slidesToShow: 4
              }
            },
            {
              breakpoint: sizes.lgScreen,
              settings: {
                slidesToScroll: 3,
                slidesToShow: 3
              }
            },
            {
              breakpoint: sizes.mdScreen,
              settings: {
                slidesToScroll: 3,
                slidesToShow: 3
              }
            },
            {
              breakpoint: sizes.smScreen,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
                arrows: false
              }
            }
          ]
        }}
        {...props}
      >
        {data.map((collectionsItem, index) => {
          return (
            <CollectionsItem
              key={index}
              collectionsItem={collectionsItem}
              loading={loading}
              onClickCover={onClickItemShelf}
            />
          )
        })}
      </Shelf>
    )
  }

  const renderProjectsShelf = () => {
    if (!loading && !data) return

    const projectsCarouselConfig = {
      slidesToScroll: 1,
      slidesToShow: 3,

      responsive: [
        {
          breakpoint: sizes.xxlgScreen,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2
          }
        },
        {
          breakpoint: sizes.xlgScreen,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2
          }
        },
        {
          breakpoint: sizes.lgScreen,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2
          }
        },
        {
          breakpoint: sizes.mdScreen,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1
          }
        },
        {
          breakpoint: sizes.smScreen,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
    }

    if (loading) {
      return (
        <Shelf
          title={title}
          titleMobile={titleMobile}
          settings={projectsCarouselConfig}
          {...props}
        >
          {fakeShelf.map((item, index) => (
            <ProjectsItem loading={loading} project={item} key={index} />
          ))}
        </Shelf>
      )
    }

    return (
      <Shelf
        title={title}
        titleMobile={titleMobile}
        settings={projectsCarouselConfig}
        {...props}
      >
        {data.map((project, index) => {
          return (
            <ProjectsItem
              key={index}
              project={project}
              onClickCover={() => handleShowShelfItemDetails(project, 'book')}
              loading={loading}
            />
          )
        })}
      </Shelf>
    )
  }

  const renderDidacticsCardsShelf = () => {
    const didactics = data

    const didacticsCarouselConfig = {
      slidesToScroll: 3,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: sizes.xxlgScreen,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
        },
        {
          breakpoint: sizes.xlgScreen,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2
          }
        },
        {
          breakpoint: sizes.lgScreen,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2
          }
        },
        {
          breakpoint: sizes.mdScreen,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1
          }
        },
        {
          breakpoint: sizes.smScreen,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
    }

    if (!loading && !didactics) return

    if (loading) {
      return (
        <Shelf
          title={title}
          titleMobile={titleMobile}
          settings={didacticsCarouselConfig}
          {...props}
        >
          {fakeShelf.map((item, index) => (
            <DidacticCard loading={loading} didacticsCard={item} key={index} />
          ))}
        </Shelf>
      )
    }

    return (
      <Shelf
        title={title}
        titleMobile={titleMobile}
        settings={didacticsCarouselConfig}
        {...props}
      >
        {didactics.map((didacticsCard, index) => {
          return (
            <DidacticCard
              key={index}
              didacticsCard={didacticsCard}
              loading={loading}
            />
          )
        })}
      </Shelf>
    )
  }

  return (
    <>
      {booksShelf && renderBooksShelf()}
      {newsShelf && renderNewsShelf()}
      {collectionsShelf && renderCollectionsShelf()}
      {projectsShelf && renderProjectsShelf()}
      {didacticsShelf && renderDidacticsCardsShelf()}
      {showShelfItemDetails && (
        <ModalItemsShelfDetails
          item={itemDetails}
          active={showShelfItemDetails}
          type={type}
          openNewModal={openNew}
          onClose={() => setShowShelfItemDetails(false)}
        />
      )}
    </>
  )
}

export default ItemsShelf
