"use client"
import { useState, useEffect } from 'react'
import { IPitchMap } from "@/common/types"
import { pitchMaps, getMajorTriadPitchMaps, pitchMapsAreSimilar } from "@/common/utils/music-theory"
import PitchMapPicker from "@/frontend/components/PitchMapPicker"
import PitchMapResults from '@/frontend/components/PitchMapResults'
import { getRandomElement, shuffleArray } from '@/common/utils/helpers'

interface IAnswer {
  correctAnswer: IPitchMap[],
  userAnswer: IPitchMap[]
}

const POOL_STORAGE_KEY = 'quizzes:triads:question-pool'

export default function TriadsPage() {
  const storedQuestionPool = localStorage.getItem(POOL_STORAGE_KEY)
  const initialQuestionPool = storedQuestionPool ? JSON.parse(storedQuestionPool) : [...pitchMaps]
  const initialQuestion = getRandomElement<IPitchMap>(initialQuestionPool)

  const [questionPool, setQuestionPool] = useState<IPitchMap[]>(initialQuestionPool)
  const [question, setQuestion] = useState<IPitchMap>(initialQuestion)
  const [correctAnswer, setCorrectAnswer] = useState<IPitchMap[]>(getMajorTriadPitchMaps(initialQuestion))
  const [userAnswer, setUserAnswer] = useState<IPitchMap[]>([])
  const [showResults, setShowResult] = useState<boolean>(false)
  const [randomOrderedPitchMaps, setRandomOrderedPitchMaps] = useState<IPitchMap[]>(shuffleArray<IPitchMap>(pitchMaps))

  const handleQuestionPoolChange = (pool: IPitchMap[]) => {
    localStorage.setItem(POOL_STORAGE_KEY, JSON.stringify(pool));
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
    setRandomOrderedPitchMaps(shuffleArray<IPitchMap>(pitchMaps))
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
                visible={randomOrderedPitchMaps}
                chosen={userAnswer || []}
                expected={correctAnswer || []}
              />
             ) : (
              <PitchMapPicker 
                onChange={handleUserAnswerChange} 
                visible={randomOrderedPitchMaps} 
                selected={userAnswer}
              />
            )
          }
        </p>
      </section>
      <section className="cta-row">
        <button onClick={handleSubmitClick}>submit</button>
        <button onClick={handleNextClick}>next</button>
      </section>
      <section>
        <h2>Settings</h2>
        <strong>Question Pool</strong>
        <PitchMapPicker onChange={handleQuestionPoolChange} visible={pitchMaps} selected={questionPool}/>
      </section>
    </section>
    
  )
}