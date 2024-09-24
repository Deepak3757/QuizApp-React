import Header from "./components/Header";
import Quiz from "./components/Quiz";
// Note: the correct answer of the questions in questions.js is the first answer, so we need to
// show the shuffled options
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
}
