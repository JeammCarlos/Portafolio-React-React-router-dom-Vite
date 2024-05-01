import React from "react";
import "../stylesheets/aboutMe.css"


function InfoPersonal() {
    return (

        <div className="container">
            <img src="../src/images/foto_cv_lc_es_4.jpg" className="photo-personal" />

            <section className="personal-info">
                <h1>Samuel Vidal Muñoz</h1>
                <h2>Front-End Developer</h2>
                <p>CDMX</p>
                <p>(+52) 782-232-55-05</p>
                <p>samuel.vidal.m@gmail.com</p>
            </section>

            <div className="second-container">

                <section className="profile-description">
                    <h2>Sobre mí</h2>
                    <p>Desarrollador front end con 12 años de experiencia dirigiendo proyectos de diseño de páginas web.
                        Centrado en la creación de códigos claros y con capacidad para cumplir los objetivos y las necesidades del cliente.</p>
                </section>

                <section className="education">
                    <h2>Educación</h2>
                    <ul>
                        <li>
                            <strong>Campus MVP Online</strong>
                            <p>Máster en Desarrollo de Apps Web Front-End</p>
                            <p>Junio 2020</p>
                        </li>
                        <li>
                            <strong>UDIT Universidad</strong>
                            <p>Grado en Ingeniería de Telecomunicaciones</p>
                            <p>Junio 2018</p>
                        </li>
                    </ul>
                </section>

                <section className="Courses">
                    <h2>Cursos</h2>
                    <ul>
                        <li>Azure Fundamentals AZ-900 by Microsoft Azure.</li>
                        <li>Front-End Web Developer. The World Wide Web Consortium (W3C).</li>
                        <li>Full Stack Cloud Developer. IBM.</li>
                        <li>Cloud Application Development. Foundations.</li>
                    </ul>
                </section>


            </div>

        </div>
    )
}

export default InfoPersonal;

