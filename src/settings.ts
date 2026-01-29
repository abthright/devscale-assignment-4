import { z } from "zod";

const envSchema = z.object({
  JWT_SECRET: z.string().min(1),
  DATABASE_URL: z.string(),
  URL: z.string()
})

// so basically parse is some sort of using the schema to validate the given data, if data match the schema then it's ok
export const env = envSchema.parse(process.env)
