import React from 'react'
import { connect } from 'react-redux'
import { Book } from 'components/shelf-itens/book'
import { NewsItem } from 'components/shelf-itens/news-item'
import { CollectionsItem } from 'components/shelf-itens/collections-item'
import { ProjectsItem } from 'components/shelf-itens/projects-item'
import { DidacticCard } from 'components/shelf-itens/didactics-card'
import ExploreMore from 'components/shelf-itens/ExploreMore'
import Shelf from './Shelf'
import { sizes } from 'config/ui'
import fakeShelf from './fake'

import { showModal, setItemModal, setLoadingModal } from 'ducks/modal'
import { getContentDetails } from 'api/queries'
import { withApollo } from 'react-apollo'
import { PLATFORM } from 'config/vars'

import image1 from 'assets/images/mock/collection-mock.jpg'

const collections = [
  { image: image1, title: 'Histórias inspiradoras' },
  { image: image1, title: 'Viajando sem sair de casa' },
  { image: image1, title: 'Para abrir o apetite' },
  { image: image1, title: 'Luz, câmera, ação!' },
  { image: image1, title: 'Aventuras animais' },
  { image: image1, title: 'Rumos do planeta' }
]

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
  ...props
}) => {
  const handleGetContentDetails = (item, type) => {
    const [arvore, guten] = PLATFORM

    props.setLoadingModal(true)

    client
      .query({
        query: getContentDetails,
        variables: {
          contentId: item.id,
          platform: type === 'book' ? arvore : guten
        },
        fetchPolicy: 'network-only'
      })
      .then(res => {
        props.setItemModal(res.data.contentDetails, type)
        props.setLoadingModal(false)
      })
      .catch(err => {})
  }

  const handleShowShelfItemDetails = (item, type) => {
    props.showModal()
    handleGetContentDetails(item, type)
  }

  const renderBooksShelf = () => {
    const books = data

    const booksCarouselConfig = settings
      ? settings
      : {
          slidesToScroll: 7,
          slidesToShow: 7.5,
          responsive: [
            {
              breakpoint: sizes.xxlgScreen,
              settings: {
                slidesToScroll: 6,
                slidesToShow: 6.5
              }
            },
            {
              breakpoint: sizes.xlgScreen,
              settings: {
                slidesToScroll: 5,
                slidesToShow: 5.2
              }
            },
            {
              breakpoint: sizes.lgScreen,
              settings: {
                slidesToScroll: 3,
                slidesToShow: 3.8
              }
            },
            {
              breakpoint: sizes.mdScreen,
              settings: {
                slidesToScroll: 3,
                slidesToShow: 4
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
          slidesToShow: 4.8,
          responsive: [
            {
              breakpoint: sizes.xxlgScreen,
              settings: {
                slidesToScroll: 4,
                slidesToShow: 4.1
              }
            },
            {
              breakpoint: sizes.xlgScreen,
              settings: {
                slidesToScroll: 3,
                slidesToShow: 3.3
              }
            },
            {
              breakpoint: sizes.lgScreen,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2.4
              }
            },
            {
              breakpoint: sizes.mdScreen,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2.4
              }
            },
            {
              breakpoint: sizes.smScreen,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1.7,
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
          slidesToShow: 5.1,
          responsive: [
            {
              breakpoint: sizes.xxlgScreen,
              settings: {
                slidesToScroll: 5,
                slidesToShow: 5.1
              }
            },
            {
              breakpoint: sizes.xlgScreen,
              settings: {
                slidesToScroll: 4,
                slidesToShow: 4.2
              }
            },
            {
              breakpoint: sizes.lgScreen,
              settings: {
                slidesToScroll: 3,
                slidesToShow: 3.1
              }
            },
            {
              breakpoint: sizes.mdScreen,
              settings: {
                slidesToScroll: 3,
                slidesToShow: 3.4
              }
            },
            {
              breakpoint: sizes.smScreen,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2.5,
                arrows: false
              }
            }
          ]
        }}
        {...props}
      >
        {collections.map((collectionsItem, index) => {
          return (
            <CollectionsItem
              key={index}
              collectionsItem={collectionsItem}
              loading={true}
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
            slidesToShow: 2.5
          }
        },
        {
          breakpoint: sizes.xlgScreen,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2.1
          }
        },
        {
          breakpoint: sizes.lgScreen,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2.3
          }
        },
        {
          breakpoint: sizes.mdScreen,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 2
          }
        },
        {
          breakpoint: sizes.smScreen,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1.07,
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
      slidesToShow: 3.8,
      responsive: [
        {
          breakpoint: sizes.xxlgScreen,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3.3
          }
        },
        {
          breakpoint: sizes.xlgScreen,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2.8
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
            slidesToShow: 1.8
          }
        },
        {
          breakpoint: sizes.smScreen,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1.3,
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
    </>
  )
}

export default connect(
  null,
  { showModal, setItemModal, setLoadingModal }
)(withApollo(ItemsShelf))
