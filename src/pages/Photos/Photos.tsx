import { useState } from "react";

const Photos = () => {
    
    const [category, setCategory] = useState('happy');

    const handleMood = (mood) => {
        switch(mood) {
            case "happy":
                category = happy;
                break;
                case "happy":
                    category = happy;
                    break;
            case ""
        }
    }
    return (

        <h1>Photos</h1>
    );
};

export default Photos;