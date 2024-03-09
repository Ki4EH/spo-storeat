

const getMeal= async()=>{
    const response = await fetch('http://localhost:4200/meals', {
    next: {revalidate: 3600}
  })
  
  if(!response.ok){
    throw new Error("Что-то пошло не так")
  }
  return response.json()
}

const MenuPage = async() =>{
    return(
        <div>
            Menu
        </div>
        
    )
}

export default MenuPage