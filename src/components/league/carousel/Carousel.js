import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SliderWrapper } from './Carousel.styles'
import Item from './Item'
import PrevButton from './PrevButton'
import NextButton from './NextButton'
import Slider from 'react-slick'

class Carousel extends Component {
  static propTypes = {
    gutter: PropTypes.number,
    carouselSettings: PropTypes.object,
    centralizeButtonOnBook: PropTypes.bool,
    clippedButton: PropTypes.bool
  }

  static defaultProps = {
    gutter: 0
  }

  itemsRefs = []
  wrapper = null

  state = {
    hideArrowRight: false,
    forceAlignLeftAndHideArrows: false
  }

  getChildren = () => {
    return React.Children.map(this.props.children, child => child)
  }

  setWrapperRef(ref) {
    if (!this.wrapper) {
      this.wrapper = ref
    }
  }

  render() {
    const { forceAlignLeftAndHideArrows, hideArrowRight } = this.state
    const items = this.getChildren()
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      nextArrow: <NextButton clippedButton={this.props.clippedButton} />,
      prevArrow: <PrevButton clippedButton={this.props.clippedButton} />,
      variableWidth: true,
      slidesToScroll: 1,
      ...this.props.carouselSettings
    }

    return (
      <div ref={this.setWrapperRef.bind(this)}>
        <SliderWrapper
          hideArrowRight={hideArrowRight}
          forceAlignLeftAndHideArrows={forceAlignLeftAndHideArrows}
        >
          <Slider {...settings}>
            {items.map((item, index) => (
              <Item
                gutter={this.props.gutter}
                key={item.id || index}
                shouldDisplay
              >
                {item.component || item}
              </Item>
            ))}
          </Slider>
        </SliderWrapper>
      </div>
    )
  }
}

export default Carousel
