import { jsx, jsxs } from "react/jsx-runtime";
import { a as Route, c as createSsrRpc } from "./router-CO0GPPaQ.js";
import { useRouter, Link } from "@tanstack/react-router";
import { c as createServerFn } from "../server.js";
import "hono";
import "hono/http-exception";
import "hono/logger";
import "@hono/zod-validator";
import "zod";
import "dotenv/config";
import "@prisma/adapter-better-sqlite3";
import "node:path";
import "node:url";
import "@prisma/client/runtime/client";
import "hono/jwt";
import "bcrypt";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
const postLogin = createServerFn({
  method: "GET"
}).handler(createSsrRpc("1a93f2787354a2b91dbfaa86e86143a1a674465f5290518021a6f15c1cbeb03c"));
function Home() {
  const router = useRouter();
  Route.useLoaderData();
  return /* @__PURE__ */ jsx("div", { className: "bg-white flex justify-center items-center h-screen", children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { className: "text-[2rem] text-black text-bold", children: "Welcome back ~!" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Welcome to toleransi - Let's get to work" }),
    /* @__PURE__ */ jsx("hr", { className: "my-4" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = await postLogin({
        data: {
          email: String(formData.get("email")),
          password: String(formData.get("password"))
        }
      });
      localStorage.setItem("access_token", data.data.accessToken);
      router.navigate({
        to: "/profile"
      });
      console.log(data);
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsx("input", { type: "email", id: "email", name: "email", placeholder: "something@something.com", autoComplete: "email", className: "px-2 py-2 border-1 border-gray-300 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col mb-4", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsx("input", { type: "password", id: "password", name: "password", placeholder: "*****", autoComplete: "password", className: "px-2 py-2 border-1 border-gray-300 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "w-full bg-slate-800 hover:bg-white hover:text-black hover:border-black hover:border-1 text-white py-2 rounded-lg", type: "submit", name: "submit", children: "Sign in" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4", children: [
        "Don't have an account? ",
        /* @__PURE__ */ jsx(Link, { to: "/signup", children: /* @__PURE__ */ jsx("b", { children: "Sign up" }) })
      ] })
    ] })
  ] }) });
}
export {
  Home as component
};
