import { TooltipComponent } from '@syncfusion/ej2-react-popups';

type NavButtonProps = {
  title: string;
  customFunc: () => void;
  color: string;
  icon: JSX.Element;
  dotColor?: string;
};

const NavButton = ({
  color,
  customFunc,
  dotColor,
  icon,
  title,
}: NavButtonProps) => {
  return (
    <TooltipComponent content={title} position='BottomCenter'>
      <button
        type='button'
        onClick={customFunc}
        style={{ color }}
        className='relative rounded-full p-3 text-xl hover:bg-light-gray'
      >
        <span
          style={{ background: dotColor }}
          className='absolute right-2 top-2 inline-flex h-2 w-2 rounded-full'
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

export default NavButton;
