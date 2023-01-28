import Image from "next/image";
import Figma from '../assets/images/figma.png';
import NextImg from '../assets/images/next.png';
import Github from '../assets/images/github.png';
import Person from '../assets/images/person2.png';
import ReactImg from '../assets/images/react.png';
import Javascript from '../assets/images/javascript.png';
import Typescript from '../assets/images/typescript.png';
import { FacebookOutlined, GitHub, Instagram, Telegram } from "@mui/icons-material";

function Header() {
    return (
        <div className="Header parent">
            <div className="wrapper">
                <div className="texts">
                    <h1 className="title">Welcome my personal web site</h1>
                    <div className="res">
                        <h3 className="sub-title">Web designer,</h3>
                        <h3 className="sub-title">Mobile developer,</h3>
                        <h3 className="sub-title">Front-end developer,</h3>
                        <button className="explore">Hamkorlik qilish</button>
                        <div className="icons">
                            <a href="https://t.me/ali_web_dev" className="icon" target="blank">
                                <Telegram className="tool" />
                            </a>
                            <a href="https://www.instagram.com/jumanov.safarali/" className="icon" target="blank">
                                <Instagram className="tool" />
                            </a>
                            <a href="https://www.facebook.com/safarali.jumanov.14" className="icon" target="blank">
                                <FacebookOutlined className="tool" />
                            </a>
                            <a href="https://github.com/alijumanov" className="icon" target="blank">
                                <GitHub className="tool" />
                            </a>
                        </div>
                    </div>
                    <div className="imgs res1">
                        <Image src={Person} priority alt="person" className="person" width={1000} height={500} />
                    </div>
                </div>
                <div className="imgs res2">
                    <Image src={Person} priority alt="person" className="person" width={1000} height={500} />
                </div>
            </div>
            <div className="texture1"></div>
            <div className="texture2"></div>
            <div className="texture3"></div>
            <Image src={Figma} priority alt="figma" className="figma decorate" width={500} height={500} />
            <Image src={NextImg} priority alt="next" className="next decorate" width={500} height={500} />
            <Image src={Github} priority alt="github" className="github decorate" width={500} height={500} />
            <Image src={ReactImg} priority alt="react" className="react decorate" width={500} height={500} />
            <Image src={Javascript} priority alt="javascript" className="javascript decorate" width={500} height={500} />
            <Image src={Typescript} priority alt="typescript" className="typescript decorate" width={500} height={500} />
        </div>
    )
};

export default Header;