import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error('Fetch failed');
                }
                
                const json = await response.json();
                setData(json);
                
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        
        fetchData();
    }, [url]);
    
    return { data, loading, error };
}

function PostList() {
    const { data: posts, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts'
    );
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    
    return (
        <div>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default useFetch;
