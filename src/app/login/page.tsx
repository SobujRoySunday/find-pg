"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from "axios"
import Link from "next/link"
import { toast } from "react-toastify"

export default function SignUpPage() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  async function onLogin() {
    try {
      await axios.post('/api/login', user)
      router.push('/home')
    } catch (error: any) {
      console.log(error)
      toast.error(error)
    }
  }
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center card card-normal shadow-xl bg-base-300 p-5 gap-5">
        <h1 className="text-6xl text-primary text-center">LOGIN</h1>
        <div className="form flex flex-col gap-1">
          <div>
            <label className="label">
              <p className="label-text">Email</p>
            </label>
            <input className="input input-bordered w-64" type="email" name="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
          </div>
          <div>
            <label className="label">
              <p className="label-text">Password</p>
            </label>
            <input className="input input-bordered w-64" type="password" name="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />
            <div>
              <Link className="hover:link text-xs" href='/signup'>Create an account?</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-primary" onClick={onLogin}>Login</button>
        </div>
      </div>
    </main>
  )
}
