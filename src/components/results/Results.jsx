import React from 'react'
import "./results.modules.scss";
import Image from 'next/image';

const Results = () => {
  return (
    <div id='results' className='results'>
      <div className="results__box">
        <h1 className="results__h1">Natijalar</h1>
        <p className="results__p">IELTS imtihonini topshirgan talabalarimizning natijalari</p>

        <div className="results__imags-box">
           <Image
            src="/images/results/result-1.jpg"
            alt="IELTS Result"
            width={300}        
            height={400}       
            priority         
          />

          <Image
            src="/images/results/result-2.jpg"
            alt="IELTS Result"
            width={300}        
            height={400}       
            priority         
          />

          <Image
            src="/images/results/result-3.jpg"
            alt="IELTS Result"
            width={300}        
            height={400}       
            priority         
          />

          <Image
            src="/images/results/result-4.jpg"
            alt="IELTS Result"
            width={300}        
            height={400}       
            priority         
          />

          <Image
            src="/images/results/result-5.jpg"
            alt="IELTS Result"
            width={300}        
            height={400}       
            priority         
          />
          <Image
            src="/images/results/result-6.jpg"
            alt="IELTS Result"
            width={300}        
            height={400}       
            priority         
          />

          <Image
            src="/images/results/result-7.jpg"
            alt="IELTS Result"
            width={300}        
            height={400}       
            priority         
          />

          <Image
            src="/images/results/result-8.jpg"
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