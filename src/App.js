import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetups />}>
        </Route>
        <Route path="/new-meetup" element={<NewMeetups />}>
        </Route>
        <Route path="/favorites" element={<Favorites />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
