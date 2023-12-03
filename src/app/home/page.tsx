"use client"

import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import axios from "axios";
import LogoutButton from "./LogoutButton";

interface RoomType {
  id: string,
  title: string,
  description: string,
  rent: number,
  imageUrl: string
}

export default function HomePage() {
  const [rooms, setRooms] = useState([])

  async function getRooms() {
    try {
      const response = await axios.get('api/get-rooms')
      setRooms(response.data.rooms)
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRooms()
  }, [])

  return (
    <div className="flex justify-center">
      <LogoutButton />
      <div className="max-w-4xl min-h-screen py-10">
        <h1 className="text-5xl text-primary my-10">Available Rooms</h1>
        <div className="flex flex-col gap-5">
          {
            rooms.length ?
              rooms.map((room: RoomType) => {
                return <RoomCard key={room.id} title={room.title} description={room.description} rent={room.rent} imageUrl={room.imageUrl} />
              }) : '0 rooms found'
          }
        </div>
      </div>
    </div>
  )
}
