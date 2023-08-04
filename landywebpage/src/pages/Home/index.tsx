import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="product-launch.svg"
        id="intro"
      />
      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="planet.png"
        id="about"
        tooltip="Icon from Freepik at www.flaticon.com"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="worldwide.png"
        id="mission"
        tooltip="Icon from turkkub at www.flaticon.com"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="terraforming1.png"
        id="product"
        tooltip="Icon from smashingstocks at www.flaticon.com"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

{/* <a href="https://www.flaticon.com/free-icons/terraforming" title="terraforming icons">Terraforming icons created by Flat-icons-com - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/terraforming" title="terraforming icons">Terraforming icons created by smashingstocks - Flaticon</a> */}

export default Home;
