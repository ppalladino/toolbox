import { useState, useEffect } from 'react'
import { IPitchMap } from "@/common/types"
import { shuffleArray } from '@/common/utils/helpers';
import { pitchMapsIncludes, togglePitchMap, getPitchMapDisplay, PITCH_MAP_DISPLAY_MODE } from "@/common/utils/pitch-map"

interface PitchMapPickerProps {
    onChange: (selected:IPitchMap[]) => void; 
    visible: IPitchMap[]; 
    selected: IPitchMap[]; 
    displayMode?: PITCH_MAP_DISPLAY_MODE;
    keyRootPitchMap?: IPitchMap; // only really needed if displayMode = PITCH_MAP_DISPLAY_MODE.KEY_CONTEXTED_NOTE_NAME
}

export default function PitchMapPicker({
    onChange, 
    visible, 
    selected,
    displayMode = PITCH_MAP_DISPLAY_MODE.PREFERRED_NOTE_NAME, 
    keyRootPitchMap
}: PitchMapPickerProps) {
    if(displayMode === PITCH_MAP_DISPLAY_MODE.KEY_CONTEXTED_NOTE_NAME && !keyRootPitchMap) {
        throw new Error('keyRootPitchMap is required when displayMode is PITCH_MAP_DISPLAY_MODE.KEY_CONTEXTED_NOTE_NAME')
    }

    const handleClick = (pitchMap: IPitchMap) => () => {
        onChange(togglePitchMap(selected, pitchMap))
    }

    const getKeyClass = (pitchMap: IPitchMap):string => {
        const isSelected = pitchMapsIncludes(selected, pitchMap)
        if(isSelected) {
            return 'selected'
        } else {
            return ''
        }
    }

    return (
      <span className="button-group">
        {
            visible.map(pm => {
                return (
                    <button 
                        className={getKeyClass(pm)}
                        key={pm.preferredNoteName} 
                        onClick={handleClick(pm)}
                    >
                       {getPitchMapDisplay(displayMode, pm, keyRootPitchMap)}
                    </button>
                )
            })
        }
      </span>
      
    )
  }