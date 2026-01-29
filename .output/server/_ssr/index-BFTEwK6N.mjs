import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { u as useRouter, L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
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
function Home() {
  useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-800 flex justify-center items-center h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", className: "p-2 text-white h-fit border-4 border-white hover:bg-white hover:text-black hover:border-black", type: "button", children: [
    "Welcome back ~!? ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Click to login" })
  ] }) });
}
export {
  Home as component
};
