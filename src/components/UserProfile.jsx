import { useState, useEffect } from "react";
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchUser() {
            setLoading(true);
            const response = await fetch(`/api/users/${userId}`);
            const data = await response.json();
            setUser(data);
            setLoading(false);
        }
        
        fetchUser();
    }, [userId]);  // Re-fetch when userId changes
    
    if (loading) return <p>Loading...</p>;
    return <div>{user.name}</div>;
}

export default UserProfile;
