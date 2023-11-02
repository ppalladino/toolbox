import { IPitchMap } from "@/common/types"
import { pitchMapsIncludes, getPitchMapDisplay, PITCH_MAP_DISPLAY_MODE } from "@/common/utils/music-theory"

interface PitchMapResultsProps {
    visible: IPitchMap[];
    chosen: IPitchMap[]; 
    expected: IPitchMap[];
    displayMode?: PITCH_MAP_DISPLAY_MODE;
    keyRootPitchMap?: IPitchMap; // only really needed if displayMode = PITCH_MAP_DISPLAY_MODE.KEY_CONTEXTED_NOTE_NAME
}

export default function PitchMapResults({
    visible, 
    chosen,
    expected,
    displayMode = PITCH_MAP_DISPLAY_MODE.PREFERRED_NOTE_NAME, 
    keyRootPitchMap
}: PitchMapResultsProps) {
    if(displayMode === PITCH_MAP_DISPLAY_MODE.KEY_CONTEXTED_NOTE_NAME && !keyRootPitchMap) {
        throw new Error('keyRootPitchMap is required when displayMode is PITCH_MAP_DISPLAY_MODE.KEY_CONTEXTED_NOTE_NAME')
    }

    const getKeyClass = (pitchMap: IPitchMap):string => {
        const isChosen = pitchMapsIncludes(chosen, pitchMap)
        const isExpected = pitchMapsIncludes(expected, pitchMap)
        
        if(isExpected) {
            return 'correct'
        } else if(isChosen && !isExpected) {
            return 'incorrect'
        }
        return ''
    }

    return (
      <span className="button-group">
        {
            visible.map(pm => {
                return (
                    <button 
                        className={getKeyClass(pm)}
                        key={pm.preferredNoteName} 
                    >
                       {getPitchMapDisplay(displayMode, pm, keyRootPitchMap)}
                    </button>
                )
            })
        }
      </span>
      
    )
  }