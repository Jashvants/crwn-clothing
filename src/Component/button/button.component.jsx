// Default button 

// inverted button

// google sign in button

import './button-styles.scss';


const Button_Types_Classes={
    google:'gogle-sign-in',
    inverted:'inverted'
}


const Button = ({children , buttonType , ...otherProps})=>{
    return (
        <button className={`button-container ${Button_Types_Classes[buttonType]}`}
                 {...otherProps}   >

            {children}


        </button>
    )
}
export default Button;