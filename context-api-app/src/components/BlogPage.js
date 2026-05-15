import React, { useContext } from 'react';
import Post from './Post';
import UserInfoContext from '../context/UserInfoContext';

export default function BlogPage() {
  const userInfo = useContext(UserInfoContext);
  return (
    <div>
      <h1>My Blog</h1>
      <p>Welcome to my blog!</p>
      <Post username={userInfo.username} isAdmin={userInfo.isAdmin} />
    </div>
  );
}