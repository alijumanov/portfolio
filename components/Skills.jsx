import Image from 'next/image';
import Figma from '../assets/images/figma1.png';
import WallImg from '../assets/images/wall.png';
import SassImg from '../assets/images/sass.png';
import NextImg from '../assets/images/next1.png';
import ReduxImg from '../assets/images/redux.png';
import ThreeImg from '../assets/images/three.png';
import ReactImg from '../assets/images/react1.png';
import { useEffect, useRef, useState } from 'react';
import JavaScript from '../assets/images/javascript1.png';
import { FileDownloadOutlined } from '@mui/icons-material';

function Skills() {

    const dataTech = [
        { id: 1, image: JavaScript, name: "JavaScript" },
        { id: 2, image: ReactImg, name: "React js" },
        { id: 3, image: NextImg, name: "Next js" },
        { id: 4, image: ReactImg, name: "React Native" },
        { id: 5, image: ThreeImg, name: "Three js" },
        { id: 6, image: ReduxImg, name: "Redux" },
        { id: 7, image: SassImg, name: "Sass" },
        { id: 8, image: Figma, name: "Figma (UX/UI)" }
    ];

    const dataLenta = ["React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript1", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript1", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma", "JavaScript", "React.js", "Next.js", "Redux", "Sass", "Three.js", "ReactNative", "Github", "ReactQuery", "MUI", "Figma"];

    const skills = useRef(null);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY - skills.current?.offsetTop)
        })
    }, [])

    return (
        <div className="Skills parent" id='tech' ref={skills}>
            <div className="lenta">
                <div className="tool" style={{ marginLeft: `${-scroll}px` }}>JavaScript</div>
                {dataLenta.map((data, index) => (
                    <div key={index} className="tool">{data}</div>
                ))}
            </div>
            <div className="wrapper">
                <div className="title text-center">My Skills</div>
                <div className="technologies">
                    {dataTech.map((data) => (
                        <div key={data.id} className="technology">
                            <div className="imgs">
                                <div className="programm">
                                    <Image src={data.image} priority alt="tech" className="tech-img back" width={1000} height={500} />
                                    <Image src={data.image} priority alt="tech" className="tech-img front" width={1000} height={500} />
                                </div>
                                <Image src={WallImg} priority alt="wall" className="wall" width={1000} height={500} />
                                <h3 className="sub-title">{data.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="explore">
                    <a href="resume.pdf" download="resume" className="download">
                        <div className="first sub-title">
                            <FileDownloadOutlined className='icon' /> Download resume
                        </div>
                        <div className="second sub-title">
                            <FileDownloadOutlined className='icon' /> Download resume
                        </div>
                    </a>
                </div>
            </div>
            <div className="lenta">
                <div className="tool" style={{ marginLeft: `${scroll}px` }}>JavaScript</div>
                {dataLenta.map((data, index) => (
                    <div key={index} className="tool">{data}</div>
                ))}
            </div>
            <div className="texture1"></div>
            <div className="texture2"></div>
            <div className="texture3"></div>
        </div>
    )
};

export default Skills;