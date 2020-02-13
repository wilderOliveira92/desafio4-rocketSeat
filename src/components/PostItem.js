import React from "react";

function PostHeader({ author, date }) {
  return (
    <div className="postheader">
      <img src={author.avatar} className="avatar" />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="postcomment">
      <div className="divider" />
      {comments.map(coment => (
        <div key={coment.id} className="comemnt">
          <img src={coment.author.avatar} className="avatar" />
          <p>
            <span>{coment.author.name}</span>
            {coment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function PostItem({ post }) {
  return (
    <div className="postitem">
      <PostHeader author={post.author} date={post.date} />
      <a className="postcontent">{post.content}</a>
      <PostComments comments={post.comments} />
    </div>
  );
}

export default PostItem;
