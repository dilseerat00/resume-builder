import React,{useContext, useState} from 'react';
import {LayoutTemplate, Menu, X} from 'lucide-react';
import {landingPageStyles} from '../assets/dummystyle';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const landingPage = () => {
  const {user}= useContext(UserContext)
  const navigate = useNavigate();

  const {mobileMenuOpen, setMobileMenuOpen} = React.useState(false);
  return (
    <div className= {landingPageStyles.container}>
      {/*Header Section*/}
      <header className={landingPageStyles.header}>
        <div className= {landingPageStyles.headerContainer}>
          <div className={landingPageStyles.logoContainer}>
            <div className={landingPageStyles.logoIcon}>
              <LayoutTemplate className={landingPageStyles.logoIconInner} />  

            </div>
            <span className={landingPageStyles.logoText}>FreshDraft</span>
          </div>
          {/*Mobile button*/ }
          <button className={landingPageStyles.mobileMenuButton}>
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            {mobileMenuOpen ? 
            <X size ={24} className={landingPageStyles.mobileMenuIcon} /> :
            <Menu size={24} className={landingPageStyles.mobileMenuIcon} />}
          </button>

          {/**Navigation */}
          <div className='hidden md:flex md:items-center md:gap-8'>
            {user}

          </div>

        </div>
      </header>
    </div>
  );
};

export default landingPage;
