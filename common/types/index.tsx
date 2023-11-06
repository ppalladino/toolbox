import { PITCH, NOTE, ACCIDENTAL, INTERVAL_QUALITY } from "@/common/enums";

export interface IPitchMap {
  pitch: PITCH;
  notes: NOTE[];
  pitchName: string;
  preferredNoteName: string;
  notesName: string[];
  keyAccidental: ACCIDENTAL;
  backgroundColor: string;
}

export interface IInterval {
  name: string;
  shortName: string;
  semitones: number;
  quality: INTERVAL_QUALITY
}