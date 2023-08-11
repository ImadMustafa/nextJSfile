const Body1 = ({title, text, imageUrl }) => {
    return (
        <div class="text-container mx-4 my-8 grid 2xl:container mx-auto">
        <div class="text w-5/6 md:w-90 p-4">
            <h2 class="font-bold text-2xl">{title}</h2>
            <p>{text}</p>
        </div>
        <div class="picture w-1/2 md:w-50  justify-center">
            <img src={imageUrl} width="350px" alt="Image" />
        </div>
    </div>
    
     );
}
 
export default Body1;