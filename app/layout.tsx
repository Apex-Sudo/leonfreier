import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leon Aljoscha Till Freier",
  description: "Three companies, two continents, no outside capital. Alignment. Agreement. Execution.",
  openGraph: {
    title: "Leon Aljoscha Till Freier",
    description: "Strategy.",
    url: "https://leonfreier.com",
    siteName: "Leon Freier",
    images: [{ url: "https://leonfreier.com/og-image.png", width: 1200, height: 630, alt: "Leon Freier" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leon Aljoscha Till Freier",
    description: "Strategy.",
    images: ["https://leonfreier.com/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=DM+Serif+Display&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group identify setPersonProperties".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('phc_uJOopGcIoW4caqPea4fZ8NtAvao3N5Zgb7KgTSorMIl', {api_host: 'https://us.i.posthog.com'});
            `,
          }}
        />
      </head>
      <body className="bg-[#FAFAF8] text-[#1A1A1A] font-['Inter'] antialiased">
        {children}
      </body>
    </html>
  );
}
