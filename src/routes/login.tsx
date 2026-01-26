import { createFileRoute, useRouter } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"
import { client } from "~/utils/hono-client"

const getCount = createServerFn({
  method: "GET",
}).handler( async () => {
  const res = await client.api.profile.me.$get().then(async(res)=> await res.json())
  return res.data
})

export const Route = createFileRoute("/login")({
  component: Home,
  loader: async() => await getCount(),
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <div className="bg-white flex justify-center items-center h-screen">
    <div> 
      <h1 className="text-[2rem] text-black text-bold">Welcome back ~!</h1>
      <p className="text-gray-500">Welcome to toleransi - Let's create your account</p>
      <hr className="my-4"/>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="emailInput">Email</label>
          <input type="email" id="emailInput" name="emailInput" placeholder="something@something.com" autoComplete="email" className="px-2 py-2 border-1 border-gray-300 rounded-lg"/>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="passwordInput">Password</label>
          <input type="password" id="passwordInput" name="passwordInput" placeholder="*****" autoComplete="password" className="px-2 py-2 border-1 border-gray-300 rounded-lg"/>
        </div>
      </div>
        <button className="w-full bg-slate-800 hover:bg-white hover:text-black hover:border-black hover:border-1 text-white py-2 rounded-lg" type="submit" name="submit">Sign in</button>
      </form>
      </div>
    </div>  
  )
}
