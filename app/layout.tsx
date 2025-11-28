import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";

export const metadata: Metadata = {
  title: "Tommaso Cambursano | Software Developer",
  description: "Portfolio of Tommaso Cambursano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&family=Inter:wght@300;400;600;900&display=swap" rel="stylesheet" />

        {/* Tailwind CSS - Note: In a real Next.js app, you'd import Tailwind via PostCSS/globals.css, 
            but for quick migration preserving existing setup, we can keep the CDN or better yet, 
            setup Tailwind properly. Given the user wants a migration, I should probably use the CDN 
            temporarily or assume globals.css handles it if I create it. 
            However, the original index.html used a CDN script for Tailwind. 
            To be safe and quick, I'll include the script, but standard Next.js uses postcss.
            Let's stick to the CDN for now to match the exact previous behavior, 
            or better, I'll add the script tag.
        */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: {
                      mono: ['"JetBrains Mono"', 'monospace'],
                      sans: ['"Inter"', 'sans-serif'],
                    },
                    colors: {
                      onyx: '#0F0E0E',
                      paper: '#FFFFFF',
                      copper: '#DB5A42',
                      gold: '#BDBF09',
                      teal: '#689689',
                      petal: '#E5C3D1',
                    }
                  }
                }
              }
            `,
          }}
        />
        <style>{`
          body {
            background-color: #FFFFFF;
            color: #0F0E0E;
            overflow-x: hidden;
          }
          @media (min-width: 768px) {
            body {
              cursor: none; /* Hide default cursor only on desktop */
            }
          }
          /* Custom scrollbar - Hidden as requested */
          ::-webkit-scrollbar {
            display: none;
          }
          body {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          ::-webkit-scrollbar-track {
            background: #FFFFFF;
          }
          ::-webkit-scrollbar-thumb {
            background: #0F0E0E;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #DB5A42;
          }
          
          .text-stroke {
            -webkit-text-stroke: 1px #0F0E0E;
          }
        `}</style>
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
