import {
  Palette,
  BookOpen,
  Award,
  BarChart3,
  FileSpreadsheet,
  Sparkles,
  Users,
  Shield,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const features = [
  { icon: Palette, title: "Ambiente online com identidade da instituição", text: "Logo, cores e domínio próprios. A plataforma fala em nome do órgão ou empresa." },
  { icon: BookOpen, title: "Trilhas e cursos climáticos aplicados", text: "Conteúdo técnico atualizado, conectado a normas, riscos e rotinas." },
  { icon: Award, title: "Certificados automáticos", text: "Emissão nominal a cada conclusão, com validação institucional." },
  { icon: BarChart3, title: "Dashboards de adesão, conclusão e proficiência", text: "Visão por unidade, perfil ou trilha, em tempo real." },
  { icon: FileSpreadsheet, title: "Relatórios exportáveis", text: "Para gestão, auditoria e prestação de contas — em PDF e planilhas." },
  { icon: Sparkles, title: "IA para apoio à criação de conteúdos", text: "Aceleração de produção e atualização, sempre com curadoria humana especializada." },
  { icon: Users, title: "Perfis de acesso e gestão de usuários", text: "Hierarquia por secretaria, unidade ou área, com permissões claras." },
  { icon: Shield, title: "Acessibilidade, LGPD e exportação de dados", text: "Conformidade técnica e segurança institucional desde o primeiro acesso." },
];

export function PlatformFeaturesSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <FadeIn>
          <SectionTitle
            eyebrow="A plataforma"
            title="O que a CLIMAEDU entrega"
            subtitle="Tudo que sua instituição precisa para operar capacitação climática de ponta a ponta."
            align="center"
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover
