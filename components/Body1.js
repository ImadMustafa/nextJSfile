const Body1 = ({title, text, imageUrl }) => {
    return (
        <div class="text-container my-8 flex 2xl:container mx-auto grid-cols-2">
        <div class="text w-5/6 md:w-90 p-4">
            <h2 class="font-bold text-2xl">{title}</h2>
            <p>{text}</p>
        </div>
        <div class="picture w-1/2 md:w-50 justify-center">
            <img src={imageUrl} width="350px" alt="Image" />
        </div>
    </div>
    
     );
}
 
export default Body1;