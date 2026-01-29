import { h as hc } from "../_libs/hono.mjs";
const client = hc("http://localhost:3000/", {
  headers: () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      return token ? { Authorization: `Bearer ${token}` } : {};
    } else {
      return {};
    }
  }
});
export {
  client as c
};
