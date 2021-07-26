import React, { Component } from 'react';
import CharacterList from './CharacterList';
import '../styles/index.css';
import HeroList from './HeroList';
import SquadStats from './SquadStats';
import { connect } from 'react-redux';


class App extends Component {
    
    render() {        
        return (
            <div className='app'>
                <div className='content'>
                    <h2>SuperSquad</h2>
                    <div className='row'>
                        <div className='col-md-4 col-6'>
                            <CharacterList />
                        </div>
                        <div className='col-md-4 col-6'>
                            <HeroList />
                        </div>
                        <div className='col-md-4 col-12 py-4 py-md-0'>
                            {this.props.heroes.find(i => i.name !== '')
                                ? <SquadStats /> : <div></div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        heroes: state.heroes
    }
}

export default connect(mapStateToProps, null)(App);