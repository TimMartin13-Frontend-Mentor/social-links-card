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
        const response = await fetch('./src/data/profileData.json');
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-screen h-[960px] relative bg-color-grey-900 overflow-hidden flex flex-row items-center justify-center box-border leading-[normal] tracking-[normal]'>
      {profileData.map((profile, index) => (
        <Card key={index} data={profile} />
      ))}
    </div>
  );
};

export default Home;
