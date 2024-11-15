import { Gap, Link } from "../../components"
import { useNavigate } from "react-router-dom"
import './postDetail.css'

function PostDetail() {
    const navigate = useNavigate()
    return (
        <div className="detail-blog-wrapper">
            <Gap height={20} />
            <img className="img-cover" src="https://picsum.photos/800" alt="Thumb" />
            <p className="blog-title">Lorem Ipsum 1</p>
            <p className="blog-author">John Doe - 10 Jul 2024</p>
            <p className="blog-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla metus sapien, ac lacinia ante maximus id. Aenean id lorem elit. Duis finibus a mauris ac fringilla.</p>
            <Gap height={20}/>
            <Link title="Back to Home" onClick={() => navigate('/')} />
        </div>
    )
}
export default PostDetail