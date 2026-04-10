import { createFileRoute } from "@tanstack/react-router";
import Settings from "../features/settings/settings.tsx";

function RouteComponent() {
  return (
    <>
      <Settings />
    </>
  );
}

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
});
