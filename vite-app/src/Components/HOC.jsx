const HOCComp = (Component) => {
    return ({isLoading}) => {
        if(isLoading){
            return <h2>Loading...</h2>
        }else{
            return <Component />
        }
    }
}

export default HOCComp;