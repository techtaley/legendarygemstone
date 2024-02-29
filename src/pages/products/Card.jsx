import { useNavigate } from 'react-router-dom';

export default function Card({ data }) {
  const navigate = useNavigate();
  //console.log(data)
  
  return (
    <div className="product-list-div" key={data.id} onClick={() => navigate(`/products/${data.id}`)}>      
      <img className="product-list-img" 
        src={data.attributes.media[0].image} 
        alt={`${data.attributes.title} photo`} 
      />             
    <p className='bold'>{data.attributes.title}</p>   
    <p>${data.attributes.cost}</p>
  </div>              
  )
}