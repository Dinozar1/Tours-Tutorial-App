import React from 'react';
import ReactDom from 'react-dom';
import './main.css';
import {Tour} from './tour.js'

const url = 'https://course-api.com/react-tours-project'

const App = () => 
{
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(
        () => 
        {
            getData();
        },
        []
    )

    const getData = async() =>
    {
        await fetch(url).then(
            (resp) => 
            {
              if(resp.status>=200 && resp.status<=299)
              {
                return resp.json();
              }
              else
              {
                setLoading(false);
                throw new Error(resp.statusText);
              }
            }
            )
            .then((data) => {setData(data); setLoading(false)})
            .catch((err) => console.log(err));
    }

    const delFunction = (id) => 
    {
        const copy = data.filter((arg) => arg.id!==id)
        setData(copy);
    }


    if(loading)
    {
        return(
            <>
                <h2>Loading...</h2>
            </>
        )
    }

    else if(data.length < 1)
    {
        return(
            <>
            <header className='main-header'>
                There is no more Tours
                <div className='underline'></div>
            </header>
            </>
        )
    }
    else
    {
        return(
        <>
            <header className='main-header'>
                Our Tours
                <div className='underline'></div>
            </header>
            <main>
                <article>
                    {
                        data.map(
                            (tourData) => 
                            {
                                return(
                                    <>
                                        <Tour data={tourData} key={tourData.id} delFunction={delFunction}/>
                                    </>
                                )
                            }
                        )
                    }
                </article>
            </main>
        </>
    )
    }

}

ReactDom.render(<App />,document.getElementById('root'))