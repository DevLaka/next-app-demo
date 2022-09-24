import { useRouter } from "next/router";
import Layout from "../components/Layout";

const AboutUs = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>About Us</h1>
      <a href="#" onClick={() => router.back()}>
        Back
      </a>
    </Layout>
  );
};

export default AboutUs;
