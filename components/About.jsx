import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import Abba1 from '../assets/images/abba1.jpg';
import Abba2 from '../assets/images/abba2.jpg';
import Abba3 from '../assets/images/abba3.jpg';
import Person from '../assets/images/person1.png';

function About() {

    const dataImages = [
        { id: 1, image: Abba1 },
        { id: 2, image: Abba2 },
        { id: 3, image: Abba3 },
        { id: 4, image: Abba1 },
        { id: 5, image: Abba2 },
        { id: 6, image: Abba3 }
    ];

    // slider tools

    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
        speed: 2500,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        cssEase: "linear",
        autoplaySpeed: 5000,
        className: "center",
        pauseOnHover: false,
        centerPadding: "25%",
        beforeChange: (current, next) => setSlideIndex(next),
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    centerPadding: "21%",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerPadding: "17%",
                }
            },
            {
                breakpoint: 400,
                settings: {
                    centerPadding: "10%",
                }
            }
        ]
    };

    return (
        <div className="About parent" id="about">
            <div className="wrapper">
                <Image src={Person} priority alt="person" className="person" width={1000} height={500} />
                <p className="text">I am a front-end web and mobile developer, as well as a
                    UX/UI designer. I have done successful projects in the field
                    of programming. I am currently working as a front-end
                    developer at Abba Marketing Company. I work as a front-end developer at Abba Marketing.
                    So far I have participated in many projects. At Abba
                    Marketing, we have created websites for famous
                    companies.</p>
            </div>
            <Slider {...settings} className="carousel">
                {dataImages.map((data) => (
                    <div key={data.id} className={`gallery ${dataImages.indexOf(data) == slideIndex && "active-gallery"}`}>
                        <div className="body">
                            <Image src={data.image} priority alt="abba" className="abba" width={1000} height={500} />
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="wrapper">
                <p className="text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda error, reiciendis nobis inventore similique obcaecati vitae cum saepe officia optio molestias alias repudiandae quas! Quidem delectus corrupti reprehenderit quo molestias ipsa voluptatem error minus sequi a necessitatibus consequatur quia fugit sapiente voluptates.</p>
            </div>
        </div>
    )
};

export default About;