import "./globals.css";

export const metadata = {
  title: "Swarup Chakraborty - AI/ML Engineer & Researcher",
  description:
    "AI/ML Engineer specializing in Computer Vision, Deep Learning, and Software Development",
  keywords:
    "artificial intelligence, machine learning, computer vision, deep learning, software development, python, tensorflow, pytorch",
  authors: [{ name: "Swarup Chakraborty" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
