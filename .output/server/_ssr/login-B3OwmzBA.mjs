import { c as createServerRpc } from "./createServerRpc-29xaFZcb.mjs";
import { c as client } from "./hono-client-E2DDfUXC.mjs";
import { c as createServerFn } from "./index.mjs";
import "../_libs/hono.mjs";
import "node:async_hooks";
import "../_chunks/_libs/react.mjs";
import "../_chunks/_libs/@tanstack/react-router.mjs";
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
