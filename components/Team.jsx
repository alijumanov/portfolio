import Image from 'next/image';
import Bekzod from '../assets/images/bekzod.png';
import Ravshan from '../assets/images/ravshan.png';
import Jahongir from '../assets/images/jahongir.png';

function Team() {

    const dataPersons = [
        { id: 1, image: Jahongir, proffession: "Backend", name_uz: "Jahongir Normo'minov", name_en: "Jahangir Normominov", name_ru: "Джахангир Нормоминов", description_uz: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda error, reiciendis nobis inventore similique obcaecati vitae cum saepe officia optio molestias alias repudiandae quas obcaecati vitae cum saepe officia optio molestias alias repudiandae quas.", description_ru: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda error, reiciendis nobis inventore similique obcaecati vitae cum saepe officia optio molestias alias repudiandae quas obcaecati vitae cum saepe officia optio molestias alias repudiandae quas.", description_en: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda error, reiciendis nobis inventore similique obcaecati vitae cum saepe officia optio molestias alias repudiandae quas obcaecati vitae cum saepe officia optio molestias alias repudiandae quas." },
        { id: 2, image: Bekzod, proffession: "Frontend", name_uz: "Bekzod Oqilov", name_en: "Bekzod Oqilov", name_ru: "Бекзод Агилов", description_uz: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda error, reiciendis nobis inventore similique obcaecati vitae cum saepe officia optio molestias alias repudiandae quas obcaecati vitae cum saepe officia optio molestias alias repudiandae quas.", description_ru: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda error, reiciendis nobis inventore similique obcaecati vitae cum saepe officia optio molestias alias repudiandae quas obcaecati vitae cum saepe officia optio molestias alias repudiandae quas.", description_en: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda error, reiciendis nobis inventore similique obcaecati vitae cum saepe officia optio molestias alias repudiandae quas obcaecati vitae cum saepe officia optio molestias alias repudiandae quas." },
        { id: 3, image: Ravshan, proffession: "Frontend", name_uz: "Ravshan Karimov", name_en: "Ravshan Karimov", name_ru: "Равшан Каримов", description_uz: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda error, reiciendis nobis inventore similique obcaecati vitae cum saepe officia optio molestias alias repudiandae quas obcaecati vitae cum saepe officia optio molestias alias repudiandae quas.", description_ru: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda error, reiciendis nobis inventore similique obcaecati vitae cum saepe officia optio molestias alias repudiandae quas obcaecati vitae cum saepe officia optio molestias alias repudiandae quas.", description_en: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda error, reiciendis nobis inventore similique obcaecati vitae cum saepe officia optio molestias alias repudiandae quas obcaecati vitae cum saepe officia optio molestias alias repudiandae quas." },
        { id: 4, image: Jahongir, proffession: "Frontend", name_uz: "Safarali Jumanov", name_en: "Safarali Jumanov", name_ru: "Сафарали Джуманов", description_uz: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda error, reiciendis nobis inventore similique obcaecati vitae cum saepe officia optio molestias alias repudiandae quas obcaecati vitae cum saepe officia optio molestias alias repudiandae quas.", description_ru: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda error, reiciendis nobis inventore similique obcaecati vitae cum saepe officia optio molestias alias repudiandae quas obcaecati vitae cum saepe officia optio molestias alias repudiandae quas.", description_en: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda error, reiciendis nobis inventore similique obcaecati vitae cum saepe officia optio molestias alias repudiandae quas obcaecati vitae cum saepe officia optio molestias alias repudiandae quas." }
    ];


    return (
        <div className="Team parent" id='team'>
            <div className="wrapper">
                <h1 className="title text-center">My team</h1>
                <div className="persons">
                    {dataPersons.map((data) => (
                        <div key={data.id} className="person">
                            <Image src={data.image} priority alt="person" className="person-img" width={1000} height={500} />
                            <div className="stamp">{data.proffession}</div>
                            <h3 className="name">{data.name_en}</h3>
                            <p className="desc">{data.description_en}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="texture1"></div>
            <div className="texture2"></div>
            <div className="texture3"></div>
        </div>
    )
};

export default Team;