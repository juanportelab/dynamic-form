import { Button, CardGroup, Modal } from "react-bootstrap";
import CardResume from "./CardResume/CardResume";
import CardResumeHobbies from "./CardResume/CardResumeHobbies";

export default function resume({ showModal, setStep, setModal }) {

  const favouriteFruit = localStorage.getItem("fruitName");
  const fruitIcon = localStorage.getItem("iconFruit");
  const hobbiesStorage = JSON.parse(localStorage.getItem("hobbies"));
  const addittionalHobbie = localStorage.getItem("adittionalHobbie");
  const comment = localStorage.getItem("comment");

  const clearForm = () => {
    localStorage.clear();
    setModal(false);
    setStep(1);
  }

  return (
    <Modal 
        show={showModal} 
        size="lg" 
        aria-labelledby="contained-modal-title-vcenter" 
        centered
        onHide={clearForm}>
           <Modal.Header closeButton>
            <Modal.Title>Congratulations!</Modal.Title>            
           </Modal.Header>
           <Modal.Body>
            <h4>Here you are your resume</h4>
            <CardGroup className="mt-4">
                {favouriteFruit && fruitIcon && (
                    <CardResume 
                        title={fruitIcon} 
                        subtitle="Your favourite fruit is" 
                        text={favouriteFruit}>
                    </CardResume>
                )}
                {hobbiesStorage && (
                    <CardResumeHobbies 
                        subtitle="Your hobbies" 
                        text={addittionalHobbie} 
                        hobbiesStorage={hobbiesStorage}>
                    </CardResumeHobbies>
                )}
                {comment && (
                    <CardResume subtittle="And for the las this is the comment" text={comment}></CardResume>
                )}
            </CardGroup>
           </Modal.Body>
           <Modal.Footer>
            <Button 
                onClick={clearForm} 
                variant="outline-dark">
                Exit and clear form
            </Button>
           </Modal.Footer>
        </Modal>
  );
}
