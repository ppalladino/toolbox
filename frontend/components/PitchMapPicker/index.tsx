import { useState, useEffect } from 'react'
import { IPitchMap } from "@/common/types"
import { shuffleArray } from '@/common/utils/helpers';
import { pitchMapsIncludes, togglePitchMap } from "@/common/utils/music-theory"

// export enum DISPLAY_MODE {
//     PITCH_NAME,
//     PREFERED_NOTE_NAME,
//     ALL_NOTE_NAMES
//   }

interface PitchMapPickerProps {
    onChange: (selected:IPitchMap[]) => void; 
    visible: IPitchMap[]; 
    selected: IPitchMap[]; 
    randomize?: boolean; 
    // displayMode?: DISPLAY_MODE;
}

export default function PitchMapPicker({
    onChange, 
    visible, 
    selected,
    randomize = false, 
    // displayMode =  DISPLAY_MODE.PREFERED_NOTE_NAME
}: PitchMapPickerProps) {
    // const [pitchMaps, setPitchMaps] = useState<IPitchMap[]>([...visible])
    // const [selectedPitchMaps, setSelectedPitchMaps] = useState<IPitchMap[]>([...selected])
  
    // useEffect(() => {
    //     if(randomize) {
    //         setPitchMaps(shuffleArray(pitchMaps))
    //     } else {
    //         setPitchMaps(pitchMaps)
    //     }

    //   }, [pitchMaps]) 

    const handleClick = (pitchMap: IPitchMap) => () => {
        // const selected = togglePitchMap(selectedPitchMaps, pitchMap)
        // setSelectedPitchMaps(selected)
        onChange(togglePitchMap(selected, pitchMap))
    }

    const getKeyClass = (pitchMap: IPitchMap):string => {
        const isSelected = pitchMapsIncludes(selected, pitchMap)
        // console.log({selectedPitchMaps, pitchMap, isSelected})
        
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
                        key={pm.preferedNoteName} 
                        onClick={handleClick(pm)}
                    >
                       {/* {getPitchMapDisplay(displayMode, pm)} */}
                       {pm.preferedNoteName}
                    </button>
                )
            })
        }
      </span>
      
    )
  }