"use client"
import { useState, useEffect } from 'react'
import { IPitchMap } from "@/common/types"
import { pitchMaps, getMajorTriadPitchMaps, pitchMapsAreSimilar, PITCH_MAP_DISPLAY_MODE } from "@/common/utils/music-theory"
import PitchMapPicker from "@/frontend/components/PitchMapPicker"
import PitchMapResults from '@/frontend/components/PitchMapResults'
import { getRandomElement, shuffleArray } from '@/common/utils/helpers'

interface IAnswer {
  correctAnswer: IPitchMap[],
  userAnswer: IPitchMap[]
}

const POOL_STORAGE_KEY = 'quizzes:triads:question-pool'

export default function TriadsPage() {
  const storedQuestionPool = typeof window !== "undefined" ? window.localStorage.getItem(POOL_STORAGE_KEY) : JSON.stringify([...pitchMaps])
  let initialQuestionPool = storedQuestionPool ? JSON.parse(storedQuestionPool) : [...pitchMaps]
  initialQuestionPool = initialQuestionPool && initialQuestionPool.length > 0 ? initialQuestionPool : [...pitchMaps]
 
  const initialQuestion = getRandomElement<IPitchMap>(initialQuestionPool)

  const [questionPool, setQuestionPool] = useState<IPitchMap[]>(initialQuestionPool)
  const [question, setQuestion] = useState<IPitchMap>(initialQuestion)
  const [correctAnswer, setCorrectAnswer] = useState<IPitchMap[]>(getMajorTriadPitchMaps(initialQuestion))
  const [userAnswer, setUserAnswer] = useState<IPitchMap[]>([])
  const [showResults, setShowResult] = useState<boolean>(false)
  const [randomOrderedPitchMaps, setRandomOrderedPitchMaps] = useState<IPitchMap[]>(shuffleArray<IPitchMap>(pitchMaps))
  const [numCorrect, setNumCorrect] = useState<number>(0)


  const handleQuestionPoolChange = (pool: IPitchMap[]) => {
    if(typeof window !== "undefined") {
      localStorage.setItem(POOL_STORAGE_KEY, JSON.stringify(pool));
    }
    setQuestionPool(pool)
  }

  const handleUserAnswerChange = (answer: IPitchMap[]) => {
    setUserAnswer(answer)
  }

  const handleSubmitClick = () => {
    setNumCorrect(numCorrect + (pitchMapsAreSimilar(correctAnswer, userAnswer) ? 1 : 0))
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
    <section className='page-body'>
      <header>
        <h1>Triads Quiz</h1>
      </header> 
      <section>
        <p>Number correct: <strong><em>{numCorrect}</em></strong></p>
        <p>Select the notes in a <strong><em>{question.preferredNoteName} major</em></strong> triad.</p>
        <p>
          {
            showResults ? (
              <PitchMapResults
                keyRootPitchMap={question}
                displayMode={PITCH_MAP_DISPLAY_MODE.KEY_CONTEXTED_NOTE_NAME} 
                visible={randomOrderedPitchMaps}
                chosen={userAnswer || []}
                expected={correctAnswer || []}
              />
             ) : (
              <PitchMapPicker 
                keyRootPitchMap={question}
                displayMode={PITCH_MAP_DISPLAY_MODE.KEY_CONTEXTED_NOTE_NAME}
                onChange={handleUserAnswerChange} 
                visible={randomOrderedPitchMaps} 
                selected={userAnswer}
              />
            )
          }
        </p>
      </section>
      <section className="cta-row">
        <button onClick={handleSubmitClick} disabled={!!showResults || !(userAnswer.length === 3)}>submit</button>
        <button onClick={handleNextClick} disabled={!showResults}>next</button>
      </section>
      <section className='push-bottom'>
        <h2>Settings</h2>
        <p><strong>Triad Bank</strong></p>
        
        <PitchMapPicker onChange={handleQuestionPoolChange} visible={pitchMaps} selected={questionPool}/>
      </section>
    </section>
    
  )
}