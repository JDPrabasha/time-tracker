import React from "react";

import { BsCircleFill } from "react-icons/bs";

function Log(props) {
  return (
    <div className="log px-3 py-1 mb-0 hover:-translate-y-1 transition-all ease-linear">
      <div className="flex items-center">
        <div className="log__entry flex gap-2">
          <div className="flex gap-1 items-center">
            <BsCircleFill size={10} style={{ color: props.color }}/>
                    
            <h4 className="log__entry__project text-sm w-20" style={{ color: '#646b6b' }}>{props.name}</h4>
          </div>
          <p className="log__entry__activity text-sm font-semibold ">{props.entry}</p>
         
        </div>
        <div className="log__time ml-auto mr-3">
          <a className="log__time__duration">
            <span className="text-sm">{props.hours}</span>
            <span className="text-sm" style={{ color: '#646b6b' }}>:</span>
            <span className="text-sm">{props.minutes}</span>
            <span className="text-sm" style={{ color: '#646b6b' }}>h</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Log;
