#!/usr/bin/node

// array of blog posts
const blogPosts = [
  {
    title: 'What is JavaScript?',
    author: 'Zack Gollwitzer',
    publishDate: 'Dec 20, 2020',
    content: 'some post content here'
  },
  {
    title: 'How do Arrays work?',
    author: 'Zach Gollwitzer',
    publishDate: 'Jan 1, 2021',
    content: 'some post content here'
  },
  {
    title: 'How long does it take to learn coding?',
    author: 'Zack Gollwitzer',
    publishDate: 'Jan 20, 2021',
    content: 'some post content here'
  }
]

// loop around blogpost
for (let i = 0; i < blogPosts.length; i++) {
  const postTitle = blogPosts[i].title;
  const postAuthor = blogPosts[i].author;
  const postDate = blogPosts[i].publishDate;
  const postContent = blogPosts[i].content;

  /* Here, use these variables to do something with each post
     I'll just print the values
  */
  console.log(postTitle);
  console.log(postAuthor);
  console.log(postDate);
  console.log(postContent);
}
