import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import React, { useState, useMemo } from 'react';
import styled from "styled-components";
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import Transaction from './Components/Transactions/Transaction';
import Signup from './Components/signup/signup';
import Login from './Components/Login/Login';
import { useGlobalContext } from './context/globalContext';
import PaymentGateway from "./Components/Payment/Payment";
import AfterPay from "./Components/Payment/AfterPay";

function App() {
  const { isLoggedIn } = useGlobalContext();
  const [active, setActive] = React.useState(1);
  const [showLogin,setShowLogin] = useState(true); // Track login state
  // const toggleLogin = () => {
  //   setShowLogin(!showLogin);
  // };
  const global = useGlobalContext();
  console.log(global);



  // const displayData = () => {
  //   if (showLogin) {
  //     return <Login toggleLogin={toggleLogin}/>;
  //   }else{
  //     // If the user is logged in, display the main content
  //     switch (active) {
  //       case 1:
  //         return<Signup />;
  //       case 2:
  //         return <Transaction />;
  //       case 3:
  //         return <Dashboard />;
  //       case 4:
  //         return <Income />;
  //       case 5:
  //         return <Expenses />;
  //       default:
  //         return <Dashboard />;
  //     }
  //   } 
  //   }
  

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
  
    <BrowserRouter>
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <MainLayout>
          { isLoggedIn && <Navigation active={active} setActive={setActive} />}
          
          <main>
            
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element ={<Dashboard />} />
            <Route path="/Transaction" element={<Transaction />} />
            <Route path="/incomes" element={<Income />} />
            <Route path="/expense" element={<Expenses />} />
            <Route path="/payment" element={<PaymentGateway />} />
            <Route path="/afterpay" element={<AfterPay />} />
          </Routes>
          
          </main>
          
        </MainLayout>
      </AppStyled>
    </BrowserRouter>

  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
    
  }
`;

export default App;
