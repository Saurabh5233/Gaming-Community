import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './gameinfo.css'


const Demo = ()=>{
    return(
        <>
          <Header/>  
            <main>
                
                <section className="gameImg">
                <h2 id="gamename">Game Name</h2>
                <img src="https://magazine.artstation.com/wp-content/uploads/2020/07/suke-valorant-launch-key-art-4_r.jpg?resize=1536,864" alt="valo image" />
                </section>
                <section className="gameInfo">
                    <div>
                        This is the section to show game info
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                    </div>
                    <div>
                        This is the section to show Defice specifications
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                    </div>
                    <div>
                        This is the section to show purchase options
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet consectetur.</li>
                    </div>
                </section>
            </main>
          <Footer/>
        </>
    )
}

export default Demo