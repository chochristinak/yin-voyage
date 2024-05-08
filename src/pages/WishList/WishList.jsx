import React, { useState, useEffect } from 'react';
import RetreatListItem from './RetreatListItem'; 
import * as usersAPI from '../../utilities/users-api'

export default function WishlistPage({ userId }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const getWishlist = async () => {
      try {
        const wishlistData = await usersAPI.addToWishList(userId); 
        setWishlist(wishlistData);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };
    getWishlist();
  }, [userId]);

  return (
    <div>
      <h1>Wishlist</h1>
      {wishlist.map((retreat) => (
        <RetreatListItem key={retreat._id} retreat={retreat} />
      ))}
    </div>
  );
}
