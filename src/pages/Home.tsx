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
    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BASE_URL || '';
        const response = await fetch(`${baseUrl}/data/profileData.json`);
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
