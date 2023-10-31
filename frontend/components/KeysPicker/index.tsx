import { useState, useEffect } from 'react'
import { IPitchMap } from "@/common/types"
import { shuffleArray } from '@/common/utils/helpers';
import { pitchMapsIncludes, togglePitchMap, getPitchMapDisplay } from "@/common/utils/music-theory"

// export enum DISPLAY_MODE {
//     PITCH_NAME,
//     PREFERED_NOTE_NAME,
//     ALL_NOTE_NAMES
//   }

interface KeysPickerProps {
    onChange: (selected:IPitchMap[]) => void; 
    keys: IPitchMap[]; 
    selectedKeys?: IPitchMap[]; 
    randomize?: boolean; 
    // displayMode?: DISPLAY_MODE;
}

export default function KeysPicker({
    onChange, 
    keys, 
    selectedKeys = keys,
    randomize = false, 
    // displayMode =  DISPLAY_MODE.PREFERED_NOTE_NAME
}: KeysPickerProps) {
    const [pitchMaps, setPitchMaps] = useState<IPitchMap[]>([...keys])
    const [selectedPitchMaps, setSelectedPitchmaps] = useState<IPitchMap[]>([...selectedKeys])
  
    useEffect(() => {
        if(randomize) {
            setPitchMaps(shuffleArray(pitchMaps))
        } else {
            setPitchMaps(pitchMaps)
        }

      }, [keys]) 

    const handleClick = (pitchMap: IPitchMap) => () => {
        const selected = togglePitchMap(selectedPitchMaps, pitchMap)
        setSelectedPitchmaps(selected)
        onChange(selected)
    }

    return (
      <span className="button-group">
        {
            pitchMaps.map(pm => {
                const isSelected = pitchMapsIncludes(selectedPitchMaps, pm)
                let classes = ''
                classes = isSelected ? classes + ' selected' : classes

                return (
                    <button 
                        className={classes}
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