import Nav from "../components/nav";
import Footer from "../components/footer";
import { Metadata } from "next";
import { siteConfig } from "../lib/constants";

export const metadata: Metadata = {
  title: `Dashboard - ${siteConfig.companyName}`,
  description: "Landing Page",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav companyName={siteConfig.companyName as string}></Nav>
      <main className="grow">{children}</main>
      <Footer></Footer>;
    </>
  );
}
