"use client"

import Header from "@/components/header/Header";
import Offers from "@/components/Offers";
import OrderInformation from "@/components/OrderInformation";
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center gap-6 p-8">
        <Header />
        <section className="flex w-full">
          <Offers />
          <OrderInformation />
        </section>
      </main>
    </NextUIProvider>
  );
}
