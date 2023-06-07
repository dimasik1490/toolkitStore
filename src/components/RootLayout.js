import { Outlet } from "react-router-dom";
import NavBarPenal from "./NavBarPenal";
import { Provider } from "react-redux";
import store from "../store/store";


const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
      <NavBarPenal/>
      <main>
          <Outlet/>
      </main>
    </Provider>    
    </>
  )
}

export default RootLayout