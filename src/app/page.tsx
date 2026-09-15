import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-12 text-center">
      <Image
        src="/logo.png"
        alt="The Warehouse"
        width={1024}
        height={1024}
        priority
        className="h-auto w-64 sm:w-80 md:w-96"
      />
      <h1 className="font-display text-3xl font-semibold uppercase tracking-wide sm:text-5xl">
        Nauč se e-commerce
      </h1>
      <p className="font-display max-w-xl text-lg font-medium text-foreground/70 sm:text-2xl">
        Od prvního produktu k fungujícímu online byznysu. Už brzy.
      </p>
      <div className="mt-8 text-xs text-foreground/40">
        Impact-Site-Verification: ff0b9ff6-96e8-4726-95ec-ad071c22b45b
      </div>
    </main>
  );
}
