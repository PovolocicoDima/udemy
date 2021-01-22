import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [ value, setValue ] = useState(1);
    const [ visible, setVisible ] = useState(true);

    if(visible) {
        return (
            <div>
                <button
                    onClick={ () =>setValue((v) => v + 1) }>+</button>
                <button
                    onClick={ () => setVisible(false) }>hide</button>
                {/* <ClassCounter value={value} /> */}
                <PlanetInfo id={value}/>
            </div>
        );
    } else {
        return <button
                    onClick={ () => setVisible(true) }>show</button>;
    }
};

const PlanetInfo = ({ id }) => {

    const [planetName, setName] = useState(null);

    useEffect(() => {
        let canceled = false;
        fetch(`https://swapi.dev/api/planets/${id}/`)
        .then(res => res.json())
        .then(data => !canceled && setName(data.name));
        return () => canceled = true;
    }, [id]);

    return (
        <div>{ id } - { planetName }</div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));