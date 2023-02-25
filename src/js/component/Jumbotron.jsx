import React from "react";

function Jumbotron () {
    return (
        <div className="container">
            <div className="jumbotron bg-dark bg-opacity-25 pt-3 p-5">
                <h1>A Warm Welcome!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repellat neque quia magni iusto sequi fugiat, quis reprehenderit harum illum commodi facere unde ducimus dolorem quibusdam eos distinctio saepe praesentium.</p>
                <button type="button" className="btn btn-primary">Call to action!</button>
            </div>
        </div>
    );
};

export default Jumbotron;