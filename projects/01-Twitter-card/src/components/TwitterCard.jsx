import React, { useState } from "react"

import './TwitterCard.css'

const TwitterCard = ({username, name, initialIsFollowing: initialIsFollowing}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const userImageURL = `https://unavatar.io/${username}`

  const followingText = isFollowing ? 'Following' : 'Follow'
  const followingButtonStyle = isFollowing ? 'tw-user-info-card-following-true' : '' 

  const handleFollow = () => {
    setIsFollowing(prevFollowing => !prevFollowing)
  }

  return (
    <article className="tw-user-info-card">
      <img src={userImageURL} alt={`profile picture of ${username}`}/>
      <div>
        <h4>{name}</h4>
        <strong>{`@${username}`}</strong>
      </div>
      <button onClick={handleFollow} className={'tw-user-info-card-following ' + followingButtonStyle}>
        <strong>{followingText}</strong>
        <strong className="tw-stop-following">Stop Following</strong>
      </button>
    </article>
  )
}

export default TwitterCard