// eslint-disable-next-line no-unused-vars
import React from "react";

function ProfilePage() {
  return (
    <section className="section">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              Saya mahasiswa S1 Sistem Informasi dengan fokus pada pengembangan web front end. Saya
              aktif dalam pelatihan dan berkomitmen meningkatkan keterampilan menciptakan antarmuka
              pengguna responsif. Saya tertarik berkolaborasi dalam proyek web menarik, terbuka
              untuk peluang belajar dan pertukaran ide.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>Tailwind</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              <span>Node JS</span>
              <span>JAVA</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MySQL</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
