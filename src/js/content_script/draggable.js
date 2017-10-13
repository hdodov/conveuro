function Draggable(elem) {
    this.elem = elem;
    this.trigger = elem;
    this.moving = false;

    this.onStart = null;
    this.onMove = null;
    this.onStop = null;

    this.startHandler = function (event) {
        event.preventDefault();
        event.stopPropagation();

        document.addEventListener("mousemove", this.moveHandler);
        document.addEventListener("mouseup", this.stopHandler);

        this.moving = true;
        this.start(event);
    }.bind(this);

    this.moveHandler = function (event) {
        this.move(event);
    }.bind(this);

    this.stopHandler = function (event) {
        if (this.moving) {
            document.removeEventListener("mouseup", this.stopHandler);
            document.removeEventListener("mousemove", this.moveHandler);

            this.moving = false;
            this.stop(event);
        }
    }.bind(this);
} Draggable.prototype = {
    init: function () {
        this.previousTriggerCursor = this.trigger.style.cursor;
        this.trigger.style.cursor = "move";
        this.trigger.addEventListener("mousedown", this.startHandler);
    },

    start: function (event) {
        var left = parseInt(this.elem.style.left),
            top = parseInt(this.elem.style.top);

        this.offset = {
            x: event.pageX - left,
            y: event.pageY - top
        };

        if (typeof this.onStart == "function") {
            this.onStart(event);
        }
    },

    move: function (event) {
        var left = event.pageX,
            top = event.pageY;

        if (this.offset) {
            left -= this.offset.x;
            top -= this.offset.y;
        }

        this.elem.style.left = left + "px";
        this.elem.style.top = top + "px";

        if (typeof this.onMove == "function") {
            this.onMove(event);
        }
    },

    stop: function (event) {
        if (typeof this.onStop == "function") {
            this.onStop(event);
        }
    },

    destroy: function () {
        this.trigger.style.cursor = this.previousTriggerCursor;
        this.trigger.removeEventListener("mousedown", this.startHandler);
        this.stopHandler();

        this.elem = null;
        this.target = null;
        this.offset = null;

        this.onStart = null;
        this.onMove = null;
        this.onStop = null;
    }
};