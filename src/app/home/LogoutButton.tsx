"use client"

import axios from "axios"
import { useRouter } from "next/navigation"

export default function LogoutButton() {
  const router = useRouter()
  async function logout() {
    try {
      await axios.get('/api/logout')
      router.push('/')
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <button onClick={logout} className="fix btn btn-error">
      LOGOUT
    </button>
  )
}
