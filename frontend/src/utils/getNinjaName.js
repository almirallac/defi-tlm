import catchErrors from "./catchErrors";
import baseUrl from "./baseUrl";
import axios from "axios";

export const getNinjaName = async (name, setSuccess, setError, setLoading) => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}/ninjify?x=`+name);
      setSuccess(res.data);
    } catch (error) {
      setError(catchErrors(error));
    }
    setLoading(false);
  };

