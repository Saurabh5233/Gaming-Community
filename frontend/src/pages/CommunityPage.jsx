import React from "react";
import "./Community/Community.css";
import Community from "./Community/Community";
import "./pages.css";
import { useState,useEffect } from "react";
import membersData from "../assets/membersData.json"



const CommunityPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [memId,setMemId] = useState("")
  // const [membersData, setMembersData] = useState([]);
  const token = localStorage.getItem("token");
  const [newMember, setNewMember] = useState({
    name: "",
    points: { lightning: 16, diamond: 9, heart: 5 },
    image: "",
    phone: "",
    email: "",
    badge: ["shield", "medal"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({ ...prev, [name]: value }));
  };

  // const handleFetch = async()=>{
  //   const url = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/comm/`;
  //   try{
  //     const response = await fetch(url,{
  //       method:"GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = response.json()
  //     console.log(data)
  //     setMembersData(data);
  //   }catch(error){
  //     console.log("Error fetching data",error);
  //   }
    
  // }


  // useEffect(() => {
  //   handleFetch();
  // }, []);

  const handleAddMember = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/comm/add`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newMember, role: "Community Member" }),
      });
      const data = await response.json();
      console.log("Member added:", data);
      setMemId(data.memId);
    } catch (err) {
      console.error("Error adding member:", err);
    }
  };

  const handleDeleteMember = async (memId) => {
    try {
      const url = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/comm/del/${memId}`;
      const response = await fetch(url, { method: "DELETE" });
      const data = await response.json();
      console.log("User deleted:", data);
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };


  return (
    <div className="community-page">
      {/* Page Heading */}
      <div className="page-heading">
        <h1>Community Members</h1>

        {/* Member Cards Section */}
        <div className="member-cards-container">
          {token ? (
            <>
              <div className="community-layout">
                {/* Sidebar */}
                <div className={`sidebar ${showSidebar ? "active" : ""}`}>
                  <h2>Points</h2>
                  <div className="points-section">
                    <div className="points-item">
                      <span>⚡ Lightning Points:</span> <span>0</span>
                    </div>
                    <div className="points-item">
                      <span>💎 Diamond Points:</span> <span>0</span>
                    </div>
                    <div className="points-item">
                      <span>❤️ Heart Points:</span> <span>0</span>
                    </div>
                  </div>

                  <h2>Achievements</h2>
                  <div className="achievements-section">
                    <div className="achievement-item">🏆 Medal</div>
                    <div className="achievement-item">➕ Plus Badge</div>
                  </div>

                  <h3>Online Members</h3>
                  <p>There are no users</p>
                </div>


                <div className="member-cards">
                  {membersData.map((member, index) => (
                    <Community key={index} member={member} />
                  ))}
                </div>
              </div>
              <hr />
              <div className="form">
              <div className="join-community">
                <form onSubmit={handleAddMember}>
                  <label htmlFor="name">Name:</label>
                  <input type="text"
                  name="name"
                  onChange={handleChange}
                  value={newMember.name}
                  placeholder="Enter Your Name"
                  />
                  <label htmlFor="image">Add Image Url:</label>
                  <input type="text" 
                  name="image"
                  onChange={handleChange}
                  value={newMember.image}
                  placeholder="Add your image url"
                  />
                  <label htmlFor="phone">Contact No:</label>
                  <input type="text"
                  name="phone"
                  onChange={handleChange}
                  value={newMember.phone}
                  placeholder="Enter your contact number"
                  />
                  <label htmlFor="email">Email:</label>
                  <input type="email"
                  name="email"
                  onChange={handleChange}
                  value={newMember.email}
                  placeholder="Enter your email"
                  />
                  <button id= "joinbtn" type="submit" >Join Now</button>
                </form>

              </div>
              </div>
            </>

          ) : (
            <h2>Please Login to see community.</h2>
          )}
        </div>
      </div>



    </div>
  );
};

export default CommunityPage;