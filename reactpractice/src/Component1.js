import React, { useEffect,useState } from 'react';


// Component1.js 

export default function Component1() {
 
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Fetch user data from GitHub API
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
      
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      })
  }, [username]);



  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };



  return (
    <div>


    <input
      type="text"
      placeholder="Enter GitHub username"
      value={username}
      onChange={handleInputChange}
    />
    <div>GithubUsers</div>


    {

      <div>
       <img src={userData.avatar_url} style={{ width: '100px', borderRadius: '50%' }} />
       

      <p>Public Repos: {userData.public_repos}</p>
       <h4>Followers: {userData.followers}</h4>
      <h4>BIO :{userData.bio}</h4>

      </div>
    }



  </div>
  );
}


