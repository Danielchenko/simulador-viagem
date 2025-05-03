// app/layout.tsx
import '../styles/globals.scss'; // ou './globals.scss', se você estiver usando Sass

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Simulador de Viagem</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
