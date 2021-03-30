import{ useState, useEffect } from "react"

export const FetchData=(fetchFunction)=>{
    const [isLoading, setIsLoading]= useState(false)
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);
    const [numberOfCall, setNumberOfCall]=useState(1)

    useEffect(()=>{
        setIsLoading(true);
    setIsError(false);
     fetchFunction()
     .then((categories) => {
        setData(categories);
      })

      .catch((err) => {
        setIsError(true);
      })

      .finally(() => {
        setIsLoading(false);
      })
    },[numberOfCall])

    return {
        isLoading, isError, data,
        retryFetch:()=> setNumberOfCall(numberOfCall +1)
    }
}
