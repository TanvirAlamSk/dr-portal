import { useEffect, useState } from "react"

const useToken = (email) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userToken, setUserToken] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.accessToken) {
                        localStorage.setItem("Access-Token", data.accessToken)
                        setUserToken(data.accessToken)
                    }
                })
        }
    }, [email])
    return [userToken]
}

export default useToken;