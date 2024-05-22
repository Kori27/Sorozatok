// React oldal
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormDataTable = () => {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        // Axios segítségével lekérjük az adatokat a szerverről
        axios.get('http://localhost:5001/getFormData')
            .then(response => {
                console.log(response.data); // Új sor
                setFormData(response.data);
            })
            .catch(error => {
                console.error('Error fetching form data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Adatbázis tartalom</h1>
            <table>
                <thead>
                    <tr>
                        <th>Cím</th>
                        <th>Dátum</th>
                        <th>Évad</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map(data => (
                        <tr key={data.id}>
                            <td>{data.cim}</td>
                            <td>{data.datum}</td>
                            <td>{data.evad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FormDataTable;