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
