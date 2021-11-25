import React from 'react'
import Card from './Card'

const Contain = (props: any) => {
    return (
    <div className="container p-3">
          <div className="container p-2">
                <div className="row">
                    <div className="col">
                      <Card/>
                    </div>
                    <div className="col">
                      <Card/>
                    </div>
                    <div className="col">
                      <Card/>
                    </div>
                    <div className="col">
                       <Card/>
                    </div>
                </div>
          </div>
    </div>
    );

}
export default Contain;