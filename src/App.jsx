import "./App.css";
import Greeting from "./components/Greeting";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Greeting name="Nimo"  surname="Mohamed"  />
      <Header />
      
    </div>
  );
}

export default App;

// The browser will see what is in the App.jsx
// In react you can make your own custom components unlike html in it everything come with it.eg div,h1
// JSX means JavaScript XML.
// It lets you write HTML-like code inside JavaScript.
// React applications are single page applications meaning there's onlye single html
// Everytime you work on a project you have to back up your project on the cloud,you have to put it on github or bitbucket or gitlab websites