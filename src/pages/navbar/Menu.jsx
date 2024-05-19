import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./navbar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../user_session_state";

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};
const Menu = () => {
    const [open, setOpen] = useState(false);
    const [user_id] = useRecoilValue(userState);

    return (
        <motion.div className="navbar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links user_id={user_id} />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    );
};

export default Menu;