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
