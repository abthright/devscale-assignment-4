import type { AppType } from "~/api/index"
import { hc } from "hono/client"

export const client = hc<AppType>("http://localhost:3000" , {
  headers: () => {
    // check if this is called in the server or  not
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token")
      return token ? { Authorization: `Bearer ${token}`} : {}
    } else {
      return {}
    }
  },
})
