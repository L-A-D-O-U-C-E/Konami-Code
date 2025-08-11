(() =>{
    const konamiCode = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a'
    ];

    let index = 0;

    function onKeyDown(event) {
        event.key === konamiCode[index]? index++ : index = 0; //if shorthand ถ้าผู้ใช้กดถูก ก็เช็คต่อว่าอันต่อไปเขากดถูกไหม ถ้าผิดก็จะรีเซ็ตเป็น 0 ใหม่
        console.log(event.key);

        if(konamiCode.length === index){
            startSnowing();
        }
    }
    function run() {
        document.addEventListener('keydown', onKeyDown);

    }
    run();
})();