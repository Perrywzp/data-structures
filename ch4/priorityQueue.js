/**
 * Created by wangzhipei on 2017/1/23/0023.
 */
(function(w) {
    function PriorityQueue() {
        var items = [];

        function QueueElement (element, priority) {
            this.element = element;
            this.priority = priority;
        }

        this.enqueue = function(element, priority) {
            var queueElement = new QueueElement(element, priority);

            if(this.isEmpty()) {
                items.push(queueElement);
            } else {
                var added = false;
                for (var i = 0; i < items.length ; i++) {
                    if(queueElement.priority < items[i].priority) {
                        items.splice(i, 0, queueElement);
                        added = true;
                        break;
                    }
                }
            }

            if(!added) {
                items.push(queueElement);
            }
        }

        this.dequeue = function () {
            return items.shift();
        }

        this.front = function () {
            return items[0];
        }

        this.isEmpty = function () {
            return items.length == 0;
        }

        this.clear = function () {
            items = [];
        }

        this.size = function () {
            return items.length;
        }

        this.print = function () {
            console.log(items.toString());
        }
    }
    w.PriorityQueue = PriorityQueue;
})(window)