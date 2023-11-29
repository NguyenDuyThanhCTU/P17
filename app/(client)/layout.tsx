import Footer from "@components/layout/client-layout/Footer";
import Header from "@components/layout/client-layout/Header";
import TopFooter from "@components/layout/client-layout/Items/TopFooter";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="font-LexendDeca font-extralight">
      <Header />
      <div className="mt-[170px]">{children}</div>

      <TopFooter />
      <Footer />
    </div>
  );
};

export default layout;
