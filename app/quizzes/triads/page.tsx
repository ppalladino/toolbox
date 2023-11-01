"use client"
import { useState } from 'react'
import { IPitchMap } from "@/common/types"
import { pitchMaps, getMajorTriadPitchMaps, pitchMapsAreSimilar } from "@/common/utils/music-theory"
import PitchMapPicker from "@/frontend/components/PitchMapPicker"
import PitchMapResults from '@/frontend/components/PitchMapResults'
import { getRandomElement, shuffleArray } from '@/common/utils/helpers'

interface IAnswer {
  correctAnswer: IPitchMap[],
  userAnswer: IPitchMap[]
}

export default function TriadsPage() {
  const [questionPool, setQuestionPool] = useState<IPitchMap[]>([...pitchMaps])
  const [question, setQuestion] = useState<IPitchMap>(getRandomElement(pitchMaps))
  const [correctAnswer, setCorrectAnswer] = useState<IPitchMap[]>([])
  const [userAnswer, setUserAnswer] = useState<IPitchMap[]>([])
  const [showResults, setShowResult] = useState<boolean>(false)


  const handleQuestionPoolChange = (pool: IPitchMap[]) => {
    setQuestionPool(pool)
  }

  const handleUserAnswerChange = (answer: IPitchMap[]) => {
    console.log({answer})
    setUserAnswer(answer)
  }

  const handleSubmitClick = () => {
    setShowResult(true)
  }

  const handleNextClick = () => {
    const questionRootPitch = getRandomElement(questionPool)
    const questionTriad = getMajorTriadPitchMaps(questionRootPitch)
    setQuestion(questionRootPitch)
    setUserAnswer([])
    setCorrectAnswer(questionTriad)
    setShowResult(false)
  }

  return (
    <section>
      <header>
        <h1>Triads Quiz</h1>
      </header> 
      <section>
        <p>Select the notes in a <strong>{question.preferedNoteName} major</strong> triad.</p>
        <p>
          {
            showResults ? (
              <PitchMapResults 
                visible={pitchMaps}
                chosen={userAnswer || []}
                expected={correctAnswer || []}
              />
             ) : (
              <PitchMapPicker 
                onChange={handleUserAnswerChange} 
                visible={pitchMaps} 
                selected={userAnswer}
              />
            )
          }
        </p>
      </section>
      <section>
        <button onClick={handleSubmitClick}>submit</button>
        <button onClick={handleNextClick}>next</button>
      </section>
      <section>
        <h2>Settings</h2>
        <strong>Question Pool</strong>
        {/* <PitchMapPicker onChange={handleQuestionPoolChange} visible={pitchMaps}/> */}
      </section>
    </section>
    
  )
}