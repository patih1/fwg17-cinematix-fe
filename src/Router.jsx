import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PrivateRoute, {PrivateRouteOrder} from "./components/PrivateRoute";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import TicketResult from "./pages/TicketResult";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/signUp",
    element: <SignUp />,
  },{
    path: "/signIn",
    element: <SignIn />,
  },{
    path: "/",
    element: <Home />,
  },{
    path: "/movie",
    element: <Movie />,
  },{
    path: "/movie/:id",
    element: <MovieDetail />,
  },{
    path: "/profile",
    element: (<PrivateRoute> <Profile/> </PrivateRoute>)
  },{
    path: "/order",
    element: (<PrivateRoute> (<PrivateRouteOrder><Order /></PrivateRouteOrder>)  </PrivateRoute>) 
  },
  {
    path: "/payment",
    element: (<PrivateRoute> (<PrivateRouteOrder><Payment /></PrivateRouteOrder>)  </PrivateRoute>) 
  },
  {
    path: "/ticketresult",
    element: (<PrivateRoute> <TicketResult /> </PrivateRoute>) 
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  )
}

export default App;
