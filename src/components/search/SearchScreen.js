import React, { useMemo } from 'react'
import queryString from 'query-string' 
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
 
    const { q = '' } = queryString.parse(location.search);
 
    
    const [{searchText}, handleInputChange] = useForm({
        searchText: q
    });
      
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault(); 
        history.push(`?q=${searchText}`);
    }
    

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            name="searchText"
                            value={searchText}
                            onChange={ handleInputChange }
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn mt-2 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                
                <div className="col-7">
                    <h4> Results </h4>
                    <hr/>

                    {
                        ( q === '' )
                            &&
                            <div className="alert alert-info animate__animated animate__lightSpeedInRight">
                                Search a hero
                            </div>
                    }

                    {
                        ( q !== '' && heroesFiltered.length === 0)
                            &&
                            <div className="alert alert-danger animate__animated animate__lightSpeedInRight">
                                There is not a hero with { q }
                            </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                { ...hero }
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
