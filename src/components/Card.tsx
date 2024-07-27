import { FunctionComponent } from 'react';
import Button from './Button';
import profilePic from '../assets/profilepic@2x.png';

interface CardProps {
  data: {
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
  };
  className?: string;
  key: number;
}

const Card: FunctionComponent<CardProps> = ({ data, className = '' }) => {
  return (
    <div
      className={`w-96 rounded-xl bg-color-grey-800 flex flex-col items-center justify-start p-10 box-border gap-[24px] max-w-[384px] text-center text-5xl text-color-white font-text-preset-2-bold mq320:max-w-full mq600:p-[24px] mq600:box-border ${className}`}
    >
      <img
        className='w-[88px] h-[88px] relative rounded-980xl overflow-hidden shrink-0 object-contain'
        loading='lazy'
        alt=''
        src={profilePic}
      />
      <div className='self-stretch flex flex-col items-center justify-start gap-[4px]'>
        <h2 className='m-0 self-stretch relative text-inherit leading-[150%] font-semibold font-inherit mq320:text-lgi mq320:leading-[29px]'>
          {data.name}
        </h2>
        <b className='self-stretch relative text-sm leading-[150%] text-color-green'>
          {data.location}
        </b>
      </div>
      <blockquote className='m-0 self-stretch relative text-sm leading-[150%]'>
        {`"${data.quote}"`}
      </blockquote>
      <div className='self-stretch flex flex-col items-center justify-start gap-[16px]'>
        <Button link={data.links.github} text={'GitHub'} />
        <Button link={data.links.frontendMentor} text={'Frontend Mentor'} />
        <Button link={data.links.linkedin} text={'LinkedIn'} />
        <Button link={data.links.twitter} text={'Twitter'} />
        <Button link={data.links.instagram} text={'Instagram'} />
      </div>
    </div>
  );
};

export default Card;
