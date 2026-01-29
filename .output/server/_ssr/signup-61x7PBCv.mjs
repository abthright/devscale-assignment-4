import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { R as Route$4, c as createSsrRpc } from "./router-XwdNL2tY.mjs";
import { u as useRouter, L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { F as Fe, z as zt } from "../_libs/react-hot-toast.mjs";
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
import "../_libs/goober.mjs";
const postRegister = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("42ba3bbfc6772f1778f6b4ba72a7942eaa599706da84ba254c054bbdfff82db6"));
const notify = (msg) => zt(`${msg}`);
function Home() {
  const router = useRouter();
  Route$4.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Fe, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white flex justify-center items-center h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[2rem] text-black text-bold", children: "Get started" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "Welcome to toleransi - Let's create your account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: async (e) => {
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full bg-slate-800 hover:bg-white hover:text-black hover:border-black hover:border-1 text-white py-2 rounded-lg", type: "submit", name: "submit", children: "Sign up" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4", children: [
          "Have an account? ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "login" }) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
