import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import CustomCursor from "@/components/motion/CustomCursor";
import SmoothScroll from "@/components/motion/SmoothScroll";
import ScrollProgressBar from "@/components/motion/ScrollProgressBar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SmoothScroll />
      <ScrollProgressBar />
      <CustomCursor />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
