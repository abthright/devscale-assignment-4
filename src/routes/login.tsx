import { createFileRoute, useRouter } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"
import { warn } from "node:console"
import { client } from "~/utils/hono-client"

const filePath = "count.txt"


const getCount = createServerFn({
  method: "GET",
}).handler( async () => {
  const res = await client.api.profile["me"].$get()
  console.log(res)
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
    <div className="bg-gray-800 flex justify-center items-center h-screen">
      <button
        className="p-2 font-bold text-white h-fit border-4 border-white hover:bg-white hover:text-black hover:border-black"
        type="button"
        onClick={() => {
            router.invalidate().then(()=>getCount())
          }
        }
      >
        Add 1 to something {state}?
      </button>
    </div>
  )
}
