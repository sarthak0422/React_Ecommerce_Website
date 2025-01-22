import Category from "../../coponents/category/Category";
import HeroSection from "../../coponents/heroSection/HeroSection";
import HomePageProductCard from "../../coponents/homePageProductCard/HomePageProductCard";
import Track from "../../coponents/track/Track";
import Layout from "../../coponents/layout/Layout";
import Loader from "../../coponents/loader/Loader";
import Testimonial from "../../coponents/testimonial/Testimonial";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <Track/>
      {/* <Testimonial/> */}
      {/* <Loader/> */}
    </Layout>
  )
}
