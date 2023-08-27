import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Posts } from "../models/posts.interface";
import Slider from "../components/Slider";

 const Home = () =>  {

    const getText = (html:any) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }


    const [posts, setPosts] = useState<Posts[]>([]);

    const cat = useLocation().search

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/posts${cat}`)
                setPosts(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [cat]);

return (
    
    <div className="container">

    <div className="home">
        <div className="posts">
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <div className="img">
                        <img src={`../uploads/${post.img}`} alt={post.title} />
                    </div>
                    <div className="content">
                        <Link className="link" to={`/post/${post.id}`}>
                            <h1>{post.title}</h1>
                        </Link>
                        <p>{getText(post.desc)}</p>
                        <button>Read More</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>
    )
}

export default Home