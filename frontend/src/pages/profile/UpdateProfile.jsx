/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./updateProfile.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  const initialUser = {
    name: "",
    email: "",
  };
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const { id } = useParams();

  // Handler for input change
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Fetch user details on component mount
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/auth/update-profile/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to load profile details.", { position: "top-right" });
      });
  }, [id]);

  // Form submission handler
  const submitForm = async (e) => {
    e.preventDefault();

    if (!user.name.trim() || !user.email.trim()) {
      toast.error("All fields are required.", { position: "top-right" });
      return;
    }

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/auth/update-profile/${id}`,
        user
      );
      toast.success(response.data.message, { position: "top-right" });
      navigate("/profile");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile. Please try again.", { position: "top-right" });
    }
  };

  return (
    <main>
      <div className="update-profile-container">
        <h2>Edit Profile</h2>
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
               type="text"
               id="name"
               value={user.name}
               onChange={inputHandler}
               name="name"
               autoComplete="off"
               placeholder="Enter your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={inputHandler}
              name="email"
              autoComplete="off"
              placeholder="Enter your Email"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
     < ToastContainer/>
      </div>
    </main>
  );
};

export default UpdateProfile;
