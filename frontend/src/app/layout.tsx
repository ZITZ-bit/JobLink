import type { Metadata } from "next";
import SecretShortcut from "@/utils/ts/SecretShortcut";

export const metadata: Metadata = {
  title: "JobLink",
  description: "Conecta aspirantes con reclutadores fácilmente",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="es">
      <body className="grid min-h-screen grid-rows-[auto_1fr_auto]">

        <SecretShortcut />
        {children}

      </body>
    </html>
  );
}
