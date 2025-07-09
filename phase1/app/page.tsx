import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export const generateMetadata = () => ({
  title: "Yuta Nishizaki Portfolio | Home",
  description:
    "Welcome to the portfolio of Yuta Nishizaki, a professional Frontend & WordPress Developer based in The Hague, Netherlands.",
  openGraph: {
    title: "Yuta Nishizaki Portfolio | Home",
    description:
      "Welcome to the portfolio of Yuta Nishizaki, a professional Frontend & WordPress Developer based in The Hague, Netherlands.",
    url: "https://portfolio-blush-theta-48.vercel.app/en",
    siteName: "Yuta Nishizaki Portfolio",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "Yuta Nishizaki Portfolio OGP",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuta Nishizaki Portfolio | Home",
    description:
      "Welcome to the portfolio of Yuta Nishizaki, a professional Frontend & WordPress Developer based in The Hague, Netherlands.",
    creator: "@nszk4922",
    images: ["/ogp.jpg"],
  },
});

export default function Home({ params }: { params: { locale: string } }) {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
