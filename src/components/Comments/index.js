import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const randomNumber = Math.ceil(Math.random() * 8)

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      commentedAt: new Date(),
      bgColor: initialContainerBackgroundClassNames[randomNumber - 1],
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onInputName = event => {
    this.setState({name: event.target.value})
  }

  onInputComment = event => {
    this.setState({comment: event.target.value})
  }

  onLikeComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(comment => {
        if (comment.id === id) {
          return {...comment, isLiked: !comment.isLiked}
        }
        return comment
      }),
    }))
  }

  onDeleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(comment => comment.id !== id),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    const commentsCount = commentsList.length
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="comments-container">
          <img
            className="comments-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />

          <div className="form-container">
            <p className="instruction">Say something about 4.0 Technologies</p>
            <form className="input-form" onSubmit={this.onAddComment}>
              <input
                className="name-input"
                value={name}
                type="text"
                placeholder="Your Name"
                onChange={this.onInputName}
              />
              <textarea
                className="comment-input"
                value={comment}
                rows="6"
                placeholder="Your Comment"
                onChange={this.onInputComment}
              />
              <button className="add-comment-btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <hr className="hr-line" />
        <div>
          <p className="comments-count">
            <span className="count">{commentsCount}</span>Comments
          </p>
          <ul className="comments-list">
            {commentsList.length !== 0
              ? commentsList.map(eachComment => (
                  <CommentItem
                    eachComment={eachComment}
                    key={eachComment.id}
                    onLikeComment={this.onLikeComment}
                    onDeleteComment={this.onDeleteComment}
                  />
                ))
              : null}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
