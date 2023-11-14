import { NOTE, PITCH, INTERVAL, ACCIDENTAL } from '@/common/enums'
import { IPitchMap } from '@/common/types'

export enum PITCH_MAP_DISPLAY_MODE {
  PITCH_NAME,
  PREFERRED_NOTE_NAME,
  FLATTED_NOTE_NAME,
  SHARPED_NOTE_NAME,
  KEY_CONTEXTED_NOTE_NAME
}

export const pitchMapDisplayModes = [
  {
    abbrName: 'pref',
    mode: PITCH_MAP_DISPLAY_MODE.PREFERRED_NOTE_NAME
  },
  {
    abbrName: '#/b',
    mode: PITCH_MAP_DISPLAY_MODE.PITCH_NAME
  },
  {
    abbrName: 'b',
    mode: PITCH_MAP_DISPLAY_MODE.FLATTED_NOTE_NAME
  },
  {
    abbrName: '#',
    mode: PITCH_MAP_DISPLAY_MODE.SHARPED_NOTE_NAME
  },
  {
    abbrName: 'key',
    mode: PITCH_MAP_DISPLAY_MODE.KEY_CONTEXTED_NOTE_NAME
  }
]

export const pitches = {
    C: {
      pitch: PITCH.C,
      notes: [NOTE.C],
      pitchName: 'C',
      preferredNoteName: 'C',
      notesName: ['C'],
      keyAccidental: ACCIDENTAL.NATURAL,
      backgroundColor: '#137fe0ff'
    },
    C$_Db: {
      pitch: PITCH.C$_Db,
      notes: [NOTE.C$, NOTE.Db],
      pitchName: 'C#/Db',
      preferredNoteName: 'Db',
      notesName: ['C#', 'Db'],
      keyAccidental: ACCIDENTAL.FLAT,
      backgroundColor: '#cd9fe8ff' 
    },
    D: {
      pitch: PITCH.D,
      notes: [NOTE.D],
      pitchName: 'D',
      preferredNoteName: 'D',
      notesName: ['D'],
      keyAccidental: ACCIDENTAL.SHARP,
      backgroundColor: '#810ccfff' 
    },
    D$_Eb: {
      pitch: PITCH.D$_Eb,
      notes: [NOTE.D$, NOTE.Eb],
      pitchName: 'D#/Eb',
      preferredNoteName: 'Eb',
      notesName: ['D#', 'Eb'],
      keyAccidental: ACCIDENTAL.FLAT,
      backgroundColor: '#b7b7b7ff' 
    },
    E: {
      pitch: PITCH.E,
      notes: [NOTE.E],
      pitchName: 'E',
      preferredNoteName: 'E',
      notesName: ['E'],
      keyAccidental: ACCIDENTAL.SHARP,
      backgroundColor: '#434343ff' 
    },
    F: {
      pitch: PITCH.F,
      notes: [NOTE.F],
      pitchName: 'F',
      preferredNoteName: 'F',
      notesName: ['F'],
      keyAccidental: ACCIDENTAL.FLAT,
      backgroundColor: '#783f04ff' 
    },
    F$_Gb: {
      pitch: PITCH.F$_Gb,
      notes: [NOTE.F$, NOTE.Gb],
      pitchName: 'F#/Gb',
      preferredNoteName: 'Gb',
      notesName: ['F#', 'Gb'],
      keyAccidental: ACCIDENTAL.FLAT,
      backgroundColor: '#ffd1d1ff'     
    },
    G: {
      pitch: PITCH.G,
      notes: [NOTE.G],
      pitchName: 'G',
      preferredNoteName: 'G',
      notesName: ['G'],
      keyAccidental: ACCIDENTAL.SHARP,
      backgroundColor: '#ff4600ff' 
    },
    G$_Ab: {
      pitch: PITCH.G$_Ab,
      notes: [NOTE.G$, NOTE.Ab],
      pitchName: 'G#/Ab',
      preferredNoteName: 'Ab',
      notesName: ['G#', 'Ab'],
      keyAccidental: ACCIDENTAL.FLAT,
      backgroundColor: '#fefbcdff' 
    },
    A: {
      pitch: PITCH.A,
      notes: [NOTE.A],
      pitchName: 'A',
      preferredNoteName: 'A',
      notesName: ['A'],
      keyAccidental: ACCIDENTAL.SHARP,
      backgroundColor: '#fceb08ff' 
    },
    A$_Bb: {
      pitch: PITCH.A$_Bb,
      notes: [NOTE.A$, NOTE.Bb],
      pitchName: 'A#/Bb',
      preferredNoteName: 'Bb',
      notesName: ['A#', 'Bb'],
      keyAccidental: ACCIDENTAL.FLAT,
      backgroundColor: '#cdeba7ff' 
    },
    B: {
      pitch: PITCH.B,
      notes: [NOTE.B],
      pitchName: 'B',
      preferredNoteName: 'B',
      notesName: ['B'],
      keyAccidental: ACCIDENTAL.SHARP,
      backgroundColor: '#3da21fff' 
    } 
}

export const chromaticPitches = [pitches.C, pitches.C$_Db, pitches.D, pitches.D$_Eb, pitches.E, pitches.F, pitches.F$_Gb, pitches.G, pitches.G$_Ab, pitches.A, pitches.A$_Bb, pitches.B]
export const circleOfFifthsPitches = [pitches.C, pitches.G, pitches.D, pitches.A, pitches.E, pitches.B, pitches.F$_Gb, pitches.C$_Db, pitches.G$_Ab, pitches.D$_Eb, pitches.A$_Bb, pitches.F]

export const getPitchMapDisplay = (mode: PITCH_MAP_DISPLAY_MODE, pitchMap: IPitchMap, keyRootPitchMap?: IPitchMap):string => {
  switch (mode) {
    case PITCH_MAP_DISPLAY_MODE.PITCH_NAME:
      return pitchMap.pitchName
    case PITCH_MAP_DISPLAY_MODE.PREFERRED_NOTE_NAME:
      return pitchMap.preferredNoteName
    case PITCH_MAP_DISPLAY_MODE.KEY_CONTEXTED_NOTE_NAME:
      if(keyRootPitchMap) {
        return getKeyContextedNoteName(keyRootPitchMap, pitchMap)
      }
      return pitchMap.preferredNoteName
    case PITCH_MAP_DISPLAY_MODE.FLATTED_NOTE_NAME:
      return pitchMap.notesName.length > 1 ? pitchMap.notesName[1] : pitchMap.notesName[0]
    case PITCH_MAP_DISPLAY_MODE.SHARPED_NOTE_NAME:
      return pitchMap.notesName[0]
    default:
      return pitchMap.preferredNoteName
  }
}

export const pitchMapsIncludes = (haystack: IPitchMap[], needle: IPitchMap):boolean => !!haystack.find(h => h.pitch === needle.pitch)
export const removePitchMap = (pitchMaps: IPitchMap[], pitchMap: IPitchMap):IPitchMap[] => pitchMaps.filter(p => p.pitch !== pitchMap.pitch)
export const pushPitchMap = (pitchMaps: IPitchMap[], pitchMap: IPitchMap):IPitchMap[] => pitchMapsIncludes(pitchMaps, pitchMap) ? pitchMaps : [...pitchMaps, ...[pitchMap]]
export const togglePitchMap = (pitchMaps: IPitchMap[], pitchMap: IPitchMap):IPitchMap[] => pitchMapsIncludes(pitchMaps, pitchMap) ? removePitchMap(pitchMaps, pitchMap) : pushPitchMap(pitchMaps, pitchMap)
export const pitchMapsAreSimilar = (pitchMapsA: IPitchMap[], pitchMapsB: IPitchMap[]):boolean => {
  // returns true if same length and have same elements (even if out of order), returns false else
  if(pitchMapsA.length !== pitchMapsB.length) {
    return false
  }

  let sortedA = pitchMapsA.map(pm => pm.pitch).sort()
  let sortedB = pitchMapsB.map(pm => pm.pitch).sort()

  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] !== sortedB[i]) {
      return false; // If any elements are different, the arrays are not the same.
    }
  }
  return true
}

export const getKeyContextedNoteName = (keyRootPitchMap: IPitchMap, pitchMap: IPitchMap): string => {
  if(pitchMap.notesName.length > 1) {
    return keyRootPitchMap.keyAccidental === ACCIDENTAL.FLAT ? pitchMap.notesName[1] : pitchMap.notesName[0]
  }
  return pitchMap.notesName[0]
}

// export const getPitchFromNote = (note: NOTE): PITCH | undefined => pitchMaps.find(pitchMap => pitchMap.notes.includes(note))?.pitch

export const addIntervalToPitchMap = (startingPitchMap: IPitchMap, semitones: number): IPitchMap => {
  const startingNoteIndex = chromaticPitches.map(pitchMap => pitchMap.pitch).indexOf(startingPitchMap.pitch)
  // use modulo to wrap around the array
  const intervalIndex = (startingNoteIndex + semitones) % chromaticPitches.length
  return chromaticPitches[intervalIndex]
}

const getChordPitchMaps = (intervals: INTERVAL[]) => (rootPitchMap: IPitchMap): IPitchMap[] => {
  return intervals.map(i => addIntervalToPitchMap(rootPitchMap, i))
}
export const getMajorTriadPitchMaps = getChordPitchMaps([INTERVAL.PERFECT_UNISON, INTERVAL.MAJOR_3RD, INTERVAL.PERFECT_5TH])
export const getMinorTriadPitchMaps = getChordPitchMaps([INTERVAL.PERFECT_UNISON, INTERVAL.MINOR_3RD, INTERVAL.PERFECT_5TH])

export const allMajorTriadPitchMaps = chromaticPitches.map(pitchMap => getMajorTriadPitchMaps(pitchMap))

