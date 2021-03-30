import{ useState, useEffect } from "react"

export const ShowPassword=()=>{

const [passwordShown, setPasswordShown] = useState(false);

const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)}
}
