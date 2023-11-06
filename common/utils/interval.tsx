import { INTERVAL, INTERVAL_QUALITY } from "../enums";
import { IInterval } from "../types";

export const interval = {
     PERFECT_UNISON: {
          name: 'Perfect Unison',
          shortName: 'P1',
          semitones: 0,
          quality: INTERVAL_QUALITY.PERFECT
     },
     MINOR_2ND: {
          name: 'Minor 2nd',
          shortName: 'm2',
          semitones: 1,
          quality: INTERVAL_QUALITY.MINOR
     },
     MAJOR_2ND: {
          name: 'Major 2nd',
          shortName: 'M2',
          semitones: 2,
          quality: INTERVAL_QUALITY.MAJOR
     },
     MINOR_3RD: {
          name: 'Minor 3rd',
          shortName: 'm3',
          semitones: 3,
          quality: INTERVAL_QUALITY.MINOR
     },
     MAJOR_3RD: {
          name: 'Major 3rd',
          shortName: 'M3',
          semitones: 4,
          quality: INTERVAL_QUALITY.MAJOR 
     },
     PERFECT_4TH: {
          name: 'Perfect 4th',
          shortName: 'P4',
          semitones: 5,
          quality: INTERVAL_QUALITY.PERFECT
     },
     TRITONE: {
          name: 'Tritone',
          shortName: 'TT',
          semitones: 6,
          quality: INTERVAL_QUALITY.AUGMENTED
     },
     PERFECT_5TH: {
          name: 'Perfect 5th',
          shortName: 'P5',
          semitones: 7,
          quality: INTERVAL_QUALITY.PERFECT
     },
     MINOR_6TH: {
          name: 'Minor 6th',
          shortName: 'm6',
          semitones: 8,
          quality: INTERVAL_QUALITY.MINOR
     },
     MAJOR_6TH: {
          name: 'Major 6th',
          shortName: 'M6',
          semitones: 9,
          quality: INTERVAL_QUALITY.MAJOR
     },
     MINOR_7TH: {
        name: 'Minor 7th',
        shortName: 'm7',
        semitones: 10,
        quality: INTERVAL_QUALITY.MINOR
    },
    MAJOR_7TH: {
        name: 'Major 7th',
        shortName: 'M7',
        semitones: 11,
        quality: INTERVAL_QUALITY.MAJOR
    },
    PERFECT_OCTAVE: {
        name: 'Perfect Octave',
        shortName: 'P8',
        semitones: 12,
        quality: INTERVAL_QUALITY.PERFECT
    } 
}

export const allIntervals: IInterval[] = [
     interval.PERFECT_UNISON,
     interval.MINOR_2ND,
     interval.MAJOR_2ND, 
     interval.MINOR_3RD, 
     interval.MAJOR_3RD,
     interval.PERFECT_4TH,
     interval.TRITONE,
     interval.PERFECT_5TH,
     interval.MINOR_6TH,
     interval.MAJOR_6TH,
     interval.MINOR_7TH,
     interval.MAJOR_7TH,
     interval.PERFECT_OCTAVE
]