import { createFileRoute, useRouter, Link } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"
import { client } from "~/utils/hono-client"

const filePath = "count.txt"

// const updateCount = createServerFn({ method: "POST" })
//   .inputValidator((d:number) => d)
//   .handler(async ({ data }) => {
//     const count = await getProfile()
//     await fs.promises.writeFile(filePath, `${count>=100 ? 0 : count + data}`)
//   })

export const Route = createFileRoute("/")({
  component: Home,
  // loader don't work because it happens in server which don't have access to localStorage
  // loader: async() => await getProfile(),
})

function Home() {
  const router = useRouter()
  // const state = Route.useLoaderData()

  return (
    <div className="bg-gray-800 flex justify-center items-center h-screen">
      <Link
        to="/login"
        className="p-2 text-white h-fit border-4 border-white hover:bg-white hover:text-black hover:border-black"
        type="button"
      >
        Welcome back ~!? <b>Click to login</b>
      </Link>
    </div>
  )
}
