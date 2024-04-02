import { Link, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../api/posts";
import "./style.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useAppSelector } from "../../store/hooks";
import { getPostReactions } from "../../store/reactionsAmountSlice";
import { getCurrPostReaction } from "../../store/reactionsSlice";
import ReactionsBlock from "../../components/ReactionsBlock";
import Loading from "../../components/Loading";

const Post = () => {
  const { id } = useParams();
  const validId = id ? +id : 0;
  const reactionsAmount = useAppSelector((state) =>
    getPostReactions(state.reactionsAmount, +validId)
  );

  const currPostReaction = useAppSelector((state) =>
    getCurrPostReaction(state.reactions, validId)
  );

  const { data: blog, isLoading } = useGetPostByIdQuery(id);

  return (
    <div>
      <div className="post-header">
        <Link to={"/"} className="post-back-link">
          <IoIosArrowRoundBack /> Вернуться к статьям
        </Link>
        <ReactionsBlock
          id={validId}
          reactionsAmount={reactionsAmount}
          currPostReaction={currPostReaction}
        />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2 style={{ marginBottom: "48px", textAlign: "center" }}>
            {blog?.title}
          </h2>
          <div className="post-body">
            <img
              className="post-img"
              src="https://placehold.co/300x100?text=300x100&font=source-code-pro"
              alt="post"
            />
            <p>{blog?.body}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
