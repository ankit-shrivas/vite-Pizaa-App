function PizzaList(props){
      
  return <>
      <div className="width-m">
          <div className="d-grid gap-100">
         
		 {
                      props.pizzaData.map((item)=>{
                        return <>
                            <div className="d-grid gap">
								<div >
									<img src= {item.photoName} className="w-100" />
								  </div>
								  <div className="text-right">
									<p ><strong>{item.name}</strong></p>
									<p>{item.ingredients}</p>
									  <p className="text-golden">Price : {item.price}</p>
								  </div>        
								</div>
							</>
									})
                  }            
				  
						
            </div>    
							<div className="text-center btn-css m-t">
								<button><strong>Order</strong></button>
							</div>
       </div>
    </>
}

export default PizzaList;