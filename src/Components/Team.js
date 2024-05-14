import React from 'react'
import first from '../Images/team1.png';


export default function Team() {
    return (
        <div id="team"><br />
            <h1>Meet Our Team</h1>
            <div className="teamtext">
                <br />
                <h4 className='flint'>Flintoff</h4>
                <img src={first} alt="pic" />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio iusto cumque commodi explicabo blanditiis alias, placeat sed, qui, at esse? Unde voluptate, eaque reiciendis numquam repellat suscipit deleniti voluptatum?</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>Symonds</h4>
                <img src={first} alt="pic" />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio iusto cumque commodi explicabo blanditiis alias, placeat sed, qui, at esse? Unde voluptate, eaque reiciendis numquam repellat suscipit deleniti voluptatum?</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>Kallis</h4>
                <img src={first} alt="pic" />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio iusto cumque commodi explicabo blanditiis alias, placeat sed, qui, at esse? Unde voluptate, eaque reiciendis numquam repellat suscipit deleniti voluptatum?</p>
            </div>
        </div>
    )
}
