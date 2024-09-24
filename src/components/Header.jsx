import quizLogo from '../assets/quiz-logo.png';
export default function Header(){
    return <header>
        <img src={quizLogo} alt="Sorry Image doesn't exist!"/>
        <h1>React Quiz</h1>
    </header>
}