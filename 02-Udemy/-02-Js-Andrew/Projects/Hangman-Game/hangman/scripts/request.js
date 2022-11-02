const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}` ,{})
    
    if(response.status === 200){
       const data = await response.json()
       return data.puzzle
    }else {
        throw new Error('Unable to fatch data')
    }
}

const getCountry = async (countryCode) => {
    const response = fetch('//api.countrylayer.com/v2/all' , {})
    if( e.target.status === 200){
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode).name
    } else{
            throw new Error('Unable to fatch data')
        }
}  

const getLocation = async () =>{
    const response = await  fetch(`//ipinfo.io/json?token=2a11bd55cc8f9c` , {})

    if( e.target.status === 200){
            return response.json()
        } else {
            throw new Error('Unable to fatch data')
        }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

