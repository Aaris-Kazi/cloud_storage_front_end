import React from 'react'

export const Home = () => {
    const username = localStorage.getItem("cloud_drive_username");
  return (
    <div>Hi, {username}</div>
  )
}
