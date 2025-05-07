import React, { useEffect, useState } from 'react';

const Queries = () => {
    const [queries, setQueries] = useState([]);
        useEffect(()=>{
            fetch('/faq.json')
            .then(res=>res.json())
            .then(data=>setQueries(data.faqs))
        },[])
    return (
        <div className='my-20 w-11/12 mx-auto' data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
            <div className='space-y-3 mt-10 px-6'>
            {
                queries.map(query=>
                    <div key={query.id} className="collapse collapse-arrow bg-base-200 border border-base-300 p-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold text-xl">{query.question}</div>
                        <div className="collapse-content text-base font-medium text-gray-500">{query.answer}</div>
                    </div>)
            }
            </div>
            
        </div>
    );
};

export default Queries;