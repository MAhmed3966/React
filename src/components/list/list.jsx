
export default function List (props){
    const {countriesDisplay, setCountriesDisplay} = props; 
   

    return <div className="list">
        <ul>
        
         {
         countriesDisplay.map(country => {return (
          <li>{country}</li>
        )})}
            
        </ul>
    </div>
}