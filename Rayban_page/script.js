Shery.imageEffect("#back", {
    style: 5, config:
    {
        "a": {
            "value": 1.49,
            "range": [0, 30]
        },
        "b": {
            "value": -0.98,
            "range": [-1, 1]
        },
        "zindex": {
            "value": ""
            , "range": [-9999999, 9999999]
        },
        "aspect": { "value": 1.943762782940924 },
        "ignoreShapeAspect": { "value": true },
        "shapePosition": { "value": { "x": 0, "y": 0 } },
        "shapeScale": { "value": { "x": 0.5, "y": 0.5 } },
        "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] },
        "shapeRadius": { "value": 0, "range": [0, 2] },
        "currentScroll"
            : { "value": 0 },
        "scrollLerp"
            : { "value": 0.07 },
        "gooey": { "value": true },
        "infiniteGooey": { "value": true },
        "growSize": { "value": 4, "range": [1, 15] },
        "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn"
            : { "value": 1, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.31, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 1 }, "noise_speed": { "value": 1.59, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 3 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.47, "range": [0, 2] }, "noise_scale": { "value": 12.15, "range": [0, 100] }
    }, gooey: true
});



let elems  = document.querySelectorAll("#elem");
elems.forEach((elem)=>{
    let h1s = elem.querySelectorAll("h1"); // document ke sare h1 select nhi karne hai, sirf elem ke andar ke h1 select karne hai
    let index = 0;
    let animationInProgress = false; // to prevent multiple clicks during animation
    let main = document.querySelector("#main");
main.addEventListener("click", ()=>{
   if(!animationInProgress){
    animationInProgress = true; // set the flag to true when animation starts
     gsap.to(h1s[index],{
        top: "-=100%", // it will move the h1 element up by 100% of its own height
        ease: Expo.easeInOut,// it will use the Expo.easeInOut easing function for a smooth animation
        duration: 1,// it will set the duration of the animation to 1 second  
        onComplete: function(){ // 
           gsap.set(this._targets[0], {top:"100%"})
           animationInProgress = false; // reset the flag to false when animation is complete, allowing the next click to trigger the animation again
        }
    })
    index === h1s.length-1? (index=0) :index++;// it will check if the index is equal to the last index of the h1 elements, if yes then it will reset the index to 0, otherwise it will increment the index by 1
        gsap.to(h1s[index],{
        top: "-=100%", // it will move the h1 element up by 100% of its own height
        ease: Expo.easeInOut,// it will use the Expo.easeInOut easing function for a smooth animation
        duration: 1,// it will set the duration of the animation to 1 second  
    })
}

})
})