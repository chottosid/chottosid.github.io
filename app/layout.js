import "./globals.css";

export const metadata = {
  title: "Swarup Sidhartho Mondol | Software Engineer & Researcher",
  description:
    "Software Engineer and CSE graduate of BUET (2026). I build backend systems, AI-powered applications, and multi-agent pipelines. Silver Medalist at International Blockchain Olympiad 2025. Published research in DNA data storage and medical imaging.",
  keywords:
    "Swarup Sidhartho Mondol, BUET CSE, software engineer, blockchain developer, machine learning, NeurIPS, International Blockchain Olympiad, full-stack developer, Bangladesh, Web3, Solidity, Next.js, Python",
  authors: [{ name: "Swarup Sidhartho Mondol" }],
  creator: "Swarup Sidhartho Mondol",
  metadataBase: new URL("https://swarupsidhartho.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Swarup Sidhartho Mondol | Software Engineer & Researcher",
    description:
      "Software Engineer and CSE graduate of BUET building backend systems, AI-powered applications, and multi-agent pipelines. Silver Medalist at International Blockchain Olympiad 2025.",
    url: "https://swarupsidhartho.xyz",
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
      "Software Engineer & CSE graduate of BUET. Backend, AI/ML, multi-agent systems. IBO 2025 Silver Medalist.",
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
  url: "https://swarupsidhartho.xyz",
  image: "https://swarupsidhartho.xyz/portrait.jpg",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var d=document.documentElement;var t=localStorage.getItem('darkMode');if(t!==null?JSON.parse(t):window.matchMedia('(prefers-color-scheme:dark)').matches){d.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
