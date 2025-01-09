/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./gameinfo.css";
import { ToastContainer } from "react-toastify";

const Demo = () => {
  return (
    <>
      <Header />
      <main>
        <section className="gameImg">
          {/* <h2 id="gamename">Game Name</h2> */}
          <img
            src="https://magazine.artstation.com/wp-content/uploads/2020/07/suke-valorant-launch-key-art-4_r.jpg?resize=1536,864"
            alt="valo image"
          />
        </section>
        <section className="gameInfo">
          <div>
            <h3>Game Information</h3>
            <ul>
              <li>
                <strong>Game Title:</strong> Super Adventure Quest
              </li>
              <li>
                <strong>Release Date:</strong> March 15, 2025
              </li>
              <li>
                <strong>Genre:</strong> Action-Adventure
              </li>
              <li>
                <strong>Platforms:</strong> PlayStation 5, Xbox Series X, PC
              </li>
              <li>
                <strong>Developed By:</strong> XYZ Studios
              </li>
              <li>
                <strong>Rated:</strong> M for Mature
              </li>
              <li>
                <strong>Multiplayer:</strong> Online Co-op
              </li>
              <li>
                <strong>Price:</strong> $59.99
              </li>
            </ul>
          </div>
          <div>
            <h3>Device Specifications</h3>
            <ul>
              <li>
                <strong>Operating System:</strong> Windows 10 or newer /
                PlayStation 5
              </li>
              <li>
                <strong>Processor:</strong> Intel Core i7-9700K / AMD Ryzen 7
                3700X
              </li>
              <li>
                <strong>Graphics:</strong> NVIDIA RTX 3070 / AMD Radeon RX 6800
              </li>
              <li>
                <strong>Memory:</strong> 16GB RAM
              </li>
              <li>
                <strong>Storage:</strong> 50GB available space
              </li>
              <li>
                <strong>Network:</strong> Broadband internet connection for
                multiplayer
              </li>
              <li>
                <strong>Controller Support:</strong> PlayStation 5 DualSense,
                Xbox Series X Controller
              </li>
              <li>
                <strong>VR Support:</strong> Optional (with compatible headset)
              </li>
            </ul>
          </div>
          <div>
            <h3>Purchase Options</h3>
            <ul>
              <li>
                <strong>Standard Edition:</strong> $59.99 – Includes base game
              </li>
              <li>
                <strong>Deluxe Edition:</strong> $89.99 – Includes base game +
                exclusive skins + soundtrack
              </li>
              <li>
                <strong>Ultimate Edition:</strong> $119.99 – Includes base game
                + all DLCs + VIP access
              </li>
              <li>
                <strong>Collector's Edition:</strong> $199.99 – Includes
                physical items (posters, figurines, etc.) + all digital bonuses
              </li>
              <li>
                <strong>Season Pass:</strong> $29.99 – Unlock all future DLC
                content for the game
              </li>
              <li>
                <strong>Digital Deluxe Bundle:</strong> $109.99 – Includes the
                game and all digital bonuses
              </li>
              <li>
                <strong>Pre-order Bonuses:</strong> Exclusive in-game items
                available for pre-order purchases
              </li>
              <li>
                <strong>Game Pass:</strong> Available on Xbox Game Pass for free
                with subscription
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
        <ToastContainer />
    </>
  );
};

export default Demo;
