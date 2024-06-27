import { Link } from 'react-router-dom';

const Links = ({ user_id }) => {

    const items = [
        { name: "Homepage", path: `/` },
        { name: "Portfolio", path: `/portfolio/` },
        { name: "Blog", path: "" },
        { name: "E-commerce", path: "/shop" },
        { name: "AI Generator", path: "/generator" }
    ]

    console.log(user_id);

    return (
        <div className="links">
            {items.map(item => (
                <Link to={item.path} key={item.name}>{item.name}</Link>
            ))}
        </div>
    )
}

export default Links;