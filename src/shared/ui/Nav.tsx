import { Link, LinkProps } from 'react-router-dom';
import cn from '@utils/cn';
import { HTMLAttributes } from 'react';

function Nav({ ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <nav
      {...props}
      className={cn(
        'sticky top-0 h-[100px] w-full bg-white/80 backdrop-blur-md',
        props.className,
      )}
    >
      <ul className='flex h-full items-center justify-start space-x-4'>
        {props.children}
      </ul>
    </nav>
  );
}

function ItemContainer({ ...props }: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      {...props}
      className={cn(
        'flex h-full items-center justify-start space-x-4',
        props.className,
      )}
    >
      {props.children}
    </ul>
  );
}

function Item({
  ...props
}: LinkProps & React.RefAttributes<HTMLAnchorElement>) {
  return (
    <li>
      <Link
        {...props}
        className={cn(
          'flex w-fit items-center rounded-3xl bg-secondary px-4 py-2.5 text-center text-2xl text-white mobile:text-base',
          props.className,
        )}
      >
        {props.children}
      </Link>
    </li>
  );
}

Nav.Link = Item;
Nav.Container = ItemContainer;

export default Nav;
