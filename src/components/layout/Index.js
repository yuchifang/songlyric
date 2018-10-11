import React from 'react'
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';
const Index= () => {
  return (//React.Fragment like div
    <div>
      <React.Fragment>
        <Search /> 
        <Tracks /> 
      </React.Fragment>
    </div>
  )
}
export default Index;