import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchSpotByCity } from '../../store/spots.js';

import './styles.css';

const SearchBar = ({ clicked }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const spots = useSelector(state => state.spots);
    
    const [city, setCity] = useState('Anywhere');

    useEffect(() => {
        setCity('Anywhere');
    }, [spots]);

    return (
        <div>
            <div
            style={{
                display: clicked === false ? 'flex' : 'none',
                border: '1px solid rgb(220, 220, 220)',
                justifyContent: 'space-between',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                backgroundColor: 'white',
                boxShadow: '0px 1px 10px -5px rgb(65, 65, 65)',
                width: '20vw',
                height: '5vh',
                cursor: 'pointer',
                borderRadius: '48px'
            }}>  
                <p 
                style={{
                    fontSize: '14px', 
                    position: 'relative',
                    bottom: '0.55vh',
                    left: '2vw'
                }}>
                        {city}
                </p>

                <i style={{
                    borderRight: '1px solid rgb(220, 220, 220',
                    marginTop: '0.8vh',
                    marginBottom: '0.8vh'
                }}></i>

                
                <button 
                id='search-icon'
                style={{
                    position: 'relative',
                    top: '0.5vh',
                    right: '0.6vw',
                    border: 'none', 
                    borderRadius: '100vw',  
                    backgroundColor: '#FF385C',
                    width: '1.9vw',
                    height: '4vh',
                    cursor: 'pointer'
                }}>
                </button>
            </div>

            <form
            style={{
                display: clicked === true ? 'flex' : 'none',
                fontWeight: 'bold',
                backgroundColor: 'rgb(220, 220, 220)',
                border: 'none',
                boxShadow: '0px 1px 10px -5px rgb(65, 65, 65)',
                minWidth: '40vw',
                maxWidth: '40vw',
                minHeight: '9vh',
                maxHeight: '9vh',
                borderRadius: '48px'
            }}>
                <label>
                    <input
                    id='searchbar-input'
                    type='text'
                    value={city}
                    onClick={() => setCity('')}
                    onChange={e => setCity(e.target.value)}
                    style={{
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        background: 'white',
                        border: 'none',
                        boxShadow: '0px 1px 10px -5px rgb(65, 65, 65)',
                        minWidth: '20vw',
                        maxWidth: '20vw',
                        minHeight: '8.7vh',
                        maxHeight: '8.7vh',
                        cursor: 'pointer',
                        borderRadius: '48px',
                        textAlign: 'center'
                    }}>
                    </input>
                </label>

                <button 
                id='final-search-icon'
                onClick={async e => {
                    e.preventDefault();
                    
                    await history.push(`/`);
                    await dispatch(fetchSpotByCity(city));
                }}
                style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    position: 'relative',
                    top: '1.2vh',
                    left: '12vw',
                    border: 'none', 
                    borderRadius: '50px', 
                    width: '7vw',
                    height: '7vh',
                    color: 'white',
                    textAlign: 'center',
                    cursor: 'pointer'
                }}>
                  Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;