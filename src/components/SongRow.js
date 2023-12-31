import React from 'react'
import './SongRow.css'

function SongRow({ track }) {
  return (
    <div className="songRow">
      <img src={track.album.image[0].url} className="songRow__album" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.Map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  )
}

export default SongRow