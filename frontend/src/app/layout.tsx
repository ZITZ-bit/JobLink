import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JobLink",
  description: "Conecta aspirantes con reclutadores fácilmente",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
