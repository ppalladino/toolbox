export enum NOTE {
    C = 0,
    C$ = 1,
    Db = 2,
    D = 3,
    D$ = 4,
    Eb = 5,
    E = 6,
    F = 7,
    F$ = 8,
    Gb = 9,
    G = 10,
    G$ = 11,
    Ab = 12,
    A = 13,
    A$ = 14,
    Bb = 15,
    B = 16
  }

  export enum PITCH {
    C = 0,
    C$_Db = 1,
    D = 2,
    D$_Eb = 3,
    E = 4,
    F = 5,
    F$_Gb = 6,
    G = 7,
    G$_Ab = 8,
    A = 9,
    A$_Bb = 10,
    B = 11
  }

  export enum INTERVAL {
    PERFECT_UNISON = 0,
    MINOR_2ND = 1,
    MAJOR_2ND = 2,
    MINOR_3RD = 3,
    MAJOR_3RD = 4,
    PERFECT_4TH = 5,
    TRITONE = 6,
    PERFECT_5TH = 7,
    MINOR_6TH = 8,
    MAJOR_6TH = 9,
    MINOR_7TH = 10,
    MAJOR_7TH = 11,
    PERFECT_OCTAVE = 12
  }

  export enum INTERVAL_QUALITY {
    MAJOR,
    MINOR,
    PERFECT,
    AUGMENTED
  }

  export enum CHORD_QUALITY {
    MAJOR,
    MINOR,
    AUGMENTED,
    DIMINISHED
  }

  export enum SCALE_QUALITY {
    MAJOR,
    MINOR, // Natural Minor or Aeolian
    DORIAN, 
    PHRYGIAN, 
    LYDIAN, 
    MIXOLYDIAN, 
    LOCRIAN,
    HARMONIC_MINOR, // Natural Minor with raised 7th
    MELODIC_MINOR // Asc: Natural Minor with raised 6th and 7th, Desc: Natural Minor
  }

  export enum ACCIDENTAL {
    FLAT = 0,
    NATURAL = 1,
    SHARP = 2
  }