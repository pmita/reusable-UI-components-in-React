import React from 'react';
import { Link } from 'react-router-dom'; //This will properly link the path to our button
//Apply styling with styled-components
import styled from 'styled-components';

const ButtonStyles = styled.button`
    padding: 1rem 2rem;
    border: none;
    outline: none;
    transition: all 0.3s ease;
    background: ${props =>
        props.outline ? `${props.mainColor}` : `${props.secColor}`
    };
    .buttonLink{
        color: ${props =>
        props.outline ? `${props.secColor}` : `${props.mainColor}`
    };
    }
    &:hover{
        cursor: pointer;
        background: ${props =>
        props.outline ? `${props.secColor}` : `${props.mainColor}`
    };
    .buttonLink{
        color: ${props =>
        props.outline ? `${props.mainColor}` : `${props.secColor}`
    };
    }
}  
`;

const Button = ({
    buttonText = 'Button Text',
    buttomLink = '#',
    mainColor = 'red',
    secColor = 'black',
    outline = false
}) => {
    /*
        Let's make a reusable functioning button component with styled-components. 
        In order for us to customize the button we can pass in particular
        props that will alter the appearance and content of the button
    */
    return (
        <ButtonStyles
            className="button"
            outline={outline}
            mainColor={mainColor}
            secColor={secColor}
        >
            <Link
                className="buttonLink"
                to={buttomLink}
            >
                {buttonText}
            </Link>
        </ButtonStyles>
    );
}

export default Button;