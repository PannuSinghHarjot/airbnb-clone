import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card 
        src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" 
        title="Online Experinces"
        description="Unique activities we can do together led by hosts"
        />
        <Card 
        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720" 
        title="Online Experinces"
        description="Unique activities we can do together led by hosts"
        />
        <Card 
        src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" 
        title="Online Experinces"
        description="Unique activities we can do together led by hosts"
        />
      
      
      </div>
      <div className="home__section">
      <Card 
        src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg" 
        title="House Tracy"
        description="Unique activities we can do together led by hosts"
        />
      <Card 
        src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg" 
        title="House Tracy"
        description="Unique activities we can do together led by hosts"
        />
      <Card 
        src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg" 
        title="House Tracy"
        description="Unique activities we can do together led by hosts"
        />
      </div>
    </div>
  );
};

export default Home;
