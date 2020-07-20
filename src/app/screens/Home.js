import React from "react";

const Home = ({ params }) => <div>
 <h1 style={{textAlign:'center'}}>Beverly Hills Wellness Center</h1>
 <div>
 <video style={{width:'100%'}} width="400" controls>
  <source src={require('../../assets/home.mp4')} type="video/mp4"/>
</video>
 </div>
</div>;

export default Home;