import { PITCH, NOTE, ACCIDENTAL } from "@/common/enums";

export interface IPitchMap {
  pitch: PITCH;
  notes: NOTE[];
  pitchName: string;
  preferredNoteName: string;
  notesName: string[];
  keyAccidental: ACCIDENTAL;
}