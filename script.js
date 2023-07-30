let countDisplay = $('#count');
let count = 0

$('.decrement').click(()=>{
    count--
    countDisplay.html(count)
    console.log(count)
    updateColor()
})

$('.increment').click(()=>{
    count++
    countDisplay.html(count);
    updateColor();
})

$('.reset').click(()=>{
    count = 0
    countDisplay.html(count);
    updateColor();
})


const updateColor = () => {

    if (count<0) {
        countDisplay.css('color', 'red')
    } else if (count>0) {
        countDisplay.css('color', 'green')
    } else {
        countDisplay.css('color', 'black')
    }
}
