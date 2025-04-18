import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../http/api";
import "../../styles/CategoryDetails/categoryDetails.scss";
import Spiner from "../../components/main/Spiner";

const ToolDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  useEffect(() => {
    api.get(`/accreditation/detail/${id}`)
      .then(({ data }) => {
        setData(data);  
        setLoading(false);  
      })
      .catch((error) => {
        console.error("Error fetching detail data", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div style={{ padding: "200px" }}>
        <Spiner />  
      </div>
    );
  }

  if (!data) {
    return <div style={{ padding: "200px" }}>No data found</div>;
  }

  const handleFileClick = (fileUrl) => {
    if (fileUrl) {
      window.open(fileUrl, "_blank");
    }
  };


  return (
    <section id="CategoryDetail" style={{ minHeight: "80vh", padding: "150px 0" }}>
      <div className="container">
        <div className="block">
          <h1>{data.name}</h1>  

          <div className="cards">
            {data.accreds && data.accreds.length > 0 ? (
              data.accreds.map((science, index) => (
                <div className="box" key={index}>
                  <div className="card">
                    <h2>{science.name_file}</h2> 
                    <button style={{border:"none" , fontSize:"22px", background:"white",cursor:"pointer"}} onClick={() => handleFileClick(science.file)}>
                    PDF file
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No files available</p>  
               

            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolDetails;

