import { createContext, useContext, useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types';
import { FaChevronDown } from "react-icons/fa6";


const AccordionContext = createContext();

export default function Accordion({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
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

export function AccordionItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordionContext)
  const open = selected === value

  const ref = useRef(null)

  return (
    <li className="text-white py-2" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-bold"
      >
        {trigger}
        <FaChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 px-8" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}

// Define PropTypes for the Accordion component
AccordionItem.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any,
  trigger: PropTypes.any,
};

// Define default values for props
AccordionItem.defaultProps = {
  value: null,
  onChange: () => {},
};
