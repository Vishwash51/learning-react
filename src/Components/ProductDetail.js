import React from 'react'
function ProductDetail(props) {
    let len = props.data.length - 1
    console.warn(props.data)
    console.warn(props.data[0]==undefined?null:props.data[len].cardData.pice )

  let lst=props.data.map((item, i) => 
  <div className="col-xs-12 m-1" style={{border:'2px solid gray'}}>
      console.log({item});
          {item.cardData.pice}
  </div>
)

    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            <br />
            <div className="row">
                {
                    //lst
                }
            {/* props.data.map((item, i) =>
                <div className="col-xs-12 m-1" style={{border:'2px solid gray'}}>
                    
                        {item}
                    
                </div>

            ) */}
            </div>
        </div>
    )
}

export default ProductDetail