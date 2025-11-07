import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import MainPage from "./pages/MainPage/MainPage";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />}/>
        {/* Эти маршруты пока закомментированы, пока нет компонентов */}
        {/* <Route path="/laundry" element={<Laundry />}/> */}
        {/* <Route path="/dry" element={<Dry />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
