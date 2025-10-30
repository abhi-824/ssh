import type { Route } from "./+types/dashboard";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import StockWorkspace from "~/components/stockAnalysisWorkspace/StockWorkspace";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Analysis - StockSense Hub" },
    { name: "description", content: "Your personal stock analysis dashboard. Explore and analyze stocks with AI-powered insights." },
  ];
}

export default function AnalysisWorkspace() {
  return (
    <ProtectedRoute>
      <StockWorkspace />
    </ProtectedRoute>
  );
}
