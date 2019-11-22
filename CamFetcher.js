class CamFetcher
{
    constructor(width,height,id,callback)
    {
        const CamFetch=(sketch)=>
        {
            sketch.setup = () => 
            {
                sketch.frameRate(10); // Attempt to refresh at starting FPS

                sketch.createCanvas(width, height);
                sketch.video = sketch.createCapture(sketch.VIDEO);
                sketch.video.size(width, height);
                sketch.video.hide();

               
            };


            sketch.draw = () =>
            {
                sketch.background(255);
                sketch.image(sketch.video, 0, 0, width, height);
                if(callback)
                callback(sketch.video);
            };
        }
        let camFetch=new p5(CamFetch,id);
}
    
}
