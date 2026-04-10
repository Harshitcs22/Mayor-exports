import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayor Futuristic | Tier-1 OEM Manufacturing & Synthetic Surface Engineering",
  description:
    "Since 1960. Trusted Tier-1 OEM partner to global leaders. Precision synthetic surfaces, sports manufacturing, and advanced PU/PVC leather engineering for automotive and performance gear.",
  keywords: [
    "OEM manufacturing",
    "synthetic surfaces",
    "PU PVC leather",
    "sports equipment",
    "Mayor Futuristic",
    "Fabino Fibres",
    "Decathlon OEM",
  ],
  openGraph: {
    title: "Mayor Futuristic | Synthetic Frontier Engineering",
    description:
      "Six decades of precision manufacturing. Now engineered for the future.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Space+Grotesk:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-white antialiased">
        {children}
        <Script
          id="chatbase-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="OVMyJAb2XGiEXgPcOgqz5";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
            `,
          }}
        />
      </body>
    </html>
  );
}
