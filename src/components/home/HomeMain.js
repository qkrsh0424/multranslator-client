import React,{lazy} from 'react';

//Component
import HomeBody from './HomeBody';

//Component lazy
const Nav = lazy(()=>import('../Nav'));

const HomeMain = () =>{
    return(
        <div>
            <Nav/>
            <HomeBody/>
        </div>
    );
}

export default HomeMain;