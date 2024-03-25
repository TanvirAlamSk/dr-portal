import { useEffect, useState } from "react"

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [adminLoader, setAdminLoader] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then((response) => response.json())
                .then((data) => {
                    setIsAdmin(data?.isAdmin);
                    setAdminLoader(false)
                })
        }
    }, [email])
    return [isAdmin, adminLoader]
}

export default useAdmin;