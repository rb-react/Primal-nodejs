import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./features/users/Create";
import Read from "./features/users/Read";
import Users from "./features/users/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Users />
        {/* <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
