import { IPitchMap } from "@/common/types"
import { pitchMapsIncludes, togglePitchMap } from "@/common/utils/music-theory"

interface PitchMapResultsProps {
    visible: IPitchMap[];
    chosen: IPitchMap[]; 
    expected: IPitchMap[];
}

export default function PitchMapResults({
    visible, 
    chosen,
    expected
}: PitchMapResultsProps) {
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
                        key={pm.preferedNoteName} 
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