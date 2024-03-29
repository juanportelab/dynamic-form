import { Card } from "react-bootstrap";
import './CardResume';

export default function CardResumeHobbies(props) {
  
    const { subtitle, hobbiesStorage, text } = props;
  
    return (
    <div>
        <Card className="text-center p-2 card-resume">
            <Card.Body>
                <Card.Subtitle>
                    <b>{subtitle}</b>
                </Card.Subtitle>
                <ul>
                    {hobbiesStorage.map((hobbies, index) => (
                        <li key={index}>{hobbies.label}</li>
                    ))}
                </ul>
            </Card.Body>
        </Card>
        {text && (
            <Card className="text-center p-2 card-resume">
                <Card.Body>
                    <Card.Subtitle><b>Your addittional hobbie is:</b></Card.Subtitle>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        )}
    </div>
  )
}
