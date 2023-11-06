import { IInterval } from "@/common/types";
import { removeElement, pushElement } from "@/common/utils/helpers";

interface IntevalPickerProps {
    onChange: (selected:IInterval[]) => void; 
    visible: IInterval[]; 
    selected: IInterval[]; 
}




export default function IntevalPicker({
    onChange, 
    visible, 
    selected,
}: IntevalPickerProps) {

    const handleClick = (interval: IInterval) => () => {
        const newSelected = !!selected.find(s => s.shortName === interval.shortName) ? selected.filter(s => s.shortName !== interval.shortName) : pushElement(selected, interval)
        onChange(newSelected)
    }

    const getClass = (interval: IInterval):string => {
        const isSelected = !!selected.find(s => s.shortName === interval.shortName)
        if(isSelected) {
            return 'selected'
        } else {
            return ''
        }
    }

    return (
      <span className="button-group">
        {
            visible.map(interval => {
                return (
                    <button 
                        className={getClass(interval)}
                        key={interval.shortName} 
                        onClick={handleClick(interval)}
                    >
                       {interval.shortName}
                    </button>
                )
            })
        }
      </span>
      
    )
  }