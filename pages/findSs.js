import { Button, ListGroup } from "react-bootstrap";
import { useState } from "react";

export default function findSs() {

    const [data, setdata] = useState("");
    const [data1, setdata1] = useState("");
    const [dir, setdir] = useState("");
    const [files, setfiles] = useState([]);

    let userId = "008";

    const finduser = (id) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id })
        };
        fetch('http://localhost:3000/api/findSsByUserId', requestOptions)
        .then(response => response.json())
            .then(data => {
                console.log(data)
                setdir(data.directory);
                setfiles(data.file);
            });
    }

    const DeleteSs = (ss, id) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: ss, id: id })
        };
        fetch('http://localhost:3000/api/deleteSsByUserId', requestOptions)
            .then(response => response.json());
    }

    return (
        <div>
            <Button variant="warning" onClick={() => finduser(userId)}>Show ss</Button>
            {
                files.map(c => (
                    <ListGroup.Item>
                        <img key={c} src={`/assetsonline/${userId}/${c}`} alt={`/assetsonline/${userId}/${c}`} onClick={() => DeleteSs(c, userId)} />
                    </ListGroup.Item>
                )) 
            }
        </div>
    )
}
