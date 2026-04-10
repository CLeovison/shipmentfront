import { createFileRoute } from "@tanstack/react-router";
import Navigation from "../shared/navigation/Navigation.tsx";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navigation />
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}

function IndexPage() {
  return (
    <AppLayout>
      <div style={{ color: "#fff", textAlign: "center", padding: "2rem" }}>Welcome to Shipment Tracker</div>
    </AppLayout>
  );
}

export const Route = createFileRoute("/")({
  component: IndexPage,
});
