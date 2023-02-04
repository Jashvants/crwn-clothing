// import Directory from './Component/Menu/directory.component';
import Home from './routes/home/home.component';
import { Routes,Route,Outlet } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authenctiaction from './routes/authentication/auth.component'






const Shop = ()=>{
  return(
    <h1>I am shop</h1>
  );
}




const  App = () => {


  return ( 
    <Routes>
      <Route path='/' element={<Navigation/>}>

       <Route index element={<Home/>}/>
       <Route path='shop' element= {<Shop/>}/>
       <Route path='auth' element= {<Authenctiaction/>}/>

      </Route>
   

     

    </Routes>

  );
  
}

export default App;
