import { PITCH, NOTE, ACCIDENTAL } from "@/common/enums";

export interface IPitchMap {
  pitch: PITCH;
  notes: NOTE[];
  pitchName: string;
  preferedNoteName: string;
  notesName: string[];
  keyAccidental: ACCIDENTAL;
}