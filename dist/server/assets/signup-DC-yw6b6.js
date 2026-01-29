import { c as createServerRpc } from "./createServerRpc-Bd3B-Ah9.js";
import { c as client } from "./hono-client-E2DDfUXC.js";
import { c as createServerFn } from "../server.js";
import "hono/client";
import "node:async_hooks";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
const postRegister_createServerFn_handler = createServerRpc({
  id: "42ba3bbfc6772f1778f6b4ba72a7942eaa599706da84ba254c054bbdfff82db6",
  name: "postRegister",
  filename: "src/routes/signup.tsx"
}, (opts, signal) => postRegister.__executeServer(opts, signal));
const postRegister = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(postRegister_createServerFn_handler, async ({
  data
}) => {
  const res = await client.api.auth.register.$post({
    json: data
  });
  const response = await res.json();
  return response;
});
export {
  postRegister_createServerFn_handler
};
