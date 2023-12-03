import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="">
        <h1 className="text-6xl font-lighter text-white">Find your suitable room right away</h1>
        <div className="flex justify-center gap-5 py-5">
          <Link href='/login' className="btn btn-primary w-40">LOGIN</Link>
          <Link href='/signup' className="btn btn-accent w-40">SIGNUP</Link>
        </div>
      </div>
    </main >
  )
}
