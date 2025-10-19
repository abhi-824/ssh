import type { Route } from "./+types/dashboard";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import StockDashboard from "../components/stockDashboard/StockDashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard - StockSense Hub" },
    { name: "description", content: "Your personal stock analysis dashboard. Explore and analyze stocks with AI-powered insights." },
  ];
}

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <StockDashboard />
    </ProtectedRoute>
  );
}
