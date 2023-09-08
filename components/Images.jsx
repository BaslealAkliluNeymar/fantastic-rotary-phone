import { images } from "../data.js"
const Images = () => {
  return (
   <div className="flex flex-col">
       {/* <img src= "src\assets\23.jpg" className="w-[300px] h-[300px]"/> 
       <img src= "src\assets\23.jpg" className="w-[300px] h-[300px]"/>
       <img src= "src\assets\23.jpg" className="w-[300px] h-[300px]"/>
       <img src= "src\assets\23.jpg" className="w-[300px] h-[300px]"/>
       <img src= "src\assets\23.jpg" className="w-[300px] h-[300px]"/> */}
       {
        images.map((image,index)=>(
            <div key={index} className="flex flex-col items-start gap-5">
                <h3 className="mb-5">{image.month}</h3>
                 <div className="flex flex-wrap gap-1 w-full justify-start ">
                    {image.images.map((img ,index) =>(
                        <img src={img.url} key={index} className="w-[20%] h-[20%]"/>
                    ))}
                 </div>
            </div>
        ))
       }

   </div>
  )
}

export default Images