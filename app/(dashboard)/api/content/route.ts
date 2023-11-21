import { NextResponse } from "next/server";

export interface Post {
    title: string;
    slug: string;
    content: string;
  }
const posts: Post[] = [
    {
      title: "First Post",
      slug: "first-post",
      content:
        "This is the content of the first post. It could be a long string of text detailing the post's content and any related information.",
    },
    {
      title: "Second Post",
      slug: "second-post",
      content:
        "This is the content of the second post. It could be a long string of text detailing the post's content and any related information.",
    },
    // Add more posts as needed
  ];

  export function GET(){
    return NextResponse.json(posts);
  }