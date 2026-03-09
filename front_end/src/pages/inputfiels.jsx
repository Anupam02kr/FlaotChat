const Inputfield = ({type ,placeholder}) => {
  return (
    <div>
       <div className="input-field-gmail">
            <input className='mail' type={type} placeholder={placeholder} required />
          </div>
          
    </div>
  )
}

export default Inputfield
