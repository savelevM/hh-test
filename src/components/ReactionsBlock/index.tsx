import { FC } from "react";
import { Reaction, ReactionsAmount } from "../../types/reaction";
import { useReaction } from "../../functions/handleReaction";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import "./style.css";

interface ReactionsBlockProps {
  id: number;
  reactionsAmount?: ReactionsAmount;
  currPostReaction?: Reaction;
}

const ReactionsBlock: FC<ReactionsBlockProps> = ({
  id,
  reactionsAmount,
  currPostReaction,
}) => {
  const handleReaction = useReaction();

  return (
    <div className="controllers-container">
      <div className="controllers-button like">
        <button
          onClick={() => handleReaction(0, id, currPostReaction)}
          style={{
            color:
              currPostReaction?.reaction === 0
                ? "#219653"
                : "rgba(58, 53, 65, 0.5)",
          }}
        >
          <AiFillLike />
        </button>
        <p>{reactionsAmount?.likes}</p>
      </div>
      <div className="controllers-button dislike">
        <button
          onClick={() => handleReaction(1, id, currPostReaction)}
          style={{
            color:
              currPostReaction?.reaction === 1
                ? "#eb5757"
                : "rgba(58, 53, 65, 0.5)",
          }}
        >
          <AiFillDislike />
        </button>
        <p>{reactionsAmount?.dislikes}</p>
      </div>
    </div>
  );
};

export default ReactionsBlock;
