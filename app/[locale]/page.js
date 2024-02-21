"use client"

import Header from "@/components/header/Header";
import Offers from "@/components/Offers";
import OrderInformation from "@/components/OrderInformation";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-6 p-8">
      <Header />
      <section className="flex w-full justify-center flex-wrap xl:flex-nowrap">
        <Offers />
        <OrderInformation />
      </section>
    </div>
  );
}
