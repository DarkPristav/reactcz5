import { useRef } from "react"

import movie1 from "./img/movie1.jpg"
import movie2 from "./img/movie2.jpg"

const App = () => {
  const refLink = useRef(null)
  const refParagraph = useRef(null)
  const refImg = useRef(null)

  const differentChanges = () => {

    refLink.current.style.textDecoration = "underline"
    refParagraph.current.style.color = "blue"
    refParagraph.current.style.fontSize = "25px"
    refParagraph.current.textContent = "Lorem sdfs dfgsdgf sdfgsdf asdfgasdgf"

    const currentSrc = refImg.current.src;
    const movie1Src = new URL(movie1, window.location).href;
    
    if (currentSrc === movie1Src) {
    refImg.current.src = movie2;
    } else {
    refImg.current.src = movie1;
    }

    if (refLink.current.style.color === "orange") {
      refLink.current.style.color = "black"
    } else {
      refLink.current.style.color = "orange"
    }

    if (refLink.current.textContent === "Už umím useRef") {
      refLink.current.textContent = "Učím se useRef"
    } else {
      refLink.current.textContent = "Už umím useRef"
    }
  }
  return <section>
    <button onClick={differentChanges}>Klikni</button>
    <img ref={refImg} src={movie1} alt="movie" />
    <h1 ref={refLink}>Učím se useRef</h1>
    <p ref={refParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perferendis nobis repudiandae quos. Doloribus fugit, quae rerum perspiciatis cumque voluptate enim voluptatum veniam provident cupiditate placeat magnam id est culpa.</p>
  </section>
}

export default App