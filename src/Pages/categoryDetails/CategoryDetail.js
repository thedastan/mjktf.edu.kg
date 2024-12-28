import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { api } from "../../http/api";
import "../../styles/CategoryDetails/categoryDetails.scss";

import { media } from "../../components/media";
import Spiner from "../../components/main/Spiner";

const CategoryDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        api.get(`/category/detail/${id}`).then(({ data }) => {
            setData(data);
        });
    }, [id]); // Correct dependency

    console.log(data, "categoryDatail");
    return (
        <section id="CategoryDetail" style={{ padding: "200px 0" }}>
            <div className="container">
                {data ? (
                    <>
                        <h1>{data?.name}</h1>
                        <iframe
                            src={data?.file}
                            title={`Category details for ${data?.name || "Unknown Category"}`}
                            style={{ width: "100%", height: media(200, 600) }}
                        />
                    </>
                ) : (
                    <div style={{ marginTop: "120px" }}>
                        <Spiner />
                    </div>
                )}
            </div>
        </section>
    );
};

export default CategoryDetail;
