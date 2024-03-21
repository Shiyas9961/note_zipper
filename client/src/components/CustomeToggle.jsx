import { useAccordionButton } from "react-bootstrap";


export default function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <span
        onClick={decoratedOnClick}
      >
        {children}
      </span>
    );
  }