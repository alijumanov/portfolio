import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from '../assets/images/logo.png';
import { CloseRounded, MenuRounded } from "@mui/icons-material";

function Navbar() {

    // scroll animation

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10 ? true : false)
        })
    }, [])

    // navbar menu or navbar-nav

    const [showMenu, setShowMenu] = useState(false)

    // language

    const [language, setLanguage] = useState(false);

    // showMenu and language function

    function getLng() {
        setShowMenu(false)
        setLanguage(!language)
    }

    return (
        <div className={`Navbar ${scroll && "scroll-navbar"}`}>
            <nav className="navbar navbar-expand">
                <Link href="/" onClick={() => window.scrollTo(0, 0)}>
                    <Image src={Logo} priority alt="logo" className="logo" width={300} height={300} />
                </Link>
                <ul className={`navbar-nav ${showMenu && "show-menu"}`}>
                    <li className="nav-item" onClick={() => setShowMenu(false)}>
                        <Link href="/#about" className="link" scroll={false}>About me</Link>
                    </li>
                    <li className="nav-item" onClick={() => setShowMenu(false)}>
                        <Link href="/#tech" className="link" scroll={false}>Skills/Technologies</Link>
                    </li>
                    <li className="nav-item" onClick={() => setShowMenu(false)}>
                        <Link href="/#projects" className="link" scroll={false}>Projects</Link>
                    </li>
                    <li className="nav-item" onClick={() => setShowMenu(false)}>
                        <Link href="/#team" className="link" scroll={false}>My team</Link>
                    </li>
                    <li className="nav-item" onClick={() => setShowMenu(false)}>
                        <Link href="/#contacts" className="link" scroll={false}>Communication</Link>
                    </li>
                    <CloseRounded className="close-icon" onClick={() => setShowMenu(!showMenu)} />
                    <div className="language c1">
                        <div className="lang-title" onClick={() => setLanguage(!language)}>EN <i className="fa fa-caret-down"></i></div>
                        {language &&
                            <div className="lang-menu" onClick={() => getLng()}>
                                <div className="lang">UZ</div>
                                <div className="lang">RU</div>
                                <div className="lang">EN</div>
                            </div>
                        }
                    </div>
                </ul>
                <div className="tool">
                    <div className="language c2">
                        <div className="lang-title" onClick={() => setLanguage(!language)}>RU <i className="fa fa-caret-down"></i></div>
                        {language &&
                            <div className="lang-menu" onClick={() => setLanguage(!language)}>
                                <div className="lang">UZ</div>
                                <div className="lang">RU</div>
                                <div className="lang">EN</div>
                            </div>
                        }
                        {language &&
                            <div className="contrast-0" onClick={() => setLanguage(!language)}></div>
                        }
                    </div>
                    <a href="tel:+99894-913-15-01" className="tel-btn">
                        <i className="fa fa-phone"></i>
                        +99894 913 15 01
                    </a>
                </div>
                <MenuRounded className="menu-icon" onClick={() => setShowMenu(!showMenu)} />
            </nav>
        </div>
    )
};

export default Navbar;