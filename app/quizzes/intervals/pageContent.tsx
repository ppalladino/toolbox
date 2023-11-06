"use client"
import { useState, useEffect } from 'react'
import { IPitchMap, IInterval } from "@/common/types"
import { chromaticPitches, getMajorTriadPitchMaps, pitchMapsAreSimilar, addIntervalToPitchMap, PITCH_MAP_DISPLAY_MODE } from "@/common/utils/pitch-map"
import { allIntervals } from '@/common/utils/interval'
import PitchMapPicker from "@/frontend/components/PitchMapPicker"
import PitchMapResults from '@/frontend/components/PitchMapResults'
import IntervalPicker from '@/frontend/components/IntervalPicker'
import { getRandomElement, shuffleArray } from '@/common/utils/helpers'

interface IAnswer {
  correctAnswer: IPitchMap[],
  userAnswer: IPitchMap[]
}
  
const ROOT_PITCH_POOL_STORAGE_KEY = 'quizzes:intervals:root-pitch-pool'
const INTERVAL_POOL_STORAGE_KEY = 'quizzes:intervals:interval-pool'


export default function IntervalsPageContent() {
  const storedRootPitchPool = window.localStorage.getItem(ROOT_PITCH_POOL_STORAGE_KEY)
  let initialRootPitchPool = storedRootPitchPool ? JSON.parse(storedRootPitchPool) : []
  initialRootPitchPool = initialRootPitchPool && initialRootPitchPool.length > 0 ? initialRootPitchPool : [...chromaticPitches]
  const [rootPitchPool, setRootPitchPool] = useState<IPitchMap[]>(initialRootPitchPool)
  const initialRootPitch = getRandomElement<IPitchMap>(initialRootPitchPool)
  const [rootPitchQuestion, setRootPitchQuestion] = useState<IPitchMap>(initialRootPitch)
 
  const storedIntervalPool = window.localStorage.getItem(INTERVAL_POOL_STORAGE_KEY)
  let initialIntervalPool = storedIntervalPool ? JSON.parse(storedIntervalPool) : []
  initialIntervalPool = initialIntervalPool && initialIntervalPool.length > 0 ? initialIntervalPool : [...allIntervals]
  const [intervalPool, setIntervalPool] = useState<IInterval[]>(initialIntervalPool)
  const initialInterval = getRandomElement<IInterval>(initialIntervalPool)
  const [intervalQuestion, setIntervalQuestion] = useState<IInterval>(initialInterval)

  const [correctAnswer, setCorrectAnswer] = useState<IPitchMap>(addIntervalToPitchMap(initialRootPitch, intervalQuestion.semitones))
  const [userAnswer, setUserAnswer] = useState<IPitchMap>()
  const [showResults, setShowResult] = useState<boolean>(false)
  const [randomOrderedPitchMaps, setRandomOrderedPitchMaps] = useState<IPitchMap[]>(shuffleArray<IPitchMap>(chromaticPitches))
  const [numCorrect, setNumCorrect] = useState<number>(0)
  const [answerPickerDisplayMode, setAnswerPickerDisplayMode] = useState<PITCH_MAP_DISPLAY_MODE>(PITCH_MAP_DISPLAY_MODE.FLATTED_NOTE_NAME)


  const handleQuestionPoolChange = (pool: IPitchMap[]) => {
    localStorage.setItem(ROOT_PITCH_POOL_STORAGE_KEY, JSON.stringify(pool));
    setRootPitchPool(pool)
  }

  const handleIntervalPoolChange = (pool: IInterval[]) => {
    localStorage.setItem(INTERVAL_POOL_STORAGE_KEY, JSON.stringify(pool));
    setIntervalPool(pool)
  }

  const handleUserAnswerChange = (answer: IPitchMap[]) => {
    setUserAnswer(answer[0])
  }

  const handleSubmitClick = () => {
    setNumCorrect(numCorrect + (correctAnswer.pitch === userAnswer?.pitch ? 1 : 0))
    setShowResult(true)
  }

  const handleNextClick = () => {
    setRandomOrderedPitchMaps(shuffleArray<IPitchMap>(chromaticPitches))
    const nextRootPitchQuestion = getRandomElement(rootPitchPool)
    setRootPitchQuestion(nextRootPitchQuestion)

    const nextIntervalQuestion = getRandomElement(intervalPool)
    setIntervalQuestion(nextIntervalQuestion)
    
    const nextCorrectAnswer = addIntervalToPitchMap(nextRootPitchQuestion, nextIntervalQuestion.semitones)
    setCorrectAnswer(nextCorrectAnswer)

    const nextAnswerPickerDisplayMode = answerPickerDisplayMode === PITCH_MAP_DISPLAY_MODE.SHARPED_NOTE_NAME 
      ? PITCH_MAP_DISPLAY_MODE.FLATTED_NOTE_NAME : PITCH_MAP_DISPLAY_MODE.SHARPED_NOTE_NAME
    setAnswerPickerDisplayMode(nextAnswerPickerDisplayMode)
    setUserAnswer(undefined)
    setShowResult(false)
  }

  return (
    <section className='page-body'>
      <header>
        <h1>Intervals Quiz</h1>
      </header> 
      <section>
        <p>Number correct: <strong><em>{numCorrect}</em></strong></p>
        <p>Select the pitch <strong><em>{intervalQuestion.shortName}</em></strong> up from <strong><em>{rootPitchQuestion.preferredNoteName}</em></strong>.</p>
        <p>
          {
            showResults ? (
              <PitchMapResults
                keyRootPitchMap={rootPitchQuestion}
                displayMode={answerPickerDisplayMode} 
                visible={randomOrderedPitchMaps}
                chosen={userAnswer ? [userAnswer] : []}
                expected={correctAnswer ? [correctAnswer] : []}
              />
             ) : (
              <PitchMapPicker 
                keyRootPitchMap={rootPitchQuestion}
                displayMode={answerPickerDisplayMode}
                onChange={handleUserAnswerChange} 
                visible={randomOrderedPitchMaps} 
                selected={userAnswer ? [userAnswer] : []}
              />
            )
          }
        </p>
      </section>
      <section className="cta-row">
        <button onClick={handleSubmitClick} disabled={!!showResults || !userAnswer}>submit</button>
        <button onClick={handleNextClick} disabled={!showResults}>next</button>
      </section>
      <section className='push-bottom'>
        <h2>Settings</h2>
        <p>root pitch question bank</p>
        <PitchMapPicker onChange={handleQuestionPoolChange} visible={chromaticPitches} selected={rootPitchPool}/>
        <p>interval question bank</p>
        <IntervalPicker onChange={handleIntervalPoolChange} visible={allIntervals} selected={intervalPool}/>
      </section>
    </section>
    
  )
}