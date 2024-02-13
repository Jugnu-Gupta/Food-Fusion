import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Restaurant from "./pages/Restaurant";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import { store } from './redux/store';
import { Toaster } from "react-hot-toast";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col justify-between min-h-[100vh]">
        <div>
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </div>
    ),
    errorElement: (<Error />),
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
      <Toaster />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;