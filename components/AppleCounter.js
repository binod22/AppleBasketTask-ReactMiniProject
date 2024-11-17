import Button from "./Button"
import AppleBasket from "./AppleBasket"
import LeftArrow from '../assets/image/left-arrow.png'
import RightArrow from '../assets/image/right-arrow.png'
import "./AppleCounter.css";
import { useState } from "react";

const AppleCounter = () => {
    totalAppleCount = 10;
    const [rightAppleCount, setRightAppleCount] = useState(0);
    const [leftAppleCount, setLeftAppleCount] = useState(totalAppleCount -rightAppleCount);
    // let leftcount =4;
    // let rightcount=totalAppleCount-leftcount;
    const leftClickHandler = () => {
      if(rightAppleCount > 0){
        setRightAppleCount(rightAppleCount-1)
        setLeftAppleCount(leftAppleCount+1)
      }
        
          
    }
    const rightClickHandler = () => {
        if (leftAppleCount > 0) {
          setRightAppleCount(rightAppleCount + 1);
          setLeftAppleCount(leftAppleCount - 1);
        }
          
    }

  return (
    <section>
      <AppleBasket basketName={"Basket 1"} count={leftAppleCount} />
      <Button clickHandler={leftClickHandler} imageUrl={LeftArrow} />
      <Button
        clickHandler={rightClickHandler}
        imageUrl={RightArrow}
      />
      <AppleBasket basketName={"Basket 2"} count={rightAppleCount} />
    </section>
  );
}

export default AppleCounter
