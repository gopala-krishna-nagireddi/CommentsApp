// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {onDeleteComment, onLikeComment, eachComment} = props
  const {id, name, comment, commentedAt, isLiked, bgColor} = eachComment

  const onClickLike = () => {
    onLikeComment(id)
  }

  const onDelete = () => {
    onDeleteComment(id)
  }

  const likeImg =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likedImg =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const likeImage = isLiked ? likedImg : likeImg
  const likedClassName = isLiked ? 'liked-comment' : ''
  return (
    <li className="comment-item">
      <div className="name-comment-container">
        <p className={`initial ${bgColor}`}>{name[0]}</p>
        <div>
          <p className="commenter-name">
            {name}
            <span className="comment-time">
              {formatDistanceToNow(commentedAt)} ago
            </span>
          </p>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-img-container">
          <img className="like-img" src={likeImage} alt="like" />
          <button
            type="button"
            className={`like-btn ${likedClassName}`}
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          className="delete-btn"
          type="button"
          testid="delete"
          onClick={onDelete}
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
