/* eslint-disable no-unused-vars */
import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Gaming Community Dashboard</h1>
      </header>

      <div className="dashboard-content">
        {/* Announcements Section */}
        <section className="dashboard-section announcements">
          <h2>Announcements</h2>
          <ul>
            <li>🎮 New tournament coming this weekend! Register now.</li>
            <li>🔥 Exclusive rewards for top leaderboard players this month.</li>
            <li>🛠️ Scheduled maintenance on January 15th, 2:00 AM to 5:00 AM.</li>
          </ul>
        </section>

        {/* Active Players Section */}
        <section className="dashboard-section active-players">
          <h2>Active Players</h2>
          <p>Currently online: <span className="active-count">253</span> players</p>
        </section>

        {/* Leaderboard Section */}
        <section className="dashboard-section leaderboard">
          <h2>Top Players</h2>
          <ol>
            <li>🔥 PlayerOne - 4520 XP</li>
            <li>⚡ ShadowHunter - 4310 XP</li>
            <li>💎 MysticWarrior - 3985 XP</li>
          </ol>
        </section>

        {/* Upcoming Events Section */}
        <section className="dashboard-section events">
          <h2>Upcoming Events</h2>
          <ul>
            <li>🌟 Clan War - January 20th</li>
            <li>🏆 Solo Championship - January 28th</li>
            <li>🎉 Community Meetup - February 5th</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
