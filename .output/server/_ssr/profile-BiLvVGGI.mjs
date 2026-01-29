import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { c as createSsrRpc } from "./router-XwdNL2tY.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { c as client } from "./hono-client-E2DDfUXC.mjs";
import { c as createServerFn } from "./index.mjs";
import { M as Mail } from "../_libs/lucide-react.mjs";
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
createServerFn().handler(createSsrRpc("4c901326afdb5a8467e60fa797f6807182cadcfd4fe1f5f89348a7887f994893"));
const getData2 = async () => {
  const res = await client.api.profile.me.$get();
  const data = await res.json();
  console.log(data.data);
  return data.data;
};
function RouteComponent() {
  const [data, setData] = reactExports.useState({});
  reactExports.useEffect(() => {
    getData2().then(setData);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center h-[80vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 bg-neutral-900 rounded-3xl p-4 w-fit", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 bg-neutral-800 p-4 rounded-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/image.png", className: "w-[140px] rounded-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white text-[1.4rem]", children: "Mentor rizz" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-100", children: data?.email })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-3xl bg-neutral-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[1.2rem] text-white", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "w-[300px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "before:content-['🎉'] before:mr-2", children: "tidak suka yg bloated, ie axios" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "before:content-['🎉']" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "preaching zen python : ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Explicit is better than implicit" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "before:content-['🎉'] before:mr-2", children: "new tab daily.dev" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "before:content-['🎉'] before:mr-2", children: "tidak suka useContext" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "before:content-['🎉'] before:mr-2", children: "selalu ready snack" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "https://devscale.id", className: "bg-lime-400 py-4 rounded-3xl flex flex-cols gap-2 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Message" })
    ] })
  ] }) });
}
export {
  RouteComponent as component
};
