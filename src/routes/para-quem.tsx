import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/para-quem")({
  beforeLoad: () => {
    throw redirect({ to: "/orgaos-publicos" });
  },
});
