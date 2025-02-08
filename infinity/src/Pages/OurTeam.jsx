import React from 'react';
import './OurTeam.css';
import core from '../data/team.json';
import I1 from '../data/1.jpeg';

function OurTeam() {
    const teams = core.teams;

    return (
        <div className="teams-wrapper">
            <div className="teams-container">
                {/* Loop the teams twice for a seamless scroll effect */}
                {teams.map((team, i) => (
                    <div key={i} className="team-container">
                        <h2 className="team-heading" >{team.name}</h2>
                        <div className="team-members">
                            {team.members.map((member, index) => (
                                <div className="member-card" key={index}>
                                    <img src={I1} alt="Member" />
                                    <p className="member-name">{member.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurTeam;
