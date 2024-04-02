import { useGetPostsQuery } from "../../api/posts";
import { CiSearch } from "react-icons/ci";
import PostCard from "./PostCard";
import "./style.css";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const MainPage = () => {
  const [seacrhText, setSearchText] = useState<string>("");
  const { data: blogs, isLoading, error } = useGetPostsQuery(seacrhText);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const mainPost = blogs && blogs.length > 0 ? blogs[0] : null;
  const otherPosts = blogs && blogs.length > 1 ? blogs.slice(1) : [];

  return (
    <div>
      <h1 className="title" style={{ marginBottom: "24px" }}>
        Блог
      </h1>
      <p style={{ marginBottom: "32px" }}>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </p>
      <div style={{ position: "relative", marginBottom: "32px" }}>
        <input
          className="input"
          type="text"
          placeholder="Поиск по названию статьи"
          value={seacrhText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div style={{ position: "absolute", top: "12px", left: "12px" }}>
          <CiSearch />
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : blogs?.length && blogs?.length > 0 ? (
        <>
          {mainPost && (
            <div className="main-post">
              <PostCard
                key={mainPost.id}
                userId={mainPost.userId}
                id={mainPost.id}
                title={mainPost.title}
                body={mainPost.body}
                main={true}
              />
            </div>
          )}
          <div className="posts-list">
            <div className="posts-column">
              {otherPosts?.map(
                (blog, index) =>
                  index % 2 === 0 && (
                    <PostCard
                      key={index}
                      userId={blog.userId}
                      id={blog.id}
                      title={blog.title}
                      body={blog.body}
                    />
                  )
              )}
            </div>
            <div className="posts-column">
              {otherPosts?.map(
                (blog, index) =>
                  index % 2 === 1 && (
                    <PostCard
                      key={index}
                      userId={blog.userId}
                      id={blog.id}
                      title={blog.title}
                      body={blog.body}
                    />
                  )
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Статей не найдено</p>
      )}
    </div>
  );
};

export default MainPage;
