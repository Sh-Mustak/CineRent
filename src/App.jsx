import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MoiveList from "./Components/MovieList/MovieLIst";
import SideBar from "./Components/SideBar/SideBar";
import { MovieContext, ThemeContext } from "./Context";
import { cartReducer, initialState } from "./Reducer/cartReducer";
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
            <Header />
            <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <SideBar />
                <MoiveList />
              </div>
            </main>
            <Footer />
          </div>
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
