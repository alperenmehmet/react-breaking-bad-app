import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({ char_id, img, name, portrayed }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-800 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/characters/${char_id}`}>
        <img
          className="rounded-t-lg h-96 w-[382px] mx-0 "
          src={img}
          alt={img}
        />
      </Link>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {portrayed}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          as {name}
        </p>
      </div>
    </div>
  )
}

export default CharacterCard
