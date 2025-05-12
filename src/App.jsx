import './App.css'
import Menu from './components/Menu'
import Bill from './components/Bill'
import OrderTable from './components/OrderTable';
const App = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <Menu />
        <Bill />
      </div>
      <OrderTable/>
    </>
  );
}

export default App