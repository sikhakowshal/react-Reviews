import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  showPreviousReview = () => {
    const {activeId} = this.state
    const updatedActiveId = activeId - 1

    if (updatedActiveId < 0) {
      this.setState({activeId: 0})
    } else {
      this.setState({activeId: updatedActiveId})
    }
  }

  showNextReview = () => {
    const {activeId} = this.state
    const {reviewsList} = this.props

    const updatedActiveId = activeId + 1

    if (updatedActiveId > reviewsList.length - 1) {
      this.setState({activeId: reviewsList.length - 1})
    } else {
      this.setState({activeId: updatedActiveId})
    }
  }

  render() {
    const {activeId} = this.state
    const {reviewsList} = this.props
    const activeReviewDetails = reviewsList[activeId]
    const {imgUrl, username, companyName, description} = activeReviewDetails

    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} className="person-image" alt={username} />
        <div className="controls-container">
          <button
            className="button"
            data-testId="leftArrow"
            type="button"
            onClick={this.showPreviousReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <p className="name">{username}</p>
          <button
            className="button"
            data-testId="rightArrow"
            type="button"
            onClick={this.showNextReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
