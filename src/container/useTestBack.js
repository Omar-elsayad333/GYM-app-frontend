import { useEffect, useState } from "react";
import { getHandler } from "../handlers/testBack";

const useTestBack = () => {

    const [ backData, setBackData ] = useState()

    useEffect(() => {
        getBackData()
    }, [])

    const getBackData = async () => {
        try {
            const res = await getHandler('api/workouts')
            setBackData(res)
            console.log(res)
        }catch(error) {
            console.log(error)
        }
    }

    return (
        {
            data: backData
        }
    );
}
 
export default useTestBack;