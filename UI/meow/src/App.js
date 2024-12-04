import logo from './logo.svg';
import './App.css'
import Header from './components/header.js'
import Footer from './components/footer.js'
import Food from './components/food.js'
import Card from './components/card.js'
import Buttonshot from './components/buttenshot.js';
function App() {

    return(
        <>
        <Header/>
        <Food/>
        <Card/>
        <Card/>
        <Footer/> 
        <Buttonshot/>  
        </>
    );
}
export default App;
