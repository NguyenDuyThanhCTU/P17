import Footer from "@components/layout/client-layout/Footer";
import Header from "@components/layout/client-layout/Header";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="font-LexendDeca font-extralight">
      <Header />
      <div className="mt-[211px]">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
