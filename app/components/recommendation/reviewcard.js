import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ReviewCard({ name, review, rating }) {
    const elements =[];

    for (let i=0; i < parseInt(rating) ; i++)
    {
        elements.push(
            <FontAwesomeIcon icon={faStar} />
        )
    }
  return (
    
    <div className="text-dark min-h-[200px] max-w-[250px] border-dark border-4 p-4 w-[260px] flex flex-col rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="w-full flex flex-row items-center justify-center space-x-3">
        <p className="font-bold text-base">{name}</p>
        {
            elements.map(element=>{
                return(
                    <span className="text-sm">{element}</span>
                )
                
            })
        }
      </div>
      <p className="mt-2 text-sm text-center text-dark leading-relaxed">
        {review}
      </p>
    </div>
    
  );
}
