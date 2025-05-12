import './App.css'
import Menu from './components/Menu'
import Bill from './components/Bill'
const App = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <Menu />
        <Bill />
      </div>
    </>
  );
}

export default App