// import { useState, useEffect } from 'react'
// import { IPitchMap } from "@/common/types"
// import { shuffleArray } from '@/common/utils/helpers';
import { chromaticPitches, circleOfFifthsPitches, pitches } from "@/common/utils/pitch-map"
import { IPitchMap } from "@/common/types";
import { PITCH } from "@/common/enums";
import CircleOfFifthsSegment from "./CircleOfFifthsSegment";

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



interface CircleOfFifthsProps {
    // onChange: (selected:IPitchMap[]) => void; 
    // visible: IPitchMap[]; 
    // selected: IPitchMap[]; 
    // displayMode?: PITCH_MAP_DISPLAY_MODE;
}

export default function CircleOfFifths({
    // onChange, 
    // visible, 
    // selected,
    // displayMode = PITCH_MAP_DISPLAY_MODE.PREFERRED_NOTE_NAME, 
    // keyRootPitchMap
}: CircleOfFifthsProps) {
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
    const showMinor = true
    return (
      <span className="circle-of-fifths">
        <svg version="1.1" viewBox="0.0 0.0 400.0 400.0" fill="none" stroke="none" strokeLinecap="square" strokeMiterlimit="10" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
            <CircleOfFifthsSegment 
                pitchMap={pitches.C}
                svgData="m183.05643 102.250656l65.0 0l15.501312 -57.249344l-95.50131 -0.7506561z" 
            />
            <CircleOfFifthsSegment 
                pitchMap={pitches.G}
                svgData="m302.8084 133.50394l-54.80841 -31.254593l15.574799 -57.14698l81.48294 46.650917z" 
            />
            <CircleOfFifthsSegment 
                pitchMap={pitches.D}
                svgData="m391.8084 175.00262l-46.876648 -83.16535l-42.18109 41.724403l31.559052 55.939636z" 
            />
            <CircleOfFifthsSegment 
                pitchMap={pitches.A}
                svgData="m334.31235 255.0l57.496063 15.254608l-0.09451294 -95.39635l-56.963226 14.454071z" 
            />
            <CircleOfFifthsSegment 
                pitchMap={pitches.E}
                svgData="m302.937 310.0l42.370087 43.251984l46.629913 -83.62732l-57.624664 -14.750656z" 
            />
            <CircleOfFifthsSegment 
                pitchMap={pitches.B}
                svgData="m263.62466 399.75067l-15.936996 -57.81366l55.498672 -32.06299l42.314972 43.06299z" 
            />
            <CircleOfFifthsSegment 
                pitchMap={pitches.F$_Gb}
                svgData="m182.62466 342.62466l-15.566925 57.37796l96.75067 -0.25195312l-15.808411 -57.75067z" 
            />
            <CircleOfFifthsSegment 
                pitchMap={pitches.C$_Db}
                svgData="m85.62467 352.75067l41.68241 -42.24936l55.50656 32.312347l-15.37532 57.24933z" 
            />
            <CircleOfFifthsSegment 
                pitchMap={pitches.G$_Ab}
                svgData="m95.05774 255.00262l-58.12073 13.934387l48.871387 83.81366l41.750656 -42.498688z" 
            />
            <CircleOfFifthsSegment 
                pitchMap={pitches.D$_Eb}
                svgData="m37.557743 174.74934l-0.7506561 94.25197l58.24934 -14.0l-0.24934387 -65.25197z" 
            />
            <CircleOfFifthsSegment 
                pitchMap={pitches.A$_Bb}
                svgData="m37.687664 174.81364l47.370075 -82.81102l42.249344 43.0l-33.0 55.249344z" 
            />
            <CircleOfFifthsSegment 
                pitchMap={pitches.F}
                svgData="m127.31233 135.06299l-42.125984 -42.937004l82.939644 -47.750656l15.181091 57.87664z" 
            />
            {(showMinor) ? (
                <>
                    <CircleOfFifthsSegment 
                        pitchMap={pitches.A}
                        svgData="m195.75066 145.75066l-12.438324 -43.56431l64.81366 -0.06036377l-10.569565 42.874016z" 
                    />
                    <CircleOfFifthsSegment 
                        pitchMap={pitches.E}
                        svgData="m273.93176 165.57742l-36.62468 -20.824142l10.755905 -42.566933l54.874023 31.314964z" 
                    />
                    <CircleOfFifthsSegment 
                        pitchMap={pitches.B}
                        svgData="m294.05774 201.74803l-20.249329 -36.249344l29.005249 -31.997375l31.994751 55.997375z" 
                    />
                    <CircleOfFifthsSegment 
                        pitchMap={pitches.F$_Gb}
                        svgData="m293.8084 243.24934l0.24932861 -41.750656l40.816284 -12.249344l-0.56692505 65.750656z" 
                    />
                    <CircleOfFifthsSegment 
                        pitchMap={pitches.C$_Db}
                        svgData="m273.3071 278.4987l29.629913 31.687653l31.370087 -55.18634l-40.370087 -11.750656z" 
                    />
                    <CircleOfFifthsSegment 
                        pitchMap={pitches.G$_Ab}
                        svgData="m237.18636 299.43832l10.501312 42.624664l55.37532 -32.0l-29.624664 -31.501312z" 
                    />
                    <CircleOfFifthsSegment 
                        pitchMap={pitches.D$_Eb}
                        svgData="m196.30708 299.24933l-13.745407 43.687683l65.24672 -0.9370117l-10.750656 -42.75067z" 
                    />
                    <CircleOfFifthsSegment 
                        pitchMap={pitches.A$_Bb}
                        svgData="m160.30708 279.0l-33.68241 32.0l56.183723 32.0l13.692917 -43.624664z" 
                    />
                    <CircleOfFifthsSegment 
                        pitchMap={pitches.F}
                        svgData="m140.06299 243.0l-46.249336 12.186356l32.994743 55.813644l33.74803 -31.750671z" 
                    />
                    <CircleOfFifthsSegment 
                        pitchMap={pitches.C}
                        svgData="m139.30577 202.24934l-45.249344 -12.0l-0.24934387 65.0l46.249344 -12.249344z" 
                    />
                    <CircleOfFifthsSegment 
                        pitchMap={pitches.G}
                        svgData="m160.55643 165.24934l-33.49343 -30.312332l56.186348 -32.750664l12.5590515 43.561684z" 
                    />
                    <CircleOfFifthsSegment 
                        pitchMap={pitches.D}
                        svgData="m139.24934 202.31233l-45.191605 -12.062988l33.12861 -55.312332l33.56431 30.37532z" 
                    />
                </>
                

            ) : null}
        </svg>
      </span>
      
    )
  }