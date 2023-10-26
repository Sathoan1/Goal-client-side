import React from "react";
import Progress from "./Progress";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Goal = ({ title, description, progress, _id }) => {
  const handleGoalDelete = async (goalId)=> {
    
    const url = `http://localhost:5000/api/goals/${goalId}`
    try{
      const res= await fetch(url, {method: 'DELETE'})
      const data = await res.json()
      if (data.success){
        window.location.reload();
      }else{
        toast.error('Error deleting goal, try aqain')
      }
    }catch (error){
      console.log(error);
    }
  }
  return (
    <div className="border-bottom border-3 border-secondary-subtle pb-4 px-4 mt-4 shadow-sm">
      <ToastContainer />
      <h2 className="fw-bold text-capitalize">{title}</h2>
      <p>{description} </p>
      <div className="d-block d-md-flex align-items-end justify-content-between">
        <Progress num={progress} />
        <div className="mt-2 mt-lg-0 d-flex gap-4">
          <button className="blue-bg  updatebtn">
            <Link
              to={`/update/${_id}`}
              className="text-decoration-none text-white"
            >
              <MdOutlineModeEditOutline /> Update Progress{" "}
            </Link>{" "}
          </button>
          <button className=" border-none bg-transparent transparent delbtn" 
          onClick={()=>handleGoalDelete(_id)}>
            <RiDeleteBinLine /> Delete{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goal;
