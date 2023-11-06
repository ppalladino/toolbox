import { circleOfFifthsPitches } from "@/common/utils/pitch-map"
import { IPitchMap } from "@/common/types";
import { PITCH } from "@/common/enums";

export enum SEGMENT_DISPLAY {
    HIDE,
    SHOW
}

export interface ICircleOfFifthsSegment {
    pitch: PITCH;
    display: SEGMENT_DISPLAY;
  }

const majorSegments = [
    {
        pitchMap: PITCH.C,
        display: SEGMENT_DISPLAY.SHOW
    }
]



interface CircleOfFifthsSegmentProps {
    pitchMap: IPitchMap,
    svgData: string,
    // onChange: (selected:IPitchMap[]) => void; 
    // visible: IPitchMap[]; 
    // selected: IPitchMap[]; 
    // displayMode?: PITCH_MAP_DISPLAY_MODE;
}

export default function CircleOfFifthsSegment({
    pitchMap,
    svgData
    // onChange, 
    // visible, 
    // selected,
    // displayMode = PITCH_MAP_DISPLAY_MODE.PREFERRED_NOTE_NAME, 
    // keyRootPitchMap
}: CircleOfFifthsSegmentProps) {
    // if(displayMode === PITCH_MAP_DISPLAY_MODE.KEY_CONTEXTED_NOTE_NAME && !keyRootPitchMap) {
    //     throw new Error('keyRootPitchMap is required when displayMode is PITCH_MAP_DISPLAY_MODE.KEY_CONTEXTED_NOTE_NAME')
    // }

    // const handleClick = (pitchMap: IPitchMap) => () => {
    //     onChange(togglePitchMap(selected, pitchMap))
    // }

    // const getKeyClass = (pitchMap: IPitchMap):string => {
    //     const isSelected = pitchMapsIncludes(selected, pitchMap)
    //     if(isSelected) {
    //         return 'selected'
    //     } else {
    //         return ''
    //     }
    // }

    return (
        <path fill={pitchMap.backgroundColor} d={svgData} fillRule="evenodd" />
    )
  }