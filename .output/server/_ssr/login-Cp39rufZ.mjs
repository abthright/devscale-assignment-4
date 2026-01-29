import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { a as Route$2, c as createSsrRpc } from "./router-XwdNL2tY.mjs";
import { u as useRouter, L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { c as createServerFn } from "./index.mjs";
import "../_libs/hono.mjs";
import "../_chunks/_libs/@hono/zod-validator.mjs";
import "../_chunks/_libs/@prisma/adapter-better-sqlite3.mjs";
import "../_chunks/_libs/@prisma/driver-adapter-utils.mjs";
import "../_chunks/_libs/@prisma/debug.mjs";
import "better-sqlite3";
import "node:path";
import "node:url";
import "../_chunks/_libs/@prisma/client.mjs";
import "node:crypto";
import "../_chunks/_libs/@prisma/client-runtime-utils.mjs";
import "node:fs";
import "node:async_hooks";
import "node:events";
import "node:os";
import "bcrypt";
import "../_libs/zod.mjs";
import "../_libs/tiny-warning.mjs";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_chunks/_libs/@tanstack/store.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/tiny-invariant.mjs";
import "node:stream/web";
import "node:stream";
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_chunks/_libs/@tanstack/react-store.mjs";
import "../_libs/use-sync-external-store.mjs";
const postLogin = createServerFn({
  method: "GET"
}).handler(createSsrRpc("1a93f2787354a2b91dbfaa86e86143a1a674465f5290518021a6f15c1cbeb03c"));
function Home() {
  const router = useRouter();
  Route$2.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white flex justify-center items-center h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[2rem] text-black text-bold", children: "Welcome back ~!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "Welcome to toleransi - Let's get to work" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "my-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: async (e) => {
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", id: "email", name: "email", placeholder: "something@something.com", autoComplete: "email", className: "px-2 py-2 border-1 border-gray-300 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", id: "password", name: "password", placeholder: "*****", autoComplete: "password", className: "px-2 py-2 border-1 border-gray-300 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full bg-slate-800 hover:bg-white hover:text-black hover:border-black hover:border-1 text-white py-2 rounded-lg", type: "submit", name: "submit", children: "Sign in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4", children: [
        "Don't have an account? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Sign up" }) })
      ] })
    ] })
  ] }) });
}
export {
  Home as component
};
