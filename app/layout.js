import "./globals.css";

export const metadata = {
  title: "Swarup Sidhartho Mondol | Software Engineer & Researcher at BUET",
  description:
    "Final-year CSE student at BUET. I build full-stack apps, blockchain backends, and ML tools. Champion at International Blockchain Olympiad 2025. Research in DNA data storage and quantum ML.",
  keywords:
    "Swarup Sidhartho Mondol, BUET CSE, software engineer, blockchain developer, machine learning, NeurIPS, International Blockchain Olympiad, full-stack developer, Bangladesh, Web3, Solidity, Next.js, Python",
  authors: [{ name: "Swarup Sidhartho Mondol" }],
  creator: "Swarup Sidhartho Mondol",
  metadataBase: new URL("https://chottosid.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Swarup Sidhartho Mondol | Software Engineer & Researcher",
    description:
      "Final-year CSE student at BUET building full-stack apps, blockchain backends, and ML tools. Champion at International Blockchain Olympiad 2025.",
    url: "https://chottosid.github.io",
    siteName: "Swarup Sidhartho Mondol",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/portrait.jpg",
        width: 400,
        height: 400,
        alt: "Swarup Sidhartho Mondol",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Swarup Sidhartho Mondol | Software Engineer & Researcher",
    description:
      "Final-year CSE at BUET. Full-stack, blockchain, ML. IBO 2025 Champion.",
    images: ["/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Swarup Sidhartho Mondol",
  url: "https://chottosid.github.io",
  image: "https://chottosid.github.io/portrait.jpg",
  jobTitle: "Software Engineer & Researcher",
  worksFor: {
    "@type": "EducationalOrganization",
    name: "Bangladesh University of Engineering and Technology (BUET)",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Bangladesh University of Engineering and Technology (BUET)",
  },
  knowsAbout: [
    "Full-Stack Development",
    "Blockchain",
    "Machine Learning",
    "Web3",
    "Computer Vision",
  ],
  sameAs: [
    "https://github.com/chottosid",
    "https://www.linkedin.com/in/swarup-sidhartho-mondol-032b90257/",
    "https://www.facebook.com/fatmathman",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
