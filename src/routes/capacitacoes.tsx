import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/capacitacoes")({
  beforeLoad: () => {
    throw redirect({ to: "/cursos", statusCode: 301 });
  },
});
