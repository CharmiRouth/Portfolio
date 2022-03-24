import './style.css'
//import image from '../Images/maggie.jpg'

import { useState } from 'react'

import Navbar from './Navbar'
import PortfolioApi from './portfolioApi'
import PortfolioCard from './portfolioCard'

//Here we want unique categoryname for all categories

const uniqueList=[...new Set(PortfolioApi.map((curElem)=>{
    return curElem.category;// by adding new we will not get repeating categories
    //we have used spread operator as we only want array not any object value pairs
})),"All",
];

const Resturant=(props)=>{
    const [portfolioData, setPortfolioData]=useState(PortfolioApi);
    const [portfolioList, setPortfolioList]=useState(uniqueList);

    const filterItem=(event)=>{
        //For ALL working
        if(event==='All'){
            setPortfolioData(PortfolioApi);
            return;
        }

      //  event.preventDefault();
        const updatedList=PortfolioApi.filter((curElem)=>{
            return curElem.category===event;
             
        });

        setPortfolioData(updatedList);
        
    }

    return(
        <>
            <Navbar filterItem={filterItem} portfolioList={portfolioList}/>
            <PortfolioCard anyname_portfolioData={portfolioData}/>
        </>
    )
}

export default Resturant;