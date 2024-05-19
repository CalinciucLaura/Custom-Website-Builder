import { Link } from 'react-router-dom';

const Links = ({ user_id }) => {
    const items = [
        { name: "Homepage", path: `/` },
        { name: "Portfolio", path: `/portfolio/` },
        { name: "Business", path: "/business" },
        { name: "Blog", path: "/blog" },
        { name: "E-commerce", path: "/ecommerce" },
        { name: "About Us", path: "/aboutus" },
        { name: "AI Generator", path: "/generator" }
    ]

    return (
        <div className="links">
            {items.map(item => (
                <Link to={item.path} key={item.name}>{item.name}</Link>
            ))}
        </div>
    )
}

export default Links;