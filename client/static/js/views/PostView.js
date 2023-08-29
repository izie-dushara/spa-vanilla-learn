import AbstractView from "./AbstractView.js";

const postsData = {
  1: {
    title: "Post 1",
    content: "This is content of post 1",
  },
  2: {
    title: "Post 2",
    content: "This is content of post 2",
  },
  3: {
    title: "Post 3",
    content: "This is content of post 3",
  },
};
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle("Viewing Post");
  }

  async getHtml() {
    const post = postsData[this.postId];
    if (post) {
    return `
    <h1>${post.title}</h1>
    <p>You are viewing the post #${this.postId}</p>
    <p>${post.content}</p>
    
    `;
    }else{
      return `<p> Post Not</p>`
    }
  }
}
