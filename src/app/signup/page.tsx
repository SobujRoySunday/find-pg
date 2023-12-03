"use client"

import { UserRoles } from "@prisma/client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from "axios"
import Link from "next/link"

export default function SignUpPage() {
  const router = useRouter()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    role: UserRoles.CLIENT
  })

  async function onSignup() {
    try {
      await axios.post('/api/signup', user)
      router.push('/login')
    } catch (error: any) {
      console.log(error)
    }
  }
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center card card-normal shadow-xl bg-base-300 p-5 gap-5">
        <h1 className="text-6xl text-primary text-center">SIGNUP</h1>
        <div className="form flex flex-col justify-center gap-1">
          <div className="">
            <label className="label">
              <p className="label-text">Name</p>
            </label>
            <input className="input input-bordered w-64" type="text" name="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} required />
          </div>
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
          </div>
          <div>
            <label className="label">
              <p className="label-text">Retype Password:</p>
            </label>
            <input className="input input-bordered w-64" type="password" name="rePassword" value={user.rePassword} onChange={(e) => setUser({ ...user, rePassword: e.target.value })} required />
          </div>
          <div>
            <Link className="text-xs hover:link" href='login'>Already have an account?</Link>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-primary" onClick={onSignup}>Create</button>
        </div>
      </div>
    </main>
  )
}
