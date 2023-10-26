import React, { useState, useEffect } from "react";
import GoalHeader from "../components/GoalHeader";

import Goal from "../components/Goal";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";
import goals from "../data/goals";
const Allgoals = () => {
  
  // // usestate
  // const [Goals, setGoals]= useState([]);
  // const [isLoading, setIsLoading]= useState(true);

  // // a function to set the data - spinner thingy
  // const fetchGoals = async()=>{
  //   try{
  //     const res = await fetch('http://localhost:5000/api/goals')
  //     const data = await res.json();
  //     setIsLoading(false);
  //     const {goals}= data;
  //     setGoals(goals);
  //     console.log(data);
  //   }catch (error){
  //     console.log(error);
  //   }
  // };
  // useEffect(()=>{
  //   fetchGoals()
  // }, [])

  const  {isLoading, data: {goals: Goals}}= useFetch('https://goals-sathoan-api.onrender.com/api/goals');
  
  return (
    <div className="container pb-3">
      <GoalHeader heading="All Goals" />
      {isLoading && <Loading/>}
      <div>
        <div>
          { Goals && 
          Goals.map((g) => {
            return <Goal key={g._id} {...g} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Allgoals;
