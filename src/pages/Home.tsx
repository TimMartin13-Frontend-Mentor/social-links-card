import { FunctionComponent, useState, useEffect } from 'react';
import Card from '../components/Card';

interface ProfileData {
  name: string;
  location: string;
  quote: string;
  links: {
    github: string;
    frontendMentor: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
}

const Home: FunctionComponent = () => {
  const [profileData, setProfileData] = useState<ProfileData[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}profileData.json`)
      .then((response) => {
        if (!response.ok) {
          console.error('Response status:', response.status);
          console.error('Response URL:', response.url);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProfileData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='min-h-screen w-full bg-color-grey-900 flex items-center justify-center'>
      {profileData.map((profile, index) => (
        <Card key={index} data={profile} />
      ))}
    </div>
  );
};

export default Home;
