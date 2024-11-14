import { HashRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage";
import RitualsPage from "./components/pages/rpg/dnd4/rituals/RitualsPage";
import RitualDescriptionPage from "./components/pages/rpg/dnd4/rituals/RitualDescriptionPage";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<RitualsPage />}/>
        <Route path="/ritual/:ritualId" element={<RitualDescriptionPage />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
