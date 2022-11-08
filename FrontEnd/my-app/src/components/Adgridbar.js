import React, { useEffect, useState } from "react";
import AdCard from "./AdCard";
import axios from 'axios'


const AdgridBar = (props) => {
    const [data, setData] = useState()

    useEffect(() => {
        if (props.keyword) {
            axios.get(`http://localhost:3055/api/v1/search?keyword=${props.keyword}`)
                .then(function (response) {
                    // handle success
                    setData(response.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
        else {
            axios.get(`http://localhost:3055/api/v1/search?keyword=${''}`)
                .then(function (response) {
                    // handle success
                    setData(response.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    }, [props.keyword])

    if (data) {
        console.log(data)
        return (
            <>
                <div class="d-flex flex-wrap justify-content-center w-100 mb-5">
                    {
                        data.map((Ad) => {
                            return(
                            <div class="p-3" key={Ad.id}><AdCard adData={Ad} /></div>
                            )
                        })
                    }

                </div>
            </>

        )
    }

}

export default AdgridBar;