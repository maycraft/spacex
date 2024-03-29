import React from 'react';
import './Features.css';
import ReactRelluxWrapper from 'react-rellax-wrapper';

const rockets = {
    'Falcon 1': 'falcon-1',
    'Falcon 9': 'falcon-9',
    'Falcon Heavy': 'falcon-heavy',
    'Starship': 'starship'
}

const videos = {
    'Falcon 1': 'moon',
    'Falcon 9': 'earth',
    'Falcon Heavy': 'mars',
    other: 'space'
}

const Features = ({name, height, diameter, mass, payload_weights: payloadWeights, description}) => {
    return(
        <React.Fragment>
            <section className="main">
                <h1 className="title">{name}</h1>
                <div className="video-container">
                    <video className="video" 
                            autoPlay 
                            loop 
                            muted 
                            // src={`./video/${videos.hasOwnProperty(name) ? videos[name] :
                            // videos.other }.mp4`}>
                            src={require(`../../../public/video/${videos.hasOwnProperty(name) ? videos[name] :
                                videos.other }.mp4`)}>
                    </video>
                </div>
            </section>
            <section className="features">
                <h2 className="features-title">{name} <br />Overview</h2>
                <div className="overview">
                    <table className="table">
                        <caption className="table-title">Size</caption>
                        <thead>
                            <tr>
                                <td className="table-column">HEIGHT</td>
                                <td className="table-column">{height.meters} m / {height.feet} ft</td>
                            </tr>
                            <tr>
                                <td className="table-column">DIAMETER</td>
                                <td className="table-column">{diameter.meters} m / {diameter.feet} ft</td>
                            </tr>
                            <tr>
                                <td className="table-column">MASS</td>
                                <td className="table-column">{mass.kg} kg / {mass.lb} lb</td>
                            </tr>
                            {
                                payloadWeights.map( item => (
                                    <tr key={item.id}>
                                        <td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
                                        <td className="table-column">{item.kg} kg / {item.lb} lb</td>
                                    </tr>
                                ))
                            }
                        </thead>
                    </table>
                    <ReactRelluxWrapper speed={14}>
                        <img
                            // src={`imgs/${rockets[name]}.png`}
                            src={require(`./imgs/${rockets[name]}.png`)}
                            alt={name}
                            className="rocket"
                            data-rellax-speed="14"
                        />
                    </ReactRelluxWrapper>
                    <article>
                        <h3 className="features-subtitle">DESCRIPTION</h3>
                        <p className="features-text">{description}</p>
                    </article>
                </div>
            </section>
        </React.Fragment>
    );
} 

export default Features;