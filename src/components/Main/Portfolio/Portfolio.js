import React from "react";
// import student from "../../../images/student.jpeg";

function Portfolio() {
    return(
        <div className="sectionMain">
            <h2 className="sectionMain__title">Студент</h2>
            <div className="portfolio">
                <div className="portfolio__resume">
                    <div className="portfolio__img"></div>
                    <div className="portfolio__info">
                        <h3 className="portfolio__title">Диана</h3>
                        <h4 className="portfolio__subtitle">Фронтенд-разработчик</h4>
                        <p className="portfolio__text">Я родился и живу в Саратове, закончил факультет 
                            экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
                            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как
                            прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    </div>
                     <ul className="portfolio__links">
                        <li className="portfolio__item"><a className='portfolio__link link' href="https://ru-ru.facebook.com/">Facebook</a></li>
                        <li className="portfolio__item"><a className='portfolio__link link' href="https://github.com/NurgaleevaDi">Github</a></li>
                    </ul>
                </div>
                <h5 className="portfolio__menu-title">Портфолио</h5>
                <ul className="portfolio__menu-projects">
                    <li className="portfolio__link-container">
                        <a 
                            className="portfolio__project-link link" 
                            href="https://github.com/NurgaleevaDi/how-to-learn.git">
                            Статичный сайт
                            <p className="portfolio__arrow">&#8599;</p>
                        </a>
                    </li>
                    <li className="portfolio__link-container">
                        <a 
                            className="portfolio__project-link link" 
                            href="https://github.com/NurgaleevaDi/russian-travel.git">
                            Адаптивный сайт
                            <p className="portfolio__arrow">&#8599;</p>
                        </a>
                    </li>
                    <li className="portfolio__link-container">
                        <a 
                            className="portfolio__project-link link" 
                            href="https://github.com/NurgaleevaDi/react-mesto-api-full.git">
                            Одностраничное приложение
                            <p className="portfolio__arrow">&#8599;</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Portfolio;