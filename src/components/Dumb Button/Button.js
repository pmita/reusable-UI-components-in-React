import React from 'react';
import { Link } from 'react-router-dom'; //This will properly link the path to our button
//Apply styling with styled-components
import styled from 'styled-components';

const ButtonStyles = styled.button`
    padding: 1rem 2rem;
    border: none;
    outline: none;
    background: ${props =>
        props.outline ? 'red' : 'black'
    };
    .buttonLink{
        color: ${props =>
        props.outline ? 'black' : 'red'
    };
    }
    &:hover{
        background: ${props =>
        props.outline ? 'black' : 'red'
    };
    .buttonLink{
        color: ${props =>
        props.outline ? 'red' : 'black'
    };
    }
    
`;

const Button = ({
    buttonText = 'Button Text',
    buttomLink = '#',
    outline = false
}) => {
    /*
        Let's make a reusable button component with styled-components
    */
    return (
        <ButtonStyles className="button" outline={outline}>
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