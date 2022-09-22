import { useRouter } from "next/router";
import topics from "../api/topics";

const Learn = () => {
  const router = useRouter();
  const { name } = router.query;

  const topic = topics.find((topic) => topic.id === name);

  return (
    <>
      <h1>{`Learn ${topic?.id ? topic.id : ""}`}</h1>
      <a href="#" onClick={() => router.back()}>
        Back
      </a>
    </>
  );
};

export default Learn;
