import HEADER_ACTION_TYPES from './header.types';



export const headerReducer = (state, action) => {
    switch(action.type) {
        case HEADER_ACTION_TYPES.ON_HOME_PAGE:
            return(
                <div className='header'>
                    <div className='header-logo'>Home Page</div>
                    <div className='header-navigation'>
                        <ul className='links'>
                            <li className='link'>Shop</li>
                        </ul>
                        <div className='cart-icon'>Cart</div>
                    </div>
                </div>
            );
        default: 
            return (
                <div className='header'>
                    <div className='header-logo'>Cloth Store</div>
                    <div className='header-navigation'>
                        <ul className='links'>
                            <li className='link'>Shop</li>
                            
                        </ul>
                        <div className='cart-icon'>Cart</div>
                    </div>
                </div>
            );
    }
}

/*<li className='link'>Contact</li>
{currentUser?<li className='link' onClick={() => auth.signOut()}>Sign out</li>:<li className='link'>Sign In</li>}*/


