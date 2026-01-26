import { createFileRoute, useRouter, Link } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"
import { client } from "~/utils/hono-client"

const postRegister = createServerFn({
  method: "POST",
})
.inputValidator((data: {email: string, password: string}) => data)
.handler( async ({ data }) => {
  const res = await client.api.auth.register.$post({json: data})
  const response = await res.json()
  return response
})

export const Route = createFileRoute("/signup")({
  component: Home,
  // loader: async() => await postRegister(),
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <div className="bg-white flex justify-center items-center h-screen">
    <div> 
      <h1 className="text-[2rem] text-black text-bold">Get started</h1>
      <p className="text-gray-500">Welcome to toleransi - Let's create your account</p>
      <hr className="my-4"/>
      <form
        onSubmit={ async (e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const data = await postRegister({ data: {
            email: String(formData.get("email")),
            password: String(formData.get("password"))
            }
          })
          console.log(data)
        }}
      >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="something@something.com" autoComplete="email" className="px-2 py-2 border-1 border-gray-300 rounded-lg"/>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="*****" autoComplete="password" className="px-2 py-2 border-1 border-gray-300 rounded-lg"/>
        </div>
      </div>
        <button className="w-full bg-slate-800 hover:bg-white hover:text-black hover:border-black hover:border-1 text-white py-2 rounded-lg" type="submit" name="submit">Sign up</button>
        <p className="mt-4">Have an account? <Link to="/login"><b>login</b></Link></p>
      </form>
      </div>
    </div>  
  )
}
