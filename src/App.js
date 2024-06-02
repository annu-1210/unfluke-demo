import Header from "./components/Header/Header";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import SideNavbar from "./components/SideNavbar/SideNavbar";

function App() {
  return (
    <div className="App">
      <div>
        <SideNavbar />
      </div>

      <div className="l-component">
        <Header />
        <LeaderBoard />
      </div>
    </div>
  );
}

export default App;
