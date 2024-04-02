import { FC } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { getPostReactions } from "../../../store/reactionsAmountSlice";
import { getCurrPostReaction } from "../../../store/reactionsSlice";
import ReactionsBlock from "../../../components/ReactionsBlock";

interface PostCardProps {
  userId?: number;
  id: number;
  title?: string;
  body?: string;
  main?: boolean;
  width?: string;
}

const PostCard: FC<PostCardProps> = ({
  // userId,
  id,
  title,
  body,
  main,
  width,
}) => {
  const reactionsAmount = useAppSelector((state) =>
    getPostReactions(state.reactionsAmount, id)
  );

  const currPostReaction = useAppSelector((state) =>
    getCurrPostReaction(state.reactions, id)
  );

  return (
    <div className="post-card" style={{ width: width || "100%" }}>
      <img
        className="post-img"
        src="https://placehold.co/300x100?text=image&font=source-code-pro"
        alt="post"
      />
      <div className="post-desc">
        <div className="desc-header">
          <h3>{title}</h3>
          {main && (
            <ReactionsBlock
              id={id}
              reactionsAmount={reactionsAmount}
              currPostReaction={currPostReaction}
            />
          )}
        </div>
        {main && <p>{body}</p>}
        <div
          className="desc-footer"
          style={{ justifyContent: main ? "flex-end" : "space-between" }}
        >
          {!main && (
            <ReactionsBlock
              id={id}
              reactionsAmount={reactionsAmount}
              currPostReaction={currPostReaction}
            />
          )}
          <Link to={`/${id}`} className="desc-more-btn">
            Читать далее
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
