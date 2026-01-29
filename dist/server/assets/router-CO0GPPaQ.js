import { createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn } from "../server.js";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { logger } from "hono/logger";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import * as runtime from "@prisma/client/runtime/client";
import { verify, sign } from "hono/jwt";
import bcrypt from "bcrypt";
const appCss = "/assets/app-CifyCEkX.css";
const Route$5 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, intial-scale=1"
      },
      {
        title: "TanStack Start Starter"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$3 = () => import("./signup-DOiCMuNE.js");
const Route$4 = createFileRoute("/signup")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
  // loader: async() => await postRegister(),
});
const createSsrRpc = (functionId, importer) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const $$splitComponentImporter$2 = () => import("./profile-nVLAvG6K.js");
createServerFn().handler(createSsrRpc("4c901326afdb5a8467e60fa797f6807182cadcfd4fe1f5f89348a7887f994893"));
const Route$3 = createFileRoute("/profile")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  ssr: false
});
const $$splitComponentImporter$1 = () => import("./login-BbbgYVF4.js");
const Route$2 = createFileRoute("/login")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
  // loader: async() => await getCount(),
});
const $$splitComponentImporter = () => import("./index-BFTEwK6N.js");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
  // loader don't work because it happens in server which don't have access to localStorage
  // loader: async() => await getProfile(),
});
const updateProfileSchema = z.object({
  email: z.email().optional(),
  name: z.string().optional(),
  bio: z.string().optional(),
  avatar: z.url().optional()
});
const config = {
  "previewFeatures": [],
  "clientVersion": "7.3.0",
  "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
  "activeProvider": "sqlite",
  "inlineSchema": '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../src/generated/prisma"\n}\n\ndatasource db {\n  provider = "sqlite"\n}\n\nmodel User {\n  id        String   @id @default(uuid())\n  email     String   @unique\n  password  String\n  name      String?\n  bio       String?\n  avatar    String?\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  todos     Todo[]\n}\n\nmodel Todo {\n  id        String   @id @default(uuid())\n  title     String\n  completed Boolean  @default(false)\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"bio","kind":"scalar","type":"String"},{"name":"avatar","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"todos","kind":"object","type":"Todo","relationName":"TodoToUser"}],"dbName":null},"Todo":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"completed","kind":"scalar","type":"Boolean"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"TodoToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer } = await import("node:buffer");
  const wasmArray = Buffer.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.sqlite.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.sqlite.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}
runtime.Extensions.getExtensionContext;
({
  DbNull: runtime.NullTypes.DbNull,
  JsonNull: runtime.NullTypes.JsonNull,
  AnyNull: runtime.NullTypes.AnyNull
});
runtime.makeStrictEnum({
  Serializable: "Serializable"
});
runtime.Extensions.defineExtension;
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
const PrismaClient = getPrismaClientClass();
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaBetterSqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter });
async function getProfile(userId) {
  const profile2 = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
      bio: true,
      avatar: true,
      createdAt: true
    }
  });
  if (!profile2) throw new Error("Profile not found");
  return profile2;
}
async function updateProfile(userId, data) {
  return prisma.user.update({
    where: { id: userId },
    data,
    select: {
      id: true,
      email: true,
      name: true,
      bio: true,
      avatar: true,
      createdAt: true
    }
  });
}
const envSchema = z.object({
  JWT_SECRET: z.string().min(1),
  DATABASE_URL: z.url()
});
const env = envSchema.parse(process.env);
const authMiddleware = async (c, next) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    throw new HTTPException(401, {
      message: "Unauthorized: Missing or invalid token"
    });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = await verify(token, env.JWT_SECRET, "HS256");
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, email: true, name: true }
    });
    if (!user) {
      throw new HTTPException(401, {
        message: "Unauthorized: User not found"
      });
    }
    c.set("user", user);
    await next();
  } catch (error) {
    if (error instanceof HTTPException) throw error;
    throw new HTTPException(401, { message: "Unauthorized: Invalid token" });
  }
};
const profile = new Hono().use("*", authMiddleware).get("/me", async (c) => {
  const user = c.get("user");
  try {
    const profile2 = await getProfile(user.id);
    return c.json({ success: true, data: profile2 });
  } catch (error) {
    throw new HTTPException(404, {
      message: error instanceof Error ? error.message : "Profile not found"
    });
  }
}).put("/me", zValidator("json", updateProfileSchema), async (c) => {
  const user = c.get("user");
  const data = c.req.valid("json");
  try {
    const profile2 = await updateProfile(user.id, data);
    return c.json({ success: true, data: profile2 });
  } catch (error) {
    console.error(error);
    throw new HTTPException(400, { message: "Failed to update profile" });
  }
});
const registerSchema = z.object({
  email: z.email(),
  password: z.string().min(6, "Password too short")
});
const loginSchema = z.object({
  email: z.email(),
  password: z.string()
});
async function register(data) {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword
    },
    select: {
      id: true,
      email: true,
      createdAt: true
    }
  });
}
async function login(data) {
  const user = await prisma.user.findUnique({
    where: { email: data.email }
  });
  if (!user) throw new Error("Invalid credentials");
  const validPassword = await bcrypt.compare(data.password, user.password);
  if (!validPassword) throw new Error("Invalid credentials");
  const accessToken = await sign({ id: user.id }, env.JWT_SECRET);
  return { accessToken };
}
const auth = new Hono().post("/register", zValidator("json", registerSchema), async (c) => {
  const data = c.req.valid("json");
  try {
    const user = await register(data);
    return c.json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    throw new HTTPException(400, { message: "Email already exists" });
  }
}).post("/login", zValidator("json", loginSchema), async (c) => {
  const data = c.req.valid("json");
  try {
    const user = await login(data);
    return c.json({ success: true, data: user });
  } catch (error) {
    throw new HTTPException(401, {
      message: error instanceof Error ? error.message : "Invalid credentials"
    });
  }
});
const customLogger = (message, ...rest) => {
  console.log(message, ...rest);
};
const app = new Hono().basePath("/api").use(logger(customLogger)).onError((err, c) => {
  if (err instanceof HTTPException) {
    return c.json({ error: err.message }, err.status);
  }
  if (err.name === "ZodError") {
    return c.json({ error: err }, 400);
  }
  console.error(err);
  return c.json({
    error: err.message || "Internal Server Error"
  }, 500);
}).get("/", (c) => {
  return c.text("Hello world");
}).route("/profile", profile).route("/auth", auth);
const Route = createFileRoute("/api/$")({
  server: {
    handlers: {
      GET: ({ request }) => app.fetch(request),
      POST: ({ request }) => app.fetch(request),
      PUT: ({ request }) => app.fetch(request),
      PATCH: ({ request }) => app.fetch(request),
      DELETE: ({ request }) => app.fetch(request),
      OPTIONS: ({ request }) => app.fetch(request)
    }
  }
});
const SignupRoute = Route$4.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$5
});
const ProfileRoute = Route$3.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => Route$5
});
const LoginRoute = Route$2.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$5
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const ApiSplatRoute = Route.update({
  id: "/api/$",
  path: "/api/$",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  LoginRoute,
  ProfileRoute,
  SignupRoute,
  ApiSplatRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$4 as R,
  Route$2 as a,
  createSsrRpc as c,
  router as r
};
