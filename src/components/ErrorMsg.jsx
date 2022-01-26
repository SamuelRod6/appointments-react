
function ErrorMsg({children}) {
  return (
    <div 
    className="bg-red-600 text-white font-bold text-center 
    p-3 uppercase rounded-xl mb-5">
      {children}
    </div>
  )
}

export default ErrorMsg;
