import React from "react";
import "../stylesheets/aboutMe.css"


function InfoPersonal() {
    return (

        <div className="container">
            <img className="photo-personal" alt="" />

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

                <section className="experience">
                    <h2>Experiencia</h2>
                    <ul>
                        <li>
                            <h3><strong>GRUPO CEGVI S.A. DE C.V.</strong></h3>
                            <p>Mayo 2023 - Octubre 2023 | Atención al cliente</p>
                            <p>Revisión detallada de la farmacopea mexicana (FEUM) para garantizar la calidad y validez de los medicamentos.</p>
                            <p>Control de Procedimientos Normalizados de Operación (PNO's).</p>
                        </li>
                        <li>
                            <h3><strong>Universidad Veracruzana, Orizaba</strong></h3>
                            <p>Febrero 2022 - Marzo 2023 | Auxiliar laboratorista</p>
                            <p>Administrar el sistema de gestión de calidad dentro del laboratorio para tener una organización óptima, siguiendo las normas ISO.</p>
                            <p>Aplicar e integrar los requisitos de las BPL y el SGC dentro del laboratorio, optimizando así el uso de recursos, la eficiencia y reproducibilidad de las técnicas biotecnológicas empleadas, obteniendo un nivel de organización superior.</p>
                            <p>Realizar pruebas de identificación bacteriana, pruebas de cultivo y pruebas de sensibilidad a antibióticos y antifúngicos.</p>
                        </li>
                    </ul>
                </section>

                <section className="skills">
                    <h2>Habilidades</h2>
                    <ul>
                        <li>Dominio del paquete Microsoft Office 365</li>
                        <li>Dominio de HTML5 y CSS</li>
                        <li>Dominio básico de JavaScript</li>
                        <li>Excelentes habilidades de comunicación y colaboración</li>
                        <li>Excelente conocimiento de los SGC bajo la norma ISO 9001:2015</li>
                        <li>Excelente conocimiento de la NOM-059-SSA1-2015</li>
                        <li>Excelentes habilidades para el uso de instrumentación dentro del laboratorio</li>
                        <li>Excelentes habilidades para métodos analíticos: Cromatografía (HPLC; CG), espectrometría (EOS), espectroscopía UV-Vis, etc.</li>
                    </ul>
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

