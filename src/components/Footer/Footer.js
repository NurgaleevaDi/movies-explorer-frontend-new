import React from "react";

function Footer() {
    return(
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__container">
                <ul className="footer__list">
                    <li className="footer__item"><a className="footer__link" href="https://practicum.yandex.ru">Яндекс.Практикум</a></li>
                    <li className="footer__item"><a className="footer__link" href="hhttps://github.com/">Github</a></li>
                    <li className="footer__item"><a className="footer__link" href="https://ru-ru.facebook.com/">Facebook</a></li>
                </ul>
                <div className="footer__copyrigth"><p>&#169; 2022</p></div>
            </div>
        </footer>
    )
}
export default Footer;