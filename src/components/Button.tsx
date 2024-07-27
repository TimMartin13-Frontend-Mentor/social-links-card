import { FunctionComponent } from 'react';

interface ButtonProps {
  className?: string;
  link: string;
  text: string;
}

const Button: FunctionComponent<ButtonProps> = ({ className, link, text }) => {
  return (
    <a
      className={`cursor-pointer [border:none] py-spacing-150 px-5 bg-color-grey-700 self-stretch font-text-preset-2-bold text-color-white rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-color-green hover:text-color-grey-900 no-underline ${className}`}
      href={link}
      target='_blank'
    >
      <b className='relative text-sm leading-[150%] inline-block text-center min-w-[115px]'>
        {text}
      </b>
    </a>
  );
};

export default Button;
