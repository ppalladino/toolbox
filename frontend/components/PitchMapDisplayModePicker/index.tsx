import { PITCH_MAP_DISPLAY_MODE, pitchMapDisplayModes } from "@/common/utils/pitch-map"

interface PitchMapDisplayModePickerProps {
    onChange: (selected:PITCH_MAP_DISPLAY_MODE) => void; 
    selected: PITCH_MAP_DISPLAY_MODE; 
}

export default function PitchMapDisplayModePicker({
    onChange, 
    selected
}: PitchMapDisplayModePickerProps) {

    const handleClick = (mode: PITCH_MAP_DISPLAY_MODE) => () => {
        onChange(mode)
    }

    const getKeyClass = (mode: PITCH_MAP_DISPLAY_MODE):string => {
        const isSelected = mode === selected
        if(isSelected) {
            return 'selected'
        } else {
            return ''
        }
    }

    return (
      <span className="button-group">
        {
            pitchMapDisplayModes.map(m => {
                return (
                    <button 
                        className={getKeyClass(m.mode)}
                        key={m.abbrName} 
                        onClick={handleClick(m.mode)}
                    >
                       {m.abbrName}
                    </button>
                )
            })
        }
      </span>
      
    )
  }