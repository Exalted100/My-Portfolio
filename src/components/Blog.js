import React, { useEffect, useState } from "react";
import "./Blog.css";
import axios from "axios";

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([])

    useEffect(() => {
        const getBlogPosts = async () => {
            const posts = await axios.get("https://dev.to/api/articles?username=exalted100")
            setBlogPosts(posts)
            console.log(posts)
        }
        getBlogPosts()
      }, []);

    return (
        <div className="blog-container">
            <h2 className="blog-h2">Blog</h2>
            <p className="blog-intro">I write on <a className="blog-links" href="https://exalted100.medium.com/">Medium</a> and <a className="blog-links" href="https://dev.to/exalted100">Dev.to</a> about the things I learn.</p>
            <div>{!blogPosts.data ? "Blog posts are not available at this time." : blogPosts.data.map(post => {
                return (
                    <div key={post.id} className="blogpost-container">
                        <h4 className="post-title">{post.title}</h4>
                        <p className="snippet">{post.description}</p>
                        {post.tag_list.map(tag => <p className="tags" key={tag}>#{tag}</p>)}
                        <div>
                            <p className="post-date">{post.readable_publish_date}</p>
                            <p><a className="blog-links" href={post.url}>Read now</a></p>
                        </div>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default Blog;