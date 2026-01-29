import { c as createServerRpc } from "./createServerRpc-Bd3B-Ah9.js";
import { c as client } from "./hono-client-E2DDfUXC.js";
import { c as createServerFn } from "../server.js";
import "hono/client";
import "node:async_hooks";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
const getData_createServerFn_handler = createServerRpc({
  id: "4c901326afdb5a8467e60fa797f6807182cadcfd4fe1f5f89348a7887f994893",
  name: "getData",
  filename: "src/routes/profile.tsx"
}, (opts, signal) => getData.__executeServer(opts, signal));
const getData = createServerFn().handler(getData_createServerFn_handler, async () => {
  const res = await client.api.profile.me.$get();
  const data = await res.json();
  console.log(data);
  return data;
});
export {
  getData_createServerFn_handler
};
