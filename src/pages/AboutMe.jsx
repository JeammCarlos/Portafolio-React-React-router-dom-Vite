import React from "react";
import "../stylesheets/aboutMe.css"


function InfoPersonal() {
    return (

        <div className="container">
            <img className="photo-personal" alt=""/>

            <section className="personal-info-des">
                <h1>Romina Lizbeth Loyda Arenas</h1>
                <h2>Ingeniera en Biotecnología</h2>
                <p>CDMX</p>
                <p>(+52) 782-232-55-05</p>
                <p>romiloyda@gmail.com</p>
                <a href="https://www.linkedin.com/in/rominaloyda">LinkedIn: Romina Loyda</a>
            </section>

            <div className="second-container">

                <section className="profile-description">
                    <h2>Sobre mí</h2>
                    <p>Ingeniero en biotecnología altamente motivado y competente en busca de oportunidades para aplicar mis
                        habilidades y conocimientos en un entorno profesional desafiante. Comprometido a impulsar la innovación
                        y contribuir a los avances en biotecnología a través de la investigación y el desarrollo.</p>
                </section>                   

                <section className="education">
                    <h2>Educación</h2>
                    <ul>
                        <li>
                            <strong>Universidad Veracruzana</strong>
                            <p>Ingeniería en Biotecnología | Cédula: 13420301</p>
                            <p>2020-2023</p>
                        </li>
                    </ul>
                </section>

                <section className="Courses">
                    <h2>Cursos</h2>
                    <ul>
                        <li>Azure Fundamentals</li>
                        <li>Curso HPLC</li>
                        <li>Curso Python</li>
                    </ul>
                </section>

            </div>

        </div>
    )
}

export default InfoPersonal;

