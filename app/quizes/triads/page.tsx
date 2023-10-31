"use client"
import { useState } from 'react'
import { IPitchMap } from "@/common/types"
import { pitchMaps, getMajorTriadPitchMaps, pitchMapsAreSimilar } from "@/common/utils/music-theory"
import KeysPicker from "@/frontend/components/KeysPicker"
import { getRandomElement, shuffleArray } from '@/common/utils/helpers'

export default function TriadsPage() {
  const [questionPool, setQuestionPool] = useState<IPitchMap[]>([...pitchMaps])
  const [question, setQuestion] = useState<IPitchMap>(getRandomElement(pitchMaps))
  const [answer, setAnswer] = useState<IPitchMap[]>([])
  const [result, setResult] = useState<string>('')


  const handleQuestionPoolChange = (pool: IPitchMap[]) => {
    setQuestionPool(pool)
  }

  const handleAnswerChange = (answer: IPitchMap[]) => {
    setAnswer(answer)
  }

  const handleSubmitClick = () => {
   const triad = getMajorTriadPitchMaps(question)
   if(answer.length !== 3) {
    setResult("A triad has three notes, not " + answer.length)
    return
   }

   if(!pitchMapsAreSimilar(triad, answer)) {
    setResult("Answer is not the correct triad, try again.")
    return
   }

   // They got it!
    setResult("Correct! Try another")
    setQuestion(getRandomElement(pitchMaps))
    setAnswer([])
  }


  return (
    <div>
      <h1>Traids Quiz </h1>
      <div>
        <h2>Question Pool:</h2>
        <KeysPicker onChange={handleQuestionPoolChange} keys={pitchMaps}/>
        <h2>Result:</h2>
        {result}
        <h2>Question:</h2>
        {question.preferedNoteName}
        <KeysPicker onChange={handleAnswerChange} keys={pitchMaps} selectedKeys={answer}/>
        <button onClick={handleSubmitClick}>submit</button>
      </div>
    </div>
    
  )
}