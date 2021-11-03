import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorContainer } from './pages.style';
import illust from '../assets/404-illust.svg'

const Error = () => {
    return (
        <React.Fragment>
            <ErrorContainer className='page'>
                <div>
                    <img src={illust} alt='not-found' />
                    <h1>404</h1>
                    <h4>page not found</h4>
                    <div className='btn-container'>
                        <Link to='/' className='btn'>
                            Back Home
                        </Link>
                    </div>
                </div>
            </ErrorContainer>
        </React.Fragment>
    )
}

export default Error