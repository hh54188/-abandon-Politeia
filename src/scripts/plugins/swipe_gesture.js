function SwipeGesture(options) {

    this.nextPageEventHandlers = [];
    this.prevPageEventHandlers = [];

    this.element = options.element;
    this.target = options.target;

    this.disableTurnNextPageFlag = false;
    this.disableTurnPrevPageFlag = false;

    var viewportWidth = window.innerWidth;

    var distance = 0; // 手指移动距离
    var direction = -1; // 手指移动方向

    var lastOffset = 0; // 上一次的移动位移，用于还原
    var offset = 0; // 当前位移  

    var hammertime = new Hammer(this.element);

    function invokeNextPageEventHandler() {
        this.nextPageEventHandlers.forEach((handler) => {
            handler.call(this);
        });
    }

    function invokePrevPageEventHandler() {
        this.prevPageEventHandlers.forEach((handler) => {
            handler.call(this);
        });                        
    };

    invokeNextPageEventHandler = invokeNextPageEventHandler.bind(this);
    invokePrevPageEventHandler = invokePrevPageEventHandler.bind(this);

    function animateOffset(target, offset) {
        Velocity(
            target, 
            { left: offset }, 
            { duration: 300, easing: 'ease-out'}
        );
    }

    function panHorizontalMoveHandler(event) {
        distance = event.distance;
        direction = event.direction;
        this.target.style.left = (offset + event.deltaX);
    }

    panHorizontalMoveHandler = panHorizontalMoveHandler.bind(this);

    hammertime.on('panend', function () {
        if (distance > viewportWidth / 2) {
            if (direction === Hammer.DIRECTION_LEFT) {

                if (this.disableTurnNextPageFlag) {
                    animateOffset(this.target, offset = lastOffset);              
                    return;
                }

                offset = lastOffset - viewportWidth;
                lastOffset = offset;                            
                animateOffset(this.target, offset);

                // Next Page
                invokeNextPageEventHandler();
            } else if (direction === Hammer.DIRECTION_RIGHT) {

                if (this.disableTurnPrevPageFlag) {
                    animateOffset(this.target, offset = lastOffset);              
                    return;
                }

                offset = lastOffset + viewportWidth;
                lastOffset = offset;                           
                animateOffset(this.target, offset);

                // Previous Page
                invokePrevPageEventHandler();
            }
        } else {
            offset = lastOffset;
            animateOffset(this.target, offset);
        }
    }.bind(this));

    hammertime.on('panleft', panHorizontalMoveHandler);
    hammertime.on('panright', panHorizontalMoveHandler);                    
}


// Event API
SwipeGesture.prototype.onNextPageEvent = function (eventHandler) {
    this.nextPageEventHandlers.push(eventHandler);
}

SwipeGesture.prototype.onPrevPageEvent = function (eventHandler) {
    this.prevPageEventHandlers.push(eventHandler);
}

// Page API
SwipeGesture.prototype.enableTurnNextPage = function () {
    this.disableTurnNextPageFlag = false;
}

SwipeGesture.prototype.disableTurnNextPage = function () {
    this.disableTurnNextPageFlag = true;
}

SwipeGesture.prototype.enableTurnPrevPage = function () {
    this.disableTurnPrevPageFlag = false;
}

SwipeGesture.prototype.disableTurnPrevPage = function () {
    this.disableTurnPrevPageFlag = true;
}