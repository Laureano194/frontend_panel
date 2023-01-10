function Tabs({ children }) {
    const childrenArray = React.Children.toArray(children);
    const [current, setCurrent] = React.useState(childrenArray[0].key);
  
    const newChildren = childrenArray.map((child) =>
      React.cloneElement(child, { selected: child?.key === current }),
    );
  
    return (
      <nav>
        {childrenArray.map((child) => (
          <div
            role="link"
            tabIndex={0}
            onClick={() => setCurrent(child?.key)}
            key={child?.key}
            className={`${style.default} 
               ${current === child?.key ? style.selected : style.notSelected}`}
          >
            {child?.props.title}
          </div>
        ))}
        <section>{newChildren}</section>
      </nav>
    );
  }
  
  function Tab({ children, selected }) {
    return (
      <div hidden={!selected} className="mt-4">
        {children}
      </div>
    );
  }