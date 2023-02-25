import React from "react";

function MyCard () {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary ">Find out more!</a>
            </div>
        </div>
    );
};

export default MyCard;