import React from 'react';
import { useEffect, useState } from 'react';

export default function InstagramGallery() {
  const [feeds, setFeeds] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);  

  const url = `https://graph.facebook.com/v19.0/instagram_oembed?url=https://www.instagram.com/p/fA9uwTtkSN/&access_token=&${import.meta.env.VITE_ACCESS_TOKEN}`

  useEffect(() => {
      const fetchData = async() => {
      
        try {
            setLoading(true);
            const res = await fetch(url);
            setFeeds(res.data)
            setError(false);
            setLoading(true)
        } catch(err) {
            setError(true);
        }
        setLoading(false);
      }    
},[url])

fetchData();

  return (
    <div className='instagram-div'>
        <h2>What's happening on Instagram</h2>

        {feeds.map(feed =>         
            <div className="instagram-bkgd">

            </div>
        )}

    </div>
  )
}
