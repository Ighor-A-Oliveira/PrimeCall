import { createContext, useContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';

const AccordionContext = createContext();

export default function Accordion({children, value, onChange, ...props}) {
    const [selected, setSelected] = useState(value);

    useEffect(() => {
        onChange?.(selected)
    }, [selected])
  return (
    <ul {...props}>
        <AccordionContext.Provider value={{selected, setSelected}}>
            {children}
        </AccordionContext.Provider>
    </ul>
  )
}

// Define PropTypes for the Accordion component
Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

// Define default values for props
Accordion.defaultProps = {
  value: null,
  onChange: () => {},
};

export function AccordionItem({children, value, trigger, ...props}){
  const {selected, setSelected} = useContext(AccordionContext);
  const open = selected == value;

  return(
    <li className="border-b" {...props}>
      <header>
        {trigger}
        
      </header>
    </li>
  )
}
