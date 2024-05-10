import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase/config";
import { useDispatch } from "react-redux";
import { getRates } from "../redux/ratesSlice";

function useRates() {
    const [rates, setRates] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const ratesRef = collection(db, "rates");
        getDocs(ratesRef).then((resp:any) => {
            setRates(resp.docs[0].data())
      })
      },[]);
      if(rates !== null) {
        dispatch(getRates(rates));
      }
      return {
        rates
    } as any;
}

export default useRates;