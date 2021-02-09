import React from 'react';
import './homepage.styles.scss';
import HeaderMod from '../../components/header-mod/header-mod.component';

//Redux import
import {connect} from 'react-redux';

//Router import
import {Redirect} from 'react-router-dom';

//Component import
import {Banner} from '../../components/banner/banner.component';
import {ProductsSection} from '../../components/products-section/products-section.component';
const Homepage = ({currentUser}) => {
    
    return (
        <div className='homepage'>
        <HeaderMod />
        <Banner />
        <ProductsSection />
        </div>
)}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(Homepage);