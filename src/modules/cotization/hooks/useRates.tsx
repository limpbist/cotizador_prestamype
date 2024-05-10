import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase/config";

function useRates() {
    const [rates, setRates] = useState(null);

    useEffect(() => {
        const ratesRef = collection(db, "rates");
        getDocs(ratesRef).then((resp:any) => {
            setRates(resp.docs[0].data())
      })
      },[]);
      return {rates} as any;
    }

export default useRates;