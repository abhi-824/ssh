import type { Route } from "./+types/home";
import { StockAnalyzer } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SSH" },
    { name: "description", content: "SSH into stock sense hub to pick the stocks that will make you above BPL!" },
  ];
}

export default function Home() {
  return <StockAnalyzer />;
}
