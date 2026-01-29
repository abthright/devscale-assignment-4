import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { R as Route, c as createSsrRpc } from "./router-CO0GPPaQ.js";
import { useRouter, Link } from "@tanstack/react-router";
import toast, { Toaster } from "react-hot-toast";
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
const postRegister = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("42ba3bbfc6772f1778f6b4ba72a7942eaa599706da84ba254c054bbdfff82db6"));
const notify = (msg) => toast(`${msg}`);
function Home() {
  const router = useRouter();
  Route.useLoaderData();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsx("div", { className: "bg-white flex justify-center items-center h-screen", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-[2rem] text-black text-bold", children: "Get started" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Welcome to toleransi - Let's create your account" }),
      /* @__PURE__ */ jsx("hr", { className: "my-4" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = await postRegister({
          data: {
            email: String(formData.get("email")),
            password: String(formData.get("password"))
          }
        });
        if ("error" in data) {
          notify(data.error);
        } else {
          notify("sign up success");
          localStorage.setItem("access_token", data);
          router.navigate({
            to: "/login"
          });
        }
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
        /* @__PURE__ */ jsx("button", { className: "w-full bg-slate-800 hover:bg-white hover:text-black hover:border-black hover:border-1 text-white py-2 rounded-lg", type: "submit", name: "submit", children: "Sign up" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4", children: [
          "Have an account? ",
          /* @__PURE__ */ jsx(Link, { to: "/login", children: /* @__PURE__ */ jsx("b", { children: "login" }) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
