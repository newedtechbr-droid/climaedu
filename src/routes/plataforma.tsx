import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/plataforma")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
