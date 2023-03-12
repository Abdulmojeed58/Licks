import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import classes from './App.module.css';
import ChatBox from './Components/ChatBox/ChatBox';
import Explore from './Components/Explore/Explore';
import FoodItems from './Components/FoodItems/FoodItems';
import Navbar from './Components/Navbar/Navbar';
import { BsFillChatDotsFill } from "react-icons/bs";

function App() {
  const [isShowChat, setIsShowChat] = useState(false)

  const handleIsShowChat = () => {
    setIsShowChat(prevValue=>!prevValue)
  }


  return (
      <div className={classes.App}>
        <Navbar />
        <div className={classes.flex}>
          <div className={classes.left} />
          <Routes>
            <Route path='/' element={<FoodItems />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='*' element={<h1>Page Note Available</h1>} />
          </Routes>
          <div className={classes.right} />
        </div>
        <ChatBox showChat={isShowChat} />
        <BsFillChatDotsFill className={classes.box} onClick={handleIsShowChat} />
      </div>
  );
}

export default App;
