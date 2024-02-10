import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Restaurant from "./pages/Restaurant";
import { Outlet } from "react-router-dom";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import { store } from './redux/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: (<Home />),
      },
      {
        path: "Restaurants/:restId",
        element: (<Restaurant />),
      },
      {
        path: "about",
        element: (<About />),
      },
      {
        path: "contact",
        element: (<Contact />),
      },
      {
        path: "cart",
        element: (<Cart />),
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;