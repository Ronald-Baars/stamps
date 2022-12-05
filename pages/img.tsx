import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { text, color, borderRadius } = router.query;

  return (
    <center>
      <p>image text: {text}</p>
      <p>color: {color}</p>
      <p>borderRadius: {borderRadius}</p>
    </center>
  );
};

export default Post;
