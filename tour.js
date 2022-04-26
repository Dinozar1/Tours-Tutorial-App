import React from 'react';
import './tours.css';

export const Tour = (data) => 
{
    const [isShowed, setIsShowed] = React.useState(false);
    const [showButton, setShowButton] = React.useState('Show More')
    let tourData = data.data;
    const delFunction = data.delFunction;

    const showHideText = () => 
    {
        if(!isShowed)
        {
            setIsShowed(true);
            setShowButton('Show less');
        }

        else
        {
            setIsShowed(false);
            setShowButton('Show more');
        }
    }


    return(
        <section className='section-tour'>
            <div className='div-img'>
                <img src={tourData.image} alt={tourData.name}/>
            </div>
            <div className='title-and-price'>
                <header>
                    {tourData.name}
                </header>
                <div className='price'>
                    ${tourData.price}
                </div>
            </div>
            <div className='tour-text'>
               {isShowed || tourData.info.slice(0,200)+'...  '}
               {isShowed && tourData.info+'  '}
                <span onClick={showHideText} className='show-hide-btn'>
                    {showButton}
                </span>
            </div>
            <div>
                <button onClick={() => delFunction(tourData.id)} className='delete-btn'>
                    Delete
                </button>
            </div>
        </section>
    )
}

