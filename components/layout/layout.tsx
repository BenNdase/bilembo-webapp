"use client";

import Head from "next/head";
import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export type Props = {
  className?: string;
  title?: string;
  content?: string;
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children, title, content }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <main className="min-h-screen bg-white">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
