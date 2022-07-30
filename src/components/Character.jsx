import styled from 'styled-components'

const Avatar = styled.div`
  background: #e5e5e5;
  img {
    height: 20rem;
  }
`

const CharacterName = styled.h2`
  text-align: center;
  padding-top: 10px;
`

const CharacterNickName = styled.p`
  text-align: center;
  padding-top: 10px;
`

const CharacterPortrayed = styled.h3`
  text-align: center;
  padding-top: 10px;
`

const Character = ({ img, name, nickname, portrayed }) => {
  return (
    <Avatar>
      <div>
        <img src={img} alt="avatar" />
      </div>
      <div>
        <CharacterName>{name}</CharacterName>
        <CharacterNickName>{nickname}</CharacterNickName>
        <CharacterPortrayed>{portrayed}</CharacterPortrayed>
      </div>
    </Avatar>
  )
}

export default Character
