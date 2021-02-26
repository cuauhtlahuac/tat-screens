import React from 'react'
import Avatar from 'components/layouts/avatar'

const Hello = ({name = "José"}) => {
  return (
    <div>
      <p>Hola { name }</p>
      <Avatar />
    </div>
  )
}

export default Hello
