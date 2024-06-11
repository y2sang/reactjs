import React from 'react'
import ReactDOM from 'react-dom/client'

const okUrl = 'http://localhost:3000/photos?_page=1&_limit=100';
// const notFoundErrorUrl = 'https://httpstat.us/404';
// const forbiddenErrorUrl = 'https://httpstat.us/403';
// const serverErrorUrl = 'https://httpstat.us/500';

function PhotoList() {
    const [loading, setLoading] = React.useState(false);
    const [photos, setPhotos] = React.useState([]);
    const [error, setError] = React.useState(null);

    function toUserError(error) {
        console.log('Call API to log the raw error. ', error);
        return 'There was an error loading the photos.';
    }

    React.useEffect(() => {
        setLoading(true);

        fetch(okUrl)
            .then((response) => {
                if (!response.ok) throw new Error(response.statusText);
                return response;
            })
            .then((res) => {
                console.log(res);
                return res;
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setError(null);
                setPhotos(data);
                setLoading(false);
            })
            .catch((error) => {
                const userError = toUserError(error);
                setError(userError);
                setLoading(false);
            });
    }, []);

    if (error) {
        return <div>{error}</div>;
    } else if (loading) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {photos.map((photo) => {
                    return (
                        <li key={photo.id}>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                            <h3>{photo.title}</h3>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<PhotoList />);