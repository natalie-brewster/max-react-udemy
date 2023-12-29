import { useState } from "react";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
function App() {
  const [showForm, setShowForm] = useState(true);

  const handleToggleForm = () => {
    setShowForm((prevFormStatus) => !prevFormStatus);
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <main className="h-screen my-8 flex gap-8">
        <SideBar></SideBar>
        { showForm && <NewProject handleForm={handleToggleForm}></NewProject>}
        { !showForm && <div> new proj submitted</div>}
      </main>
    </>
  );
}

export default App;
