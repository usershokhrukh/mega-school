import React from 'react'
import "./results.modules.scss";
import Image from 'next/image';

const Results = () => {
  return (
    <div className='results'>
      <div className="results__box">
        <h1 className="results__h1">Results</h1>
        <p className="results__p">Results of our students who took the IELTS exam</p>

        <div className="results__imags-box">
           <Image
            src="/images/results/results-1.jpg"
            alt="IELTS Result"
            width={300}        
            height={400}       
            priority         
          />
        </div>
      </div>
    </div>
  )
}

export default Results