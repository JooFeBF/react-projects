import TwitterCard from './TwitterCard'

import './TwitterCardContainer.css'

const twitterUsers = [
  {
    username: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
},
{
   username: 'juliodev',
    name: 'Pepe Francisco Olvedo',
    isFollowing: false
},
{
  username: 'Maau',
  name: 'Mauricio Ocampo Millonario',
  isFollowing: true
}
]

function TwitterCardContainer() {

  return (
    <article className="tw-card-container">
        { twitterUsers.map(({username, name, isFollowing}) => <TwitterCard key={username} username={username} name={name} initialIsFollowing={isFollowing} />) }
    </article>
  )
}

export default TwitterCardContainer
