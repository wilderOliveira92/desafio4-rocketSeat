import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg"
            },
            content: "Sim, estamos contratando e você é um forte candidato"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg"
            },
            content: "Sim, estamos contratando e você é um forte candidato"
          },
          {
            id: 3,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg"
            },
            content: "Sim, estamos contratando e você é um forte candidato"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg"
        },
        date: "04 Jun 2019",
        content: "Quais as vagas disponíveis?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg"
            },
            content:
              "estamos com diversas vagas para desenvolvedores fullstack."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
