import type { Route } from "./+types/signin";
import  SignInForm from "../components/auth/AuthForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sign In - StockSense Hub" },
    { name: "description", content: "Sign in to your StockSense Hub account to continue your stock analysis practice." },
  ];
}

export default function SignIn() {
  return <SignInForm isSignup={false} />;
}
