import Image from 'next/image';
import Img1 from '../assets/images/mbm.png';
import Img2 from '../assets/images/dargah.png';
import Img3 from '../assets/images/myportfolio.png';

function Projects() {

    const dataProjects = [
        { id: 1, image: Img1, name: "MBM", link: "https://mbm.uz/" },
        { id: 2, image: Img2, name: "Dargah", link: "https://dargah.uz/" },
        { id: 3, image: Img3, name: "Figma", link: "https://www.figma.com/file/hDwV6VJm0G7D7mZ4JBtk4C/MyPortfolio?node-id=0%3A1&t=A9mpvCuAWGkVz5Hz-0" },
    ]

    return (
        <div className="Projects parent" id="projects">
            <div className="wrapper">
                <h1 className="title text-center">My projects</h1>
                <div className="cards">
                    {dataProjects.map((data) => (
                        <a href={data.link} key={data.id} className="project" target="blank">
                            <div className="img">
                                <Image src={data.image} priority alt="img" className="pro-img" width={1000} height={500} />
                                <div className="contr">
                                    <div className="explore">Explore more</div>
                                </div>
                            </div>
                            <h3 className="sub-title name">{data.name}</h3>
                        </a>
                    ))}
                </div>
                <div className="link">
                    <button className='sub-title'>Explore more</button>
                </div>
            </div>
        </div>
    )
};

export default Projects;