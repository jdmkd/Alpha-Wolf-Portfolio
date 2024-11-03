// import ECommerce from "@/components/Dashboard/E-commerce";
import Academics from "@/components/Academics/Academics";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title:"Admin Dashboard",
  description: "Home page",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        {/* <ECommerce /> */}
        <Academics />
      </DefaultLayout>
    </>
  );
}
