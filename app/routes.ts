import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("signin", "routes/signin.tsx"),
  route("signup", "routes/signup.tsx"),
  route("dashboard", "routes/dashboard.tsx"),
  route("learning", "routes/learning.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("analysis","routes/analysis.tsx")
] satisfies RouteConfig;
