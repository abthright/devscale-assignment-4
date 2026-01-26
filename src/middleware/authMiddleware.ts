import type { Context, Next} from "hono"
import { HTTPException } from "hono/http-exception"
import { decode, sign, verify } from "hono/jwt"
import { env } from "~/settings"
import { prisma } from "~/utils/prisma"

export type AuthUser = {
  id: string
  email: string
  name: string | null
}

export type AuthVariables = {
  user: AuthUser
}

// TODO : bro understand this auth and how it works, write it
// so basically in /auth login we do some signing of jwt token using
// id and the secret. i believe
export const authMiddleware = async (
  c: Context<{ Variables: AuthVariables }>,
  next: Next,
) => {
  const authHeader = c.req.header("Authorization")
  if (!authHeader?.startsWith("Bearer ")) {
    throw new HTTPException(401, {
      message: "Unauthorized: Missing or invalid token",
    })
  }

  const token = authHeader.split(" ")[1]

  try {
    // i believe verify here is reversing the token into user id
    const decoded = await verify(token, env.JWT_SECRET, "HS256") as { id: string }
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, email: true, name: true},
    })

    if(!user) {
      throw new HTTPException(401, {
        message: "Unauthorized: User not found"
      })
    }
  
    // and this set method from context object, it saves a value for
    // later use with the next middleware or the endpoint itself
    c.set("user", user)
    await next()
  } catch (error) {
    if (error instanceof HTTPException) throw error
    throw new HTTPException(401, { message: "Unauthorized: Invalid token" })
  }
}
