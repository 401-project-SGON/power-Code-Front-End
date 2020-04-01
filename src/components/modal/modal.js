import React ,{useState, Children} from 'react'
import {Button,Modal} from 'react-bootstrap'


const If = props => {
  return props.condition ? props.children : null;
};
function Example(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
      
      props.buttonHandle();
      if(props.closehand)setShow(false)
      // setShow(false);
    }
    const handleClose2 = () => {setShow(false);
    }

    const handleShow = () => setShow(true);
  
    return (
      <>
      <If condition={props.shape==='button'}>
      <Button variant="outline-info" onClick={handleShow}>
          {props.name}
        </Button>
      </If>
      <If condition={props.shape==='link'}>
      <p onClick={handleShow}>
          {props.name}
        </p>
      </If>
  
        <Modal show={show} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>{props.header}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              {props.button}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Example