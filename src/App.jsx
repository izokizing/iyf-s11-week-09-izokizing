import Counter from "./components/Counter";
import UserProfile from "./componets/UserProfile";
import WindowSize from "./components/WindowSize";
import ThemeToggle from "./components/ThemeToggle":

function App() {
  return (
    <>
      <Counter />
      <UserProfile userId="1" />
      <WindowSize />
      <ThemeToggle />
    </>
  );
}

export default App;
