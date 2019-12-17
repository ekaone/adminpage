import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client";

const socket = socketIOClient('http://localhost:5000');

export default function SocketTest() {

  const [data, setData] = useState(1)
  // useEffect(() => {
  //   socketIOClient.emit("ConfigTheming", {id: 1})
  // }, [data])

  socket.emit("ConfigTheming", data)

  return (
    <>
      <button onClick={() => setData(ps => ps + 1)}>Add</button>
    </>
  )
}
