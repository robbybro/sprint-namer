import * as React from 'react';

import './App.css';
import songs from './styx';
import worms from './worms';

const numSongs = songs.length;
const numWorms = worms.length;

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
};

class App extends React.Component<any, { song: string; worm: string }> {
    constructor(props: any) {
        super(props);
        this.state = { song: '', worm: '' };
    }
    public pickSong() {
        return songs[getRandomInt(numSongs)];
    }

    public pickWorm() {
        return worms[getRandomInt(numWorms)];
    }

    public handleClick() {
        this.setState({
            song: this.pickSong(),
            worm: this.pickWorm(),
        });
    }
    public render() {
        const handleClick = () => this.handleClick();
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">
                        The River STIX Sprint Name Generator
                    </h1>
                </header>
                <button onClick={handleClick}>
                    Generate a random sprint name
                </button>
                <h2 className="name">
                    {this.state.song} - {this.state.worm}
                </h2>
            </div>
        );
    }
}

export default App;
