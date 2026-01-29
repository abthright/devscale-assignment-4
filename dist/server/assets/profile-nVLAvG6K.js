import { jsx, jsxs } from "react/jsx-runtime";
import { c as createSsrRpc } from "./router-CO0GPPaQ.js";
import { Link } from "@tanstack/react-router";
import { c as client } from "./hono-client-E2DDfUXC.js";
import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
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
import "hono/client";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
createServerFn().handler(createSsrRpc("4c901326afdb5a8467e60fa797f6807182cadcfd4fe1f5f89348a7887f994893"));
const getData2 = async () => {
  const res = await client.api.profile.me.$get();
  const data = await res.json();
  console.log(data.data);
  return data.data;
};
function RouteComponent() {
  const [data, setData] = useState({});
  useEffect(() => {
    getData2().then(setData);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-[80vh]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 bg-neutral-900 rounded-3xl p-4 w-fit", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4 bg-neutral-800 p-4 rounded-3xl", children: [
      /* @__PURE__ */ jsx("img", { src: "/image.png", className: "w-[140px] rounded-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold text-white text-[1.4rem]", children: "Mentor rizz" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-100", children: data?.email })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-3xl bg-neutral-800", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[1.2rem] text-white", children: "About" }),
      /* @__PURE__ */ jsx("div", { className: "text-gray-100", children: /* @__PURE__ */ jsxs("ul", { className: "w-[300px]", children: [
        /* @__PURE__ */ jsx("li", { className: "before:content-['🎉'] before:mr-2", children: "tidak suka yg bloated, ie axios" }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
          /* @__PURE__ */ jsx("span", { className: "before:content-['🎉']" }),
          /* @__PURE__ */ jsxs("div", { children: [
            "preaching zen python : ",
            /* @__PURE__ */ jsx("b", { children: "Explicit is better than implicit" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "before:content-['🎉'] before:mr-2", children: "new tab daily.dev" }),
        /* @__PURE__ */ jsx("li", { className: "before:content-['🎉'] before:mr-2", children: "tidak suka useContext" }),
        /* @__PURE__ */ jsx("li", { className: "before:content-['🎉'] before:mr-2", children: "selalu ready snack" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(Link, { to: "https://devscale.id", className: "bg-lime-400 py-4 rounded-3xl flex flex-cols gap-2 justify-center", children: [
      /* @__PURE__ */ jsx(Mail, {}),
      /* @__PURE__ */ jsx("p", { children: "Message" })
    ] })
  ] }) });
}
export {
  RouteComponent as component
};
