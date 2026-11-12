import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/diferenciais")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
