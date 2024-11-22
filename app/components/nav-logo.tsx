import { Image } from "@shopify/polaris";
import { useSidebar } from "./ui/sidebar";

export const NavLogo = () => {
  const { open, openMobile } = useSidebar();

  const isOpen = open || openMobile;

  if (isOpen) {
    return (
      <Image
        className="px-2"
        alt="klinko logo"
        source="/assets/logo.png"
        width={150}
      />
    );
  }

  return <Image alt="klinko logo" source="/assets/logo-short.png" width={30} />;
};
