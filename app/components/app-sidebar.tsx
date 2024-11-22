import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  AutomationIcon,
  ChartVerticalIcon,
  ChatIcon,
  CreditCardIcon,
  QuestionCircleIcon,
  WrenchIcon,
} from "@shopify/polaris-icons";
import { Avatar } from "@shopify/polaris";

import { ProjectSwitcher } from "./project-switcher";
import { NavCollapsible } from "./nav-collapsible";
import { Nav } from "./nav";
import { NavProject } from "./nav-project";
import { NavLogo } from "./nav-logo";

const data = {
  project: {
    name: "TESTE PROD LI",
    email: "teste-prod-li@gmail.com",
    avatar: "",
  },
  projects: [
    {
      name: "TESTE PROD LI",
      logo: Avatar,
      description: "Descrição",
    },
  ],
  navMain: [
    {
      title: "Automações",
      url: "#",
      icon: AutomationIcon,
      isActive: true,
      items: [
        {
          title: "Whatsapp",
          url: "#",
        },
      ],
    },
    {
      title: "Ferramentas",
      url: "#",
      icon: WrenchIcon,
      items: [],
      fallbackMessage: "Nenhuma ferramenta! 😢",
    },
  ],
  statistics: [
    {
      title: "Estatísticas",
      url: "#",
      icon: ChartVerticalIcon,
    },
  ],
  config: [
    {
      title: "Cobrança",
      url: "#",
      icon: CreditCardIcon,
    },
  ],
  support: [
    {
      title: "Central de ajuda",
      url: "#",
      icon: QuestionCircleIcon,
    },
    {
      title: "Criar chamado",
      url: "#",
      icon: ChatIcon,
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b-2 py-4 px-2">
        <NavLogo />
      </SidebarHeader>
      <SidebarHeader className="border-b-2 py-4 pl-2">
        <ProjectSwitcher projects={data.projects} />
      </SidebarHeader>
      <SidebarContent>
        <NavCollapsible items={data.navMain} />
        <Nav items={data.statistics} />
        <Nav title="Configurações" items={data.config} />
        <Nav title="Suporte" items={data.support} />
      </SidebarContent>
      <SidebarFooter className="items-center justify-center">
        <NavProject project={data.project} />
      </SidebarFooter>
    </Sidebar>
  );
}
