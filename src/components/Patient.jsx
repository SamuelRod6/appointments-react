import React from 'react';

function Patient() {

  return (
    <div className="bg-white shadow-md px-5 py-8 rounded-lg m-3">
    <p className="font-bold mb-3 text-gray-600 ">
      Nombre:{' '}
      <span className="font-normal normal-case">Samuel</span>
    </p>
    <p className="font-bold mb-3 text-gray-600 ">
      Número de contacto:{' '}
      <span className="font-normal normal-case">+1 1234567</span>
    </p>
    <p className="font-bold mb-3 text-gray-600 ">
      Email:{' '}
      <span className="font-normal normal-case">samuel@email.com</span>
    </p>
    <p className="font-bold mb-3 text-gray-600 ">
      Fecha del Alta:{' '}
      <span className="font-normal normal-case">30/01/22</span>
    </p>
    <p className="font-bold mb-3 text-gray-600 ">
      Síntomas:{' '}
      <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus dolorem ex officia tempora. Culpa quia fuga et sit, maiores, quae sequi tempora perferendis repellat neque est voluptatem, aliquam tenetur?</span>
    </p>
  </div>
  )
}

export default Patient;
