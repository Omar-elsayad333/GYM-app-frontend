import axios from "axios";

export const getHandler = (path) => {
    return new Promise ((resolved, rejected) => {
        axios({
            url: `https://gym-backend-nine.vercel.app${path}`,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        })
        .then(
            (res) => {
                resolved(res.data);
            },
            (rej) => {
                rejected(rej);
            }
        )
    });
};