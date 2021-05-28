import React,{useState} from 'react';

import packageContext from './context';

const Provider = props =>{

    const [mission,setMission] = useState({
        mname : 'GO to Russia',
        agent : '007',
        accept: 'not Accepted'
    })

    return(
        <packageContext.Provider value={{
            data : mission,
            isMissionAccepted: () =>{
                setMission({...mission,accept:'ACCEPTED'})
            }
        }}>
            {props.children}
        </packageContext.Provider>
    )
}

export default Provider;