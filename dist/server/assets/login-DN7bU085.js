import { c as createServerRpc } from "./createServerRpc-Bd3B-Ah9.js";
import { c as client } from "./hono-client-E2DDfUXC.js";
import { c as createServerFn } from "../server.js";
import "hono/client";
import "node:async_hooks";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
const postLogin_createServerFn_handler = createServerRpc({
  id: "1a93f2787354a2b91dbfaa86e86143a1a674465f5290518021a6f15c1cbeb03c",
  name: "postLogin",
  filename: "src/routes/login.tsx"
}, (opts, signal) => postLogin.__executeServer(opts, signal));
const postLogin = createServerFn({
  method: "GET"
}).handler(postLogin_createServerFn_handler, async ({
  data
}) => {
  const res = await client.api.auth.login.$post({
    json: data
  });
  const response = await res.json();
  return response;
});
export {
  postLogin_createServerFn_handler
};
