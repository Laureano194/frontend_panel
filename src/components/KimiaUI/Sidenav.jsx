import React from 'react';
import { Link } from 'react-router-dom'


const style = {
  item: `flex justify-start cursor-pointer font-medium hover:text-gray-400 ml-4 mb-10`,
  sidenav: `h-screen w-full left-0 w-7/12 md:w-60 bg-gray-800 text-white overflow-x-hidden`,
};

export const  Sidenav = ({ children }) => {
  const ref = React.useRef(null);
  return (
    <aside ref={ref} className={style.sidenav} 
    style={{marginTop:"-64px"}}
    >
      <div className="mt-28">{children}</div>
    </aside>
  );
}

export const SidenavItem = ({ children, href }) => {
    return(
      <Link to={href} className={style.item}>
        {children}
      </Link>
      )
}