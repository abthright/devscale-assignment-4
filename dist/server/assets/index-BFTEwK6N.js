import { jsx, jsxs } from "react/jsx-runtime";
import { useRouter, Link } from "@tanstack/react-router";
function Home() {
  useRouter();
  return /* @__PURE__ */ jsx("div", { className: "bg-gray-800 flex justify-center items-center h-screen", children: /* @__PURE__ */ jsxs(Link, { to: "/login", className: "p-2 text-white h-fit border-4 border-white hover:bg-white hover:text-black hover:border-black", type: "button", children: [
    "Welcome back ~!? ",
    /* @__PURE__ */ jsx("b", { children: "Click to login" })
  ] }) });
}
export {
  Home as component
};
