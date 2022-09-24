import { useRouter } from "next/router";
import Layout from "../components/Layout";

const AboutUs = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>About Us</h1>
    </Layout>
  );
};

export default AboutUs;
