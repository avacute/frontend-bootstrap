import {SAMPLE_ERRORSAMPLE_ACTION} from '../types';
import Axios from 'axios'
import {API_BASE} from '../../env';

export const postBooking = (booking) => async dispatch => {
    
    var actionData = {
        test:100
    }
    
    try {
       
        await Axios(
            {
                method: 'post',
                url: API_BASE + 'action/',
                data:actionData,
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        dispatch(
            {
            type: SAMPLE_ACTION,
            payload: bookingData
        });
        localStorage.setItem('amount',actionData.test);
    
        window.location.href = "/sandbox/payment";
    } catch{
        dispatch({
            type: SAMPLE_ERROR,
            payload: "can't create booking"
        });
    }
};





