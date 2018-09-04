class SocketClient{
    constructor(callback){
        this.ws = new WebSocket("wss://api.hitbtc.com/api/2/ws");
        this.ws.onopen = function () {
            console.log("connected");
        };
        this.ws.onclose = function(event) {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                alert('Обрыв соединения'); // например, "убит" процесс сервера
            }
            console.log('Код: ' + event.code + ' причина: ' + event.reason);
        };

        this.ws.onmessage = function(event) {
            const data = event.data;
            console.log("asd" + data);
            if (data.method === "updateOrderbook"){
                callback(data.param);
            }

        };

        this.ws.onerror = function(error) {
            alert("Ошибка " + error.message);
        };

    }

    fetch(){
        if (this.ws.readyState === this.ws.OPENED){
            console.log("www");
            this.ws.send("{'method': 'subscribeOrderbook',   'params': {     'symbol': 'ETHBTC'   },   'id': 123 }");
        }
    }
}

export default SocketClient;