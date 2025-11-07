import "./MainPage.css";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="header">
        <div className="container">
          <img src="/polylogo.svg" alt="PolyLogo" className="logo" />
        </div>
      </header>
      <main className="main">
        <div className="container">
          <div className="card">
            <h1 className="card-title">Информация об обучающемся</h1>
            <div className="card-student-info">
              <div className="student-top">
                <img src="/studphoto.png" alt="Student" className="studImg" />
                <div className="student-name">
                  <h2>Аверич Владимир Евгеньевич</h2>
                </div>
              </div>
              <div className="student-main-info">
                <p>Институт компьютерных наук и технологий</p>
                <p>Группа: 5132701/20101</p>
                <p>Общежитие: №1</p>
                <p>Номер телефона: +7XXXXXXXXX</p>
                <p>Email: jopa@edu.spbstu.ru</p>
                <p>Выговоры: 0</p>
                <p>LeaderID: 0</p>
              </div>
            </div>
            <nav className="nav">
              <button className="btn" onClick={() => navigate("/laundry")}>
                Стирка
              </button>
              <button className="btn" onClick={() => navigate("/dry")}>
                Сушка
              </button>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
