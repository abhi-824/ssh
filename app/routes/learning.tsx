import type { Route } from "./+types/dashboard";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import LearningDashboard from "~/components/LearningDashboard/LearningDashboard";

export function meta({}: Route.MetaArgs) {
  return [
      { title: "Learning Center - StockSense Hub" },
    { name: "description", content: "Your personal learning center. Learn about stock analysis and investing with AI-powered insights." },
  ];
}

export default function Learning() {
  return (
    <ProtectedRoute>
      <LearningDashboard />
    </ProtectedRoute>
  );
}
